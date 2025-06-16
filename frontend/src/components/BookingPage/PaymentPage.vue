<template>
  <div class="payment-page min-h-screen bg-gray-50 font-sans text-gray-800">
    <main class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div class="flex items-center space-x-2 text-sm text-gray-500">
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            <span>Chọn vé</span>
          </div>
          <span class="text-gray-300">-----------</span>
          <div class="flex items-center space-x-2">
            <div class="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center"><div class="w-2 h-2 rounded-full bg-blue-600"></div></div>
            <span class="font-semibold text-gray-800">Thanh toán</span>
          </div>
        </div>
        <h1 class="text-3xl font-bold mt-4">Thanh toán</h1>
        <p class="text-gray-500 mt-1">Kiểm tra thông tin của bạn trước khi thanh toán.</p>
        <div class="mt-4 bg-red-100 text-red-600 rounded-full px-3 py-1 text-sm font-mono flex items-center space-x-2">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{{ countdown }}</span>
        </div>
      </div>

      <div class="mt-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 class="text-xl font-bold mb-6">Danh sách vé của bạn</h2>
          <div v-if="orderItems.length === 0" class="text-center text-gray-500 py-8">
            <p>Giỏ hàng của bạn đang trống.</p>
            <button @click="router.push({ name: 'EventDetail'})" class="mt-4 text-blue-600 hover:underline">Quay lại chọn vé</button>
          </div>
          <div v-else class="space-y-6">
            <div v-for="item in orderItems" :key="item.id" class="flex items-center space-x-4">
              <img :src="item.image" :alt="item.name" class="w-20 h-20 rounded-lg object-cover bg-gray-100">
              <div class="flex-grow">
                <h3 class="font-semibold text-gray-800">{{ item.name }}</h3>
                <p class="text-sm text-gray-500">{{ item.description }}</p>
                <p class="text-sm text-gray-500">{{ item.seatInfo }}</p>
              </div>
              <div class="text-right">
                <p class="font-semibold text-gray-800">{{ formatPrice(item.price) }}</p>
              </div>
            </div>
          </div>
          <div v-if="orderItems.length > 0" class="mt-8 pt-6 border-t border-gray-200 space-y-3">
            <div class="flex justify-between text-gray-600"><span>Tạm tính</span><span>{{ formatPrice(subtotal) }}</span></div>
            <div class="flex justify-between text-gray-600"><span>Phí dịch vụ</span><span>{{ formatPrice(serviceFee) }}</span></div>
            <div class="flex justify-between text-xl font-bold text-gray-900 mt-4"><span>Tổng tiền</span><span>{{ formatPrice(totalPrice) }}</span></div>
          </div>
        </div>

        <div class="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 class="text-xl font-bold mb-6">Chi tiết thanh toán</h2>
          <div v-if="orderItems.length === 0" class="text-center text-gray-400 py-16">Vui lòng chọn vé trước khi thanh toán.</div>
          <div v-else>
            <div class="grid grid-cols-3 gap-4 mb-6">
              <label v-for="method in paymentMethods" :key="method.id" :class="['border rounded-lg p-3 flex items-center justify-center cursor-pointer transition-all', selectedPaymentMethod === method.id ? 'border-2 border-blue-600 shadow-md' : 'border-gray-300 hover:border-gray-400']">
                <input type="radio" name="payment_method" :value="method.id" v-model="selectedPaymentMethod" class="sr-only">
                <img :src="method.logo" :alt="method.name" class="h-6">
              </label>
            </div>
            <form @submit.prevent="handlePayment" class="space-y-4">
              <div>
                <label for="name_on_card" class="block text-sm font-medium text-gray-700">Họ và Tên</label>
                <input v-model="paymentDetails.name" type="text" id="name_on_card" placeholder="Nhập họ và tên của bạn" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input v-model="paymentDetails.email" type="email" id="email" placeholder="Nhập email của bạn" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700">Số điện thoại</label>
                <input v-model="paymentDetails.phone" type="tel" id="phone" placeholder="Nhập số điện thoại của bạn" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              </div>
              <div class="border-t pt-4">
                <label for="card_number" class="block text-sm font-medium text-gray-700">Card Number</label>
                <input v-model="paymentDetails.cardNumber" type="text" id="card_number" placeholder="XXXX XXXX XXXX XXXX" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              </div>
              <div class="flex space-x-4">
                <div class="flex-1">
                  <label for="expiry_date" class="block text-sm font-medium text-gray-700">Expiration Date</label>
                  <input v-model="paymentDetails.expiryDate" type="text" id="expiry_date" placeholder="MM/YY" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                </div>
                <div class="flex-1">
                  <label for="cvv" class="block text-sm font-medium text-gray-700">CVV</label>
                  <input v-model="paymentDetails.cvv" type="text" id="cvv" placeholder="XXX" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                </div>
              </div>
              <div class="flex items-center pt-4">
                <input v-model="agreedToTerms" id="agreement" name="agreement" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                <label for="agreement" class="ml-2 block text-sm text-gray-900">Tôi đồng ý với TixFlow <a href="#" class="text-blue-600 hover:underline font-medium">Chính sách bảo mật</a>.</label>
              </div>
              <button type="submit" :disabled="!agreedToTerms" class="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
                Thanh toán {{ formatPrice(totalPrice) }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const orderItems = ref([]);
const paymentDetails = ref({ name: '', email: '', phone: '', cardNumber: '', expiryDate: '', cvv: '' });
const paymentMethods = ref([
  { id: 'paypal', name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
  { id: 'credit_card', name: 'Credit Card', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Old_Visa_Logo.svg' },
  { id: 'vnpay', name: 'VNPAY', logo: 'https://vnpay.vn/s1/statics.vnpay.vn/logo-vnpay-qr-1.png' },
]);
const selectedPaymentMethod = ref('paypal');
const agreedToTerms = ref(false);
const countdown = ref('05:00');

const subtotal = computed(() => orderItems.value.reduce((total, item) => total + item.price, 0));
const serviceFee = ref(10000);
const totalPrice = computed(() => subtotal.value + serviceFee.value);

const formatPrice = (value) => {
  if (typeof value !== 'number') return '0 đ';
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};

const handlePayment = () => {
  if (!agreedToTerms.value) {
    alert('Bạn phải đồng ý với chính sách bảo mật để tiếp tục.');
    return;
  }

  // Tạo một mã đơn hàng ngẫu nhiên
  const orderId = `TIX-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

  const confirmationData = {
    order: {
      id: orderId, // <-- THÊM MÃ ĐƠN HÀNG
      productName: orderItems.value[0]?.name || 'Sự kiện âm nhạc',
      quantity: orderItems.value.length,
      totalAmount: totalPrice.value,
      items: orderItems.value,
      transactionDate: new Date().toISOString(), // <-- THÊM NGÀY GIAO DỊCH
    },
    customer: {
      name: paymentDetails.value.name,
      phone: paymentDetails.value.phone,
      email: paymentDetails.value.email,
    }
  };

  sessionStorage.setItem('lastOrderConfirmation', JSON.stringify(confirmationData));
  sessionStorage.removeItem('cart');
  router.push({ name: 'PaymentSuccess' });
};

let timerInterval = null;
onMounted(() => {
  const savedCart = sessionStorage.getItem('cart');
  if (savedCart) {
    orderItems.value = JSON.parse(savedCart);
  }

  let duration = 5 * 60;
  if(orderItems.value.length > 0) {
    timerInterval = setInterval(() => {
      duration -= 1;
      const minutes = Math.floor(duration / 60).toString().padStart(2, '0');
      const seconds = (duration % 60).toString().padStart(2, '0');
      countdown.value = `${minutes}:${seconds}`;
      if (duration <= 0) {
        clearInterval(timerInterval);
        countdown.value = 'Hết hạn';
        alert('Đã hết thời gian giữ vé!');
        sessionStorage.removeItem('cart');
        orderItems.value = [];
      }
    }, 1000);
  } else {
    countdown.value = 'N/A';
  }
});

onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>