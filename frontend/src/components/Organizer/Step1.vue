<template>
  <form @submit.prevent="handleFormSubmit">
    <div class="bg-white p-6 sm:p-8 rounded-xl shadow-lg">

      <header class="pb-6 border-b border-gray-200 mb-8">
        <h1 class="text-2xl font-bold text-gray-800">Thông tin sự kiện</h1>
        <p class="mt-1 text-sm text-gray-500">Cung cấp các thông tin cơ bản và hình ảnh để tạo nên sự kiện của bạn.</p>
      </header>

      <section id="hinh-anh" class="mb-8">
        <h2 class="text-xl font-bold text-gray-800 mb-1">Upload hình ảnh</h2>
        <p class="text-sm text-gray-500 mb-4">Logo sự kiện và Ảnh nền sự kiện.</p>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="w-full md:w-1/3">
            <div @click="triggerFileInput('logo')" class="h-80 cursor-pointer bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4 text-center hover:border-purple-500 transition-colors">
              <input type="file" ref="logoInput" @change="handleImageUpload($event, 'logo')" class="hidden" accept="image/*">
              <div v-if="!logoPreview" class="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto mb-2"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
                <span class="font-semibold">Logo sự kiện</span>
                <p class="text-xs mt-1">Tỷ lệ gợi ý: 3:4</p>
              </div>
              <img v-else :src="logoPreview" class="max-w-full max-h-full object-contain rounded-md" alt="Xem trước logo">
            </div>
          </div>
          <div class="w-full md:w-2/3">
            <div @click="triggerFileInput('banner')" class="h-80 cursor-pointer bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4 text-center hover:border-purple-500 transition-colors">
              <input type="file" ref="bannerInput" @change="handleImageUpload($event, 'banner')" class="hidden" accept="image/*">
              <div v-if="!bannerPreview" class="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto mb-2"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
                <span class="font-semibold">Ảnh nền sự kiện</span>
                <p class="text-xs mt-1">Tỷ lệ gợi ý: 16:9</p>
              </div>
              <img v-else :src="bannerPreview" class="w-full h-full object-cover rounded-md" alt="Xem trước ảnh nền">
            </div>
          </div>
        </div>
      </section>

      <section id="thong-tin-co-ban" class="mb-8">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Thông tin cơ bản</h2>
        <div class="space-y-4">
          <div>
            <label for="eventName" class="block text-sm font-medium text-gray-700 mb-1">Tên sự kiện</label>
            <input type="text" id="eventName" v-model="form.eventName" class="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-purple-500/50 focus:border-purple-500" placeholder="Nhập tên sự kiện của bạn">
          </div>
          <div>
            <label for="eventType" class="block text-sm font-medium text-gray-700 mb-1">Thể loại sự kiện</label>
            <input type="text" id="eventType" v-model="form.eventType" class="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-purple-500/50 focus:border-purple-500" placeholder="Ví dụ: Âm nhạc, Hội thảo, Thể thao...">
          </div>
        </div>
      </section>

      <section id="dia-diem" class="mb-8">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Địa điểm sự kiện</h2>
        <div class="flex items-center space-x-6 mb-4">
          <label class="flex items-center cursor-pointer">
            <input type="radio" v-model="form.locationType" value="online" class="h-4 w-4 text-purple-600 focus:ring-purple-500">
            <span class="ml-2 text-sm font-medium text-gray-700">Sự kiện online</span>
          </label>
          <label class="flex items-center cursor-pointer">
            <input type="radio" v-model="form.locationType" value="offline" class="h-4 w-4 text-purple-600 focus:ring-purple-500">
            <span class="ml-2 text-sm font-medium text-gray-700">Sự kiện offline</span>
          </label>
        </div>
        <div v-if="form.locationType === 'offline'" class="space-y-4">
          <div>
            <label for="venueName" class="block text-sm font-medium text-gray-700 mb-1">Tên địa điểm</label>
            <input type="text" id="venueName" v-model="form.venueName" class="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-purple-500/50 focus:border-purple-500" placeholder="Ví dụ: Trung tâm Hội nghị Quốc gia">
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="province" class="block text-sm font-medium text-gray-700 mb-1">Tỉnh/Thành</label>
              <input type="text" id="province" v-model="form.province" class="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-purple-500/50 focus:border-purple-500" placeholder="Chọn tỉnh/thành">
            </div>
            <div>
              <label for="district" class="block text-sm font-medium text-gray-700 mb-1">Quận/Huyện</label>
              <input type="text" id="district" v-model="form.district" class="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-purple-500/50 focus:border-purple-500" placeholder="Chọn quận/huyện">
            </div>
          </div>
        </div>
      </section>

      <section id="mo-ta-chi-tiet" class="mb-8">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Mô tả chi tiết</h2>
        <textarea v-model="form.description" rows="10" class="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-purple-500/50 focus:border-purple-500" placeholder="* Giới thiệu tóm tắt ngắn gọn về sự kiện..."></textarea>
      </section>

      <section id="ban-to-chuc">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Thông tin ban tổ chức</h2>
        <div class="space-y-4">
          <div>
            <label for="organizerName" class="block text-sm font-medium text-gray-700 mb-1">Tên ban tổ chức</label>
            <input type="text" id="organizerName" v-model="form.organizerName" class="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-purple-500/50 focus:border-purple-500" placeholder="Nhập tên công ty/đơn vị tổ chức">
          </div>
          <div>
            <label for="organizerInfo" class="block text-sm font-medium text-gray-700 mb-1">Thông tin thêm về ban tổ chức</label>
            <textarea v-model="form.organizerInfo" rows="5" class="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-purple-500/50 focus:border-purple-500" placeholder="Giới thiệu về đơn vị của bạn..."></textarea>
          </div>
        </div>
      </section>

      <div class="mt-10 pt-6 border-t border-gray-200 flex justify-end">
        <button
            type="button"
            @click="saveAndContinue"
            class="px-6 py-3 font-semibold text-white bg-purple-600 rounded-lg shadow-md border-b-4 border-purple-800 hover:bg-purple-700 active:translate-y-0.5 active:border-b-2 transition-all duration-150"
        >
          Lưu & Tiếp tục
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // 1. Import thêm onMounted
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
  eventName: '',
  eventType: '',
  locationType: 'offline',
  venueName: '',
  province: '',
  district: '',
  ward: '',
  address: '',
  description: '',
  organizerName: '',
  organizerInfo: '',
  logoFile: null,
  bannerFile: null,
});

const logoInput = ref(null);
const bannerInput = ref(null);
const logoPreview = ref(null);
const bannerPreview = ref(null);

// NOTE: Vì lý do bảo mật, bạn không thể đặt lại giá trị cho <input type="file">
// bằng code. Cách tiếp cận tốt là lưu URL xem trước và hiển thị lại nó.
// Người dùng sẽ phải chọn lại file nếu muốn thay đổi.
const triggerFileInput = (type) => {
  if (type === 'logo') {
    logoInput.value.click();
  } else {
    bannerInput.value.click();
  }
};

const handleImageUpload = (event, type) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    if (type === 'logo') {
      logoPreview.value = e.target.result;
      form.value.logoFile = file; // Lưu file để xử lý sau
    } else {
      bannerPreview.value = e.target.result;
      form.value.bannerFile = file; // Lưu file để xử lý sau
    }
  };
  reader.readAsDataURL(file);
};


// 2. TẠO HÀM TẢI DỮ LIỆU
const loadDataFromLocalStorage = () => {
  const savedData = localStorage.getItem('eventFormData');
  if (savedData) {
    const allData = JSON.parse(savedData);
    // Nếu có dữ liệu của step1 đã lưu, cập nhật vào form
    if (allData.step1) {
      // Gán các giá trị từ object đã lưu vào form reactive
      form.value = { ...form.value, ...allData.step1 };

      // Xử lý riêng cho việc hiển thị lại ảnh preview
      // Giả sử khi lưu, bạn cũng lưu cả URL preview
      if(allData.step1.logoPreview) logoPreview.value = allData.step1.logoPreview;
      if(allData.step1.bannerPreview) bannerPreview.value = allData.step1.bannerPreview;
    }
  }
};

// 3. GỌI HÀM TẢI DỮ LIỆU KHI COMPONENT ĐƯỢC MOUNT
onMounted(() => {
  loadDataFromLocalStorage();
});


const saveAndContinue = () => {
  let allData = {};
  const savedData = localStorage.getItem('eventFormData');
  if (savedData) {
    allData = JSON.parse(savedData);
  }

  // Để hiển thị lại ảnh, ta nên lưu cả URL preview
  allData.step1 = {
    ...form.value,
    logoPreview: logoPreview.value,
    bannerPreview: bannerPreview.value,
  };

  // Vì object `File` không thể chuyển thành JSON, ta loại bỏ nó trước khi lưu
  delete allData.step1.logoFile;
  delete allData.step1.bannerFile;

  localStorage.setItem('eventFormData', JSON.stringify(allData));

  alert('Đã lưu dữ liệu Step 1! Đang chuyển sang Step 2...');
  router.push({ name: 'Step2' });
};

</script>