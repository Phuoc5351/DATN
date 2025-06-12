<template>
  <div class="bg-gray-100 p-4 sm:p-6 md:p-8 font-sans min-h-screen">

    <div class="max-w-5xl mx-auto">

      <main>
        <header class="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 class="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Tạo sự kiện mới</h1>
        </header>

        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <div id="hinh-anh" class="mb-8 scroll-mt-24">
            <h2 class="text-xl font-bold text-gray-800 mb-1">Upload hình ảnh</h2>
            <p class="text-sm text-gray-500 mb-4">Logo sự kiện và Ảnh nền sự kiện</p>
            <div class="flex flex-col md:flex-row gap-6">
              <div class="w-full md:w-1/3">
                <div @click="triggerFileInput('logo')" class="h-80 cursor-pointer bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4 text-center hover:border-blue-500 transition-colors">
                  <input type="file" ref="logoInput" @change="handleImageUpload($event, 'logo')" class="hidden" accept="image/*">
                  <div v-if="!logoPreview" class="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto mb-2"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
                    <span class="font-semibold">Logo sự kiện</span>
                    <p class="text-xs">Tỷ lệ gợi ý: 3:4</p>
                  </div>
                  <img v-else :src="logoPreview" class="max-w-full max-h-full object-contain rounded-md" alt="Xem trước logo">
                </div>
              </div>
              <div class="w-full md:w-2/3">
                <div @click="triggerFileInput('banner')" class="h-80 cursor-pointer bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4 text-center hover:border-blue-500 transition-colors">
                  <input type="file" ref="bannerInput" @change="handleImageUpload($event, 'banner')" class="hidden" accept="image/*">
                  <div v-if="!bannerPreview" class="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto mb-2"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
                    <span class="font-semibold">Ảnh nền sự kiện</span>
                    <p class="text-xs">Tỷ lệ gợi ý: 16:9</p>
                  </div>
                  <img v-else :src="bannerPreview" class="w-full h-full object-cover rounded-md" alt="Xem trước ảnh nền">
                </div>
              </div>
            </div>

            <div id="thong-tin-co-ban" class="mb-8 scroll-mt-24">
              <label for="eventName" class="block text-sm font-bold text-gray-700 mb-1">Tên sự kiện</label>
              <input type="text" id="eventName" v-model="form.eventName" class="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Nhập tên sự kiện của bạn">
            </div>

            <div id="dia-diem" class="mb-8 scroll-mt-24">
              <h2 class="text-xl font-bold text-gray-800 mb-4">Địa điểm sự kiện</h2>
              <div class="flex items-center space-x-6 mb-4">
                <label class="flex items-center">
                  <input type="radio" v-model="form.locationType" value="online" class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                  <span class="ml-2 text-sm text-gray-700">Sự kiện online</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" v-model="form.locationType" value="offline" class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                  <span class="ml-2 text-sm text-gray-700">Sự kiện offline</span>
                </label>
              </div>

              <div v-if="form.locationType === 'offline'">
                <div class="mb-4">
                  <label for="venueName" class="block text-sm font-bold text-gray-700 mb-1">Tên địa điểm</label>
                  <input type="text" id="venueName" v-model="form.venueName" class="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Ví dụ: Trung tâm Hội nghị Quốc gia">
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label for="province" class="block text-sm font-bold text-gray-700 mb-1">Tỉnh/Thành</label>
                    <input type="text" id="province" v-model="form.province" class="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Chọn tỉnh/thành">
                  </div>
                  <div>
                    <label for="district" class="block text-sm font-bold text-gray-700 mb-1">Quận/Huyện</label>
                    <input type="text" id="district" v-model="form.district" class="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Chọn quận/huyện">
                  </div>
                  <div>
                    <label for="ward" class="block text-sm font-bold text-gray-700 mb-1">Phường/Xã</label>
                    <input type="text" id="ward" v-model="form.ward" class="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Chọn phường/xã">
                  </div>
                  <div>
                    <label for="address" class="block text-sm font-bold text-gray-700 mb-1">Số nhà, đường</label>
                    <input type="text" id="address" v-model="form.address" class="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Nhập địa chỉ chi tiết">
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label for="eventType" class="block text-sm font-bold text-gray-700 mb-1">Thể loại sự kiện</label>
                <input type="text" id="eventType" v-model="form.eventType" class="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Ví dụ: Âm nhạc, Hội thảo, Thể thao...">
              </div>
            </div>

            <div id="mo-ta-chi-tiet" class="mb-8 scroll-mt-24">
              <h2 class="text-xl font-bold text-gray-800 mb-4">Thông tin sự kiện</h2>
              <textarea v-model="form.description" rows="10" class="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="* Giới thiệu tóm tắt ngắn gọn về sự kiện.&#10;* Chương trình chính: Suất diễn/hoạt động nổi bật...&#10;* Các phần quà hoặc các kích thích mới đặc biệt...&#10;* Điều khoản và điều kiện..."></textarea>
            </div>

            <div id="ban-to-chuc" class="scroll-mt-24">
              <h2 class="text-xl font-bold text-gray-800 mb-4">Thông tin ban tổ chức</h2>
              <div class="mb-4">
                <label for="organizerName" class="block text-sm font-bold text-gray-700 mb-1">Tên ban tổ chức</label>
                <input type="text" id="organizerName" v-model="form.organizerName" class="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Nhập tên công ty/đơn vị tổ chức">
              </div>
              <div>
                <label for="organizerInfo" class="block text-sm font-bold text-gray-700 mb-1">Thông tin thêm về ban tổ chức</label>
                <textarea v-model="form.organizerInfo" rows="5" class="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Giới thiệu về đơn vị của bạn..."></textarea>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const form = ref({
  eventName: '', locationType: 'offline', venueName: '', province: '',
  district: '', ward: '', address: '', eventType: '',
  description: '', organizerName: '', organizerInfo: ''
});
const logoInput = ref(null);
const bannerInput = ref(null);
const logoPreview = ref(null);
const bannerPreview = ref(null);
const triggerFileInput = (type) => {
  if (type === 'logo') logoInput.value.click();
  else if (type === 'banner') bannerInput.value.click();
};
const handleImageUpload = (event, type) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    if (type === 'logo') logoPreview.value = e.target.result;
    else if (type === 'banner') bannerPreview.value = e.target.result;
  };
  reader.readAsDataURL(file);
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>