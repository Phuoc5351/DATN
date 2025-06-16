<template>
  <div class="payment-success-page min-h-screen bg-gray-50">
    <main class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto flex flex-col items-center text-center">
<!--        <div class="flex items-center justify-between w-full max-w-lg text-sm text-gray-500">-->
<!--          <div class="flex flex-col items-center text-blue-600 font-semibold">-->
<!--            <div class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mb-1">✓</div>-->
<!--            <span>Chọn vé</span>-->
<!--          </div>-->
<!--          <div class="flex-1 border-t-2 border-blue-600 mx-2"></div>-->
<!--          <div class="flex flex-col items-center text-blue-600 font-semibold">-->
<!--            <div class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mb-1">✓</div>-->
<!--            <span>Chọn ghế</span>-->
<!--          </div>-->
<!--          <div class="flex-1 border-t-2 border-blue-600 mx-2"></div>-->
<!--          <div class="flex flex-col items-center text-blue-600 font-semibold">-->
<!--            <div class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mb-1">✓</div>-->
<!--            <span>Thanh toán</span>-->
<!--          </div>-->
<!--          <div class="flex-1 border-t-2 border-blue-600 mx-2"></div>-->
<!--          <div class="flex flex-col items-center text-blue-600 font-semibold">-->
<!--            <div class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mb-1">✓</div>-->
<!--            <span>Lấy vé</span>-->
<!--          </div>-->
<!--        </div>-->

        <h1 class="text-3xl font-bold mt-8 text-green-500">Thanh toán thành công!!</h1>
        <p class="text-gray-600 mt-1">Bạn có thể về rồi. Vé tải xuống tại đây.</p>
      </div>

      <div class="mt-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8" v-if="confirmationData">
        <div class="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 class="text-2xl font-bold text-blue-600 mb-4">XIN CHÚC MỪNG !</h2>
          <p class="text-gray-700 mb-6">Bạn đã mua thành công vé cho: <span class="font-semibold">{{ confirmationData.order.productName }}</span></p>

          <div class="border-t border-gray-200 pt-6">
            <h3 class="text-lg font-semibold mb-3">Chi tiết sản phẩm</h3>
            <div class="space-y-2 text-gray-600">
              <p><span class="font-medium">Sản phẩm:</span> {{ confirmationData.order.productName }}</p>
              <p><span class="font-medium">Số lượng:</span> {{ confirmationData.order.quantity }} vé</p>
              <p><span class="font-medium">Số tiền:</span> {{ formatPrice(confirmationData.order.totalAmount) }}</p>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-6 mt-6">
            <h3 class="text-lg font-semibold mb-3">Chi tiết khách hàng</h3>
            <div class="space-y-2 text-gray-600">
              <p><span class="font-medium">Tên:</span> {{ confirmationData.customer.name }}</p>
              <p><span class="font-medium">Số điện thoại:</span> {{ confirmationData.customer.phone }}</p>
              <p><span class="font-medium">Email:</span> {{ confirmationData.customer.email }}</p>
            </div>
          </div>

          <div class="mt-8 space-y-3">
            <div class="bg-green-100 border border-green-200 text-green-800 text-sm font-medium px-4 py-3 rounded-lg">
              Giảm giá 20% cho vé tiếp theo của bạn!
            </div>
            <div class="bg-blue-100 border border-blue-200 text-blue-800 text-sm font-medium px-4 py-3 rounded-lg">
              Đã kiếm được 50 điểm cho lần mua hàng của bạn!
            </div>
          </div>
        </div>

        <div class="lg:col-span-1 flex flex-col items-center">
          <img
              src="https://i.pinimg.com/564x/4e/d8/1b/4ed81b5e2553537554336c57936ahc82.jpg"
              alt="Event Image"
              class="rounded-lg shadow-lg object-cover w-full h-auto max-w-sm"
          >
          <div class="mt-6 w-full max-w-sm flex space-x-4">
            <button class="flex-1 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
              Download Ticket
            </button>
            <button class="flex-1 bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300 transition">
              Share Ticket
            </button>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-16 text-gray-500">
        Đang tải thông tin đơn hàng...
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const confirmationData = ref(null);

const formatPrice = (value) => {
  if (typeof value !== 'number') return '0 đ';
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};

onMounted(() => {
  // Lấy dữ liệu đơn hàng đã được lưu từ trang thanh toán
  const savedOrder = sessionStorage.getItem('lastOrderConfirmation');

  if (savedOrder) {
    confirmationData.value = JSON.parse(savedOrder);
    // (Quan trọng) Xóa dữ liệu khỏi session storage sau khi đã lấy
    // để tránh người dùng quay lại trang này và thấy lại đơn hàng cũ.
    sessionStorage.removeItem('lastOrderConfirmation');
  } else {
    // Nếu không có dữ liệu (người dùng vào trực tiếp URL),
    // có thể chuyển hướng họ về trang chủ.
    // router.push({ name: 'Home' });
  }
});
</script>

<style scoped>
/* Bạn có thể thêm style riêng nếu cần */
</style>