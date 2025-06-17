<template>
  <form @submit.prevent>
    <div class="bg-white p-6 sm:p-8 rounded-xl shadow-lg space-y-8">

      <header class="pb-6 border-b border-gray-200">
        <h1 class="text-2xl font-bold text-gray-900">Cài đặt sự kiện</h1>
        <p class="mt-2 text-sm text-gray-500">Tùy chỉnh link và các cài đặt riêng tư cho sự kiện của bạn.</p>
      </header>

      <section>
        <h2 class="text-xl font-bold text-gray-800 mb-4">Link dẫn đến sự kiện</h2>
        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <label class="block text-sm font-semibold text-gray-700 mb-2" for="custom-url">
            Tùy chỉnh đường dẫn:
          </label>
          <div class="flex items-center">
            <span class="bg-gray-200 text-gray-500 px-3 py-3 rounded-l-md border border-r-0 border-gray-300">tixflow.vn/</span>
            <input
                type="text"
                id="custom-url"
                class="flex-1 w-full p-3 rounded-r-md text-base bg-white border border-gray-300 text-gray-700 transition duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                v-model="eventData.customUrl"
            >
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-bold text-gray-800 mb-4">Quyền riêng tư sự kiện</h2>
        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
          <label for="public-event" class="flex items-center gap-3 cursor-pointer text-gray-800">
            <input
                type="radio"
                id="public-event"
                value="public"
                v-model="eventData.privacy"
                class="h-4 w-4 cursor-pointer text-purple-600 focus:ring-purple-500 border-gray-300"
            >
            <div>
              <span class="font-semibold">Sự kiện mở</span>
              <p class="text-sm text-gray-500">Mọi người đều có thể tìm thấy và đăng ký.</p>
            </div>
          </label>
          <label for="private-event" class="flex items-center gap-3 cursor-pointer text-gray-800">
            <input
                type="radio"
                id="private-event"
                value="private"
                v-model="eventData.privacy"
                class="h-4 w-4 cursor-pointer text-purple-600 focus:ring-purple-500 border-gray-300"
            >
            <div>
              <span class="font-semibold">Sự kiện riêng tư</span>
              <p class="text-sm text-gray-500">Chỉ những người có link mới có thể truy cập.</p>
            </div>
          </label>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-bold text-gray-800 mb-2" for="confirmation-message">
          Tin nhắn xác nhận
        </h2>
        <p class="text-sm text-gray-500 mb-4 leading-relaxed">
          Nội dung này sẽ được gửi đến email của người tham gia sau khi họ đặt vé thành công.
        </p>
        <textarea
            id="confirmation-message"
            rows="5"
            class="w-full p-3 rounded-md text-base bg-white border border-gray-300 text-gray-700 transition duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            v-model="eventData.confirmationMessage"
            placeholder="Cảm ơn bạn đã đăng ký..."
        ></textarea>
      </section>

      <section>
        <h2 class="text-xl font-bold text-gray-800 mb-4">
          Câu hỏi cho người tham gia
        </h2>
        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <p class="text-sm text-gray-500 mb-4 leading-relaxed">
            Tixflow giúp bạn tạo câu hỏi với 3 mẫu: Điền câu trả lời, Chọn 1 đáp án, hoặc Chọn nhiều đáp án.
          </p>
          <div class="flex items-center gap-3 cursor-pointer text-gray-700">
            <input
                type="checkbox"
                id="enable-questions"
                v-model="eventData.enableQuestions"
                class="h-4 w-4 cursor-pointer text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            >
            <label for="enable-questions" class="cursor-pointer font-medium">Mở chức năng này (tạo câu hỏi ở bước sau)</label>
          </div>
        </div>
      </section>

      <button type="submit" class="hidden">Submit</button>
    </div>
    <div class="mt-10 pt-6 border-t border-gray-200 flex justify-between items-center">
      <button
          type="button"
          @click="goToStep2"
          class="px-6 py-3 font-semibold text-gray-700 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-150"
      >
        &larr; Quay lại (Step 2)
      </button>
      <button
          type="button"
          @click="saveAndContinue"
          class="px-6 py-3 font-semibold text-white bg-purple-600 rounded-lg shadow-md border-b-4 border-purple-800 hover:bg-purple-700 active:translate-y-0.5 active:border-b-2 transition-all duration-150"
      >
        Lưu & Tiếp tục (Step 4) &rarr;
      </button>
    </div>
  </form>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue'; // MỚI: Thêm onMounted
import { useRouter } from 'vue-router'; // MỚI: Thêm useRouter

// MỚI: Khởi tạo router
const router = useRouter();
const eventData = ref({
  customUrl: 'sukienhottiktok-2005',
  privacy: 'public',
  confirmationMessage: '',
  enableQuestions: false
});

const fullEventUrl = computed(() => {
  return `https://tixflow.vn/${eventData.value.customUrl}`;
});

// Hàm xử lý khi form được submit
const loadDataFromLocalStorage = () => {
  const savedData = localStorage.getItem('eventFormData');
  if (savedData) {
    const allData = JSON.parse(savedData);
    // Nếu có dữ liệu của step3 đã lưu, hợp nhất nó vào state hiện tại
    if (allData.step3) {
      // Dùng spread operator để ghi đè các giá trị đã lưu lên giá trị mặc định
      eventData.value = { ...eventData.value, ...allData.step3 };
    }
  }
};

const saveAndContinue = () => {
  // Đọc dữ liệu tổng từ localStorage
  const savedData = localStorage.getItem('eventFormData');
  let allData = savedData ? JSON.parse(savedData) : {};

  // Cập nhật dữ liệu của Step 3
  allData.step3 = eventData.value;

  // Lưu lại vào localStorage
  localStorage.setItem('eventFormData', JSON.stringify(allData));

  // Thông báo và chuyển sang Step 4
  alert('Đã lưu dữ liệu Step 3! Đang chuyển sang Step 4...');
  router.push({ name: 'Step4' }); // Giả sử route của bạn có tên là 'Step4'
};

const goToStep2 = () => {
  // Lưu lại công việc hiện tại trước khi quay về
  const savedData = localStorage.getItem('eventFormData');
  let allData = savedData ? JSON.parse(savedData) : {};
  allData.step3 = eventData.value;
  localStorage.setItem('eventFormData', JSON.stringify(allData));

  router.push({ name: 'Step2' }); // Giả sử route của bạn có tên là 'Step2'
};

// Tải dữ liệu khi component được mount
onMounted(() => {
  loadDataFromLocalStorage();
});
</script>