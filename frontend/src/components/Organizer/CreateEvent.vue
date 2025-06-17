<template>
  <div class="flex h-screen bg-gray-50 font-sans">

    <aside class="w-280px flex-shrink-0 bg-black text-white flex flex-col gap-8 p-6 px-4 border-r border-gray-700">
      <div class="flex items-center gap-3 px-2">
        <div class="w-9 h-9">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#2ED573"/>
            <path d="M30 50H70" stroke="white" stroke-width="8" stroke-linecap="round"/>
            <path d="M50 30V70" stroke="white" stroke-width="8" stroke-linecap="round"/>
          </svg>
        </div>
        <h1 class="text-xl font-semibold text-white">TixFlow</h1>
      </div>

      <nav class="flex flex-col gap-2">
        <a href="#" class="flex items-center gap-4 py-3 px-4 rounded-lg font-medium text-brand-green bg-purple-600">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span>Sự kiện của tôi</span>
        </a>
        <a href="#" class="flex items-center gap-4 py-3 px-4 rounded-lg font-medium hover:bg-white/5 hover:text-white transition-colors">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
          <span>Quản lý Báo cáo</span>
        </a>
        <a href="#" class="flex items-center gap-4 py-3 px-4 rounded-lg font-medium hover:bg-white/5 hover:text-white transition-colors">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span>Điều khoản cho ban tổ chức</span>
        </a>
      </nav>
    </aside>

    <div v-if="isLoading" class="flex-1 flex items-center justify-center">
      <p class="text-gray-500">Đang tải dữ liệu sự kiện...</p>
    </div>

    <div v-else class="flex-1 flex flex-col overflow-y-auto">
      <CreateEventHeader
          :current-step="currentStep"
          :event-id="props.id"  @go-to-next="handleSaveAndGoNext"
          @go-to-previous="handleSaveAndGoBack"
          @finish="handleFinish"
          class="sticky top-0 z-40"
      />

      <main class="p-4 sm:p-6 md:p-8">
        <router-view  v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>

  </div>
</template>


<script setup>
import { ref, computed, onMounted, provide, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CreateEventHeader from '../Organizer/CreateEventHeader.vue'; // Sửa lại đường dẫn nếu cần
import api from '../services/api.js';

// --- KHỞI TẠO CƠ BẢN ---
const props = defineProps({
  id: { // Nhận ID từ router
    type: String,
    required: true
  }
});
const route = useRoute();
const router = useRouter();

// --- QUẢN LÝ STATE ---
const isLoading = ref(true);
const eventData = ref({}); // State tổng, chứa dữ liệu của sự kiện đang chỉnh sửa
provide('eventData', eventData); // Cung cấp state này cho các component Step con

// Key động cho Local Storage, tự thay đổi khi ID thay đổi
const storageKey = computed(() => `eventFormData_${props.id}`);

// --- LOGIC TẢI DỮ LIỆU ---

// Hàm tải dữ liệu thống nhất: Ưu tiên Local Storage, nếu không có thì mới gọi API
const fetchDataForEvent = async (eventId) => {
  isLoading.value = true;
  eventData.value = {}; // Xóa sạch dữ liệu cũ để tránh hiển thị nhầm trong lúc tải

  const localData = localStorage.getItem(`eventFormData_${eventId}`); // Dùng key tương ứng với eventId

  if (localData) {
    console.log(`Tải dữ liệu cho sự kiện ${eventId} từ Local Storage.`);
    eventData.value = JSON.parse(localData);
    isLoading.value = false;
  } else {
    console.log(`Tải dữ liệu cho sự kiện ${eventId} từ Database qua API.`);
    try {
      const response = await api.getEvent(eventId);
      eventData.value = response.data;
    } catch (error) {
      console.error("Không thể tải dữ liệu sự kiện:", error);
      alert("Sự kiện không tồn tại hoặc có lỗi xảy ra.");
      router.push('/');
    } finally {
      isLoading.value = false;
    }
  }
};

// `onMounted` chỉ chạy 1 lần khi component được tạo, dùng để tải dữ liệu ban đầu
onMounted(() => {
  fetchDataForEvent(props.id);
});

// `watch` sẽ theo dõi sự thay đổi của `props.id` khi bạn chuyển trang
// (ví dụ từ /11 -> /12) và gọi lại hàm tải dữ liệu mới
watch(() => props.id, (newId) => {
  if (newId) {
    fetchDataForEvent(newId);
  }
});


// --- LOGIC LƯU DỮ LIỆU VÀ ĐIỀU HƯỚNG ---

// Hàm này chỉ lưu dữ liệu tạm thời vào Local Storage
const saveCurrentData = () => {
  try {
    localStorage.setItem(storageKey.value, JSON.stringify(eventData.value));
    console.log(`Đã lưu tạm thời vào Local Storage cho key: ${storageKey.value}`);
  } catch (error) {
    console.error("Lỗi khi lưu vào Local Storage:", error);
    alert("Lưu dữ liệu tạm thời thất bại.");
  }
};

// Xử lý khi nhấn "Tiếp tục": Lưu vào local rồi chuyển trang
const handleSaveAndGoNext = () => {
  saveCurrentData();
  const nextStepNumber = currentStep.value + 1;
  router.push({ name: `Step${nextStepNumber}`, params: { id: props.id } });
};

// Xử lý khi nhấn "Quay lại": Lưu vào local rồi chuyển trang
const handleSaveAndGoBack = () => {
  saveCurrentData();
  const prevStepNumber = currentStep.value - 1;
  router.push({ name: `Step${prevStepNumber}`, params: { id: props.id } });
};

// Xử lý khi nhấn "Hoàn thành": Lưu vào DATABASE và xóa local
const handleFinish = async () => {
  try {
    await api.updateEvent(props.id, eventData.value); // Lưu vào DB
    localStorage.removeItem(storageKey.value); // Xóa bản nháp local
    alert("Chúc mừng! Sự kiện đã được lưu vào database thành công.");
    router.push('/');
  } catch (error) {
    console.error("Lỗi khi lưu dữ liệu cuối cùng:", error);
    alert("Lưu dữ liệu vào database thất bại, vui lòng thử lại.");
  }
};

// --- LOGIC HIỂN THỊ ---
const currentStep = computed(() => {
  const stepName = route.name;
  if (typeof stepName === 'string' && stepName.startsWith('Step')) {
    return parseInt(stepName.replace('Step', ''));
  }
  return 1;
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>