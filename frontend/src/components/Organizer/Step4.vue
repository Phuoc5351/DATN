<template>
  <form @submit.prevent="handleFinalSubmit">
    <div class="bg-white p-6 sm:p-8 rounded-xl shadow-lg space-y-8">

      <header class="pb-6 border-b border-gray-200">
        <h1 class="text-2xl font-bold text-gray-900">Thông tin thanh toán</h1>
        <p class="mt-2 text-sm text-gray-500">Chọn phương thức bạn muốn nhận thanh toán từ người tham gia.</p>
      </header>

      <section>
        <h2 class="text-xl font-bold text-gray-800 mb-4">Phương thức nhận tiền</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label
              class="flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all"
              :class="form.paymentMethod === 'qr' ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-white hover:border-gray-400'"
          >
            <input type="radio" v-model="form.paymentMethod" value="qr" class="h-5 w-5 text-purple-600 focus:ring-purple-500">
            <span class="ml-3 font-semibold text-gray-800">Thanh toán qua mã QR</span>
          </label>
          <label
              class="flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all"
              :class="form.paymentMethod === 'bank' ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-white hover:border-gray-400'"
          >
            <input type="radio" v-model="form.paymentMethod" value="bank" class="h-5 w-5 text-purple-600 focus:ring-purple-500">
            <span class="ml-3 font-semibold text-gray-800">Chuyển khoản ngân hàng</span>
          </label>
        </div>
      </section>

      <section v-if="form.paymentMethod === 'qr'">
        <h2 class="text-lg font-bold text-gray-800 mb-2">Tải lên mã QR của bạn</h2>
        <p class="text-sm text-gray-500 mb-4">Tải lên mã QR VietQR hoặc của ví điện tử để người dùng quét và thanh toán.</p>
        <div @click="triggerQrUpload" class="h-80 w-80 mx-auto cursor-pointer bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4 text-center hover:border-purple-500 transition-colors">
          <input type="file" ref="qrInput" @change="handleQrUpload" class="hidden" accept="image/*">
          <div v-if="!qrCodePreview" class="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto mb-2"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6.75 2.25h.75a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75" /></svg>
            <span class="font-semibold">Nhấn để tải ảnh lên</span>
            <p class="text-xs mt-1">PNG, JPG, WEBP</p>
          </div>
          <img v-else :src="qrCodePreview" class="max-w-full max-h-full object-contain rounded-md" alt="Xem trước mã QR">
        </div>
      </section>

      <section v-if="form.paymentMethod === 'bank'">
        <h2 class="text-lg font-bold text-gray-800 mb-4">Thông tin chuyển khoản</h2>
        <div class="space-y-4">
          <div>
            <label for="bankName" class="block text-sm font-semibold text-gray-700 mb-1">Tên ngân hàng</label>
            <input type="text" id="bankName" v-model="form.bankInfo.bankName" class="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-purple-500" placeholder="Ví dụ: Ngân hàng TMCP Kỹ thương Việt Nam (Techcombank)">
          </div>
          <div>
            <label for="accountHolder" class="block text-sm font-semibold text-gray-700 mb-1">Tên chủ tài khoản</label>
            <input type="text" id="accountHolder" v-model="form.bankInfo.accountHolder" class="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-purple-500" placeholder="Ví dụ: NGUYEN VAN A">
          </div>
          <div>
            <label for="accountNumber" class="block text-sm font-semibold text-gray-700 mb-1">Số tài khoản</label>
            <input type="text" id="accountNumber" v-model="form.bankInfo.accountNumber" class="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-purple-500" placeholder="Nhập số tài khoản ngân hàng của bạn">
          </div>
          <div>
            <label for="branch" class="block text-sm font-semibold text-gray-700 mb-1">Chi nhánh (tùy chọn)</label>
            <input type="text" id="branch" v-model="form.bankInfo.branch" class="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-purple-500" placeholder="Ví dụ: Hội sở chính">
          </div>
        </div>
      </section>

      <button type="submit" class="hidden">Submit</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

// Gom tất cả dữ liệu của Step 4 vào một ref 'form' duy nhất
const form = ref({
  paymentMethod: 'qr', // 'qr' hoặc 'bank'
  qrCodeFile: null,    // Để lưu file ảnh QR thật sự
  bankInfo: {
    bankName: '',
    accountHolder: '',
    accountNumber: '',
    branch: '',
  }
});

// State cho giao diện, không phải dữ liệu chính
const qrInput = ref(null);
const qrCodePreview = ref(null);

const triggerQrUpload = () => {
  qrInput.value.click();
};

const handleQrUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  // Lưu file object vào state chính
  form.value.qrCodeFile = file;

  // Tạo URL để xem trước ảnh
  const reader = new FileReader();
  reader.onload = (e) => {
    qrCodePreview.value = e.target.result;
  };
  reader.readAsDataURL(file);
};

// Hàm xử lý khi form được submit
const handleFinalSubmit = () => {
  console.log("Submit cuối cùng! Toàn bộ dữ liệu sẽ được gửi đi từ đây.");
  console.log("Dữ liệu Step 4:", form.value);
  alert("chevkkkkkk");
};
</script>