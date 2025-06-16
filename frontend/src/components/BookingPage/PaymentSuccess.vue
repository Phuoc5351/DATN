<template>
  <div class="min-h-screen bg-gray-100 p-4 sm:p-8 font-sans">
    <div class="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-center" style="background-image: url('https://www.pngall.com/wp-content/uploads/5/Confetti-PNG-Transparent.png'); opacity: 0.1;"></div>

      <div class="relative z-10">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 mb-10 text-center sm:text-left">
          <div class="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
            <svg class="h-12 w-12 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Thanh toán thành công</h1>
            <p class="text-gray-500 mt-1">Cảm ơn bạn đã tin tưởng TixFlow. Vé của bạn đã sẵn sàng!</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          <div class="space-y-8">
            <div v-if="order">
              <h2 class="text-xl font-bold text-gray-800 mb-4">Chi tiết vé đã mua</h2>
              <div class="w-full space-y-2">
                <div v-for="ticket in groupedTicketsComputedArray" :key="ticket.id" class="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center justify-between gap-4">
                  <div>
                    <p class="font-semibold text-gray-800 text-sm">{{ ticket.name }}</p>
                    <p class="text-xs text-gray-600">Số lượng: {{ ticket.quantity }}</p>
                  </div>
                  <p class="font-semibold text-gray-700 text-sm whitespace-nowrap">{{ formatPrice(ticket.price * ticket.quantity) }}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 class="text-xl font-bold text-gray-800 mb-4">Thông tin giao dịch</h2>
              <div v-if="order" class="w-full border rounded-xl grid grid-cols-1 text-center divide-y">
                <div class="p-4 flex justify-between items-center">
                  <p class="text-sm text-gray-500">Mã đơn hàng</p>
                  <p class="font-mono font-semibold text-gray-800 text-sm break-all">{{ order.order.id }}</p>
                </div>
                <div class="p-4 flex justify-between items-center">
                  <p class="text-sm text-gray-500">Ngày giao dịch</p>
                  <p class="font-semibold text-gray-800">{{ formattedDate }}</p>
                </div>
                <div class="p-4 flex justify-between items-center">
                  <p class="text-sm text-gray-500">Tổng cộng</p>
                  <p class="font-bold text-lg text-blue-600">{{ formatPrice(order.order.totalAmount) }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center justify-center h-full">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Vé của bạn</h2>

            <div ref="ticketElement" class="w-full bg-gray-800 text-white rounded-2xl p-6 shadow-2xl relative">
              <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-white rounded-full"></div>
              <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-8 bg-white rounded-full"></div>
              <div class="flex items-center space-x-4">
                <div class="bg-white p-2 rounded-lg">
                  <QrcodeVue :value="qrValue" :size="70" level="H" />
                </div>
                <div>
                  <p class="text-xs text-gray-400">Sự kiện</p>
                  <h3 class="font-bold text-md leading-tight">{{ order?.order.productName }}</h3>
                </div>
              </div>
              <div class="border-t border-dashed border-gray-600 my-4"></div>
              <div class="grid grid-cols-2 gap-4 text-left text-sm">
                <div>
                  <p class="text-xs text-gray-400">Khách hàng</p>
                  <p class="font-semibold">{{ order?.customer.name }}</p>
                </div>
                <div>
                  <p class="text-xs text-gray-400">Ngày diễn ra</p>
                  <p class="font-semibold">08/08/2025 - 20:00</p>
                </div>
                <div>
                  <p class="text-xs text-gray-400">Địa điểm</p>
                  <p class="font-semibold">Sân vận động Mỹ Đình</p>
                </div>
                <div>
                  <p class="text-xs text-gray-400">Loại vé</p>
                  <p class="font-semibold">{{ groupedTicketsComputedArray.map(t => t.name).join(', ') }}</p>
                </div>
              </div>
            </div>

            <div class="mt-8 w-full flex flex-col sm:flex-row items-center gap-4">
              <button @click="downloadTicket" class="w-full sm:w-auto flex-1 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                Tải vé
              </button>
              <button @click="router.push('/')" class="w-full sm:w-auto flex-1 bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">
                Về trang chủ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import QrcodeVue from 'qrcode.vue';
import html2canvas from 'html2canvas';

const router = useRouter();
const order = ref(null);
const qrValue = ref('');
const ticketElement = ref(null);

onMounted(() => {
  const savedOrder = sessionStorage.getItem('lastOrderConfirmation');
  if (savedOrder) {
    order.value = JSON.parse(savedOrder);
    qrValue.value = order.value?.order?.id || 'https://tixflow.com';
  } else {
    router.push('/');
  }
  sessionStorage.removeItem('lastOrderConfirmation');
});

const formattedDate = computed(() => {
  if (!order.value?.order.transactionDate) {
    return new Date().toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
  return new Date(order.value.order.transactionDate).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
});

const formatPrice = (value) => {
  if (typeof value !== 'number') return '0 đ';
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};

const groupedTickets = computed(() => {
  if (!order.value?.order.items) return {};

  return order.value.order.items.reduce((acc, ticket) => {
    if (!acc[ticket.name]) {
      acc[ticket.name] = { ...ticket, quantity: 0 };
    }
    acc[ticket.name].quantity += 1;
    return acc;
  }, {});
});

// Chuyển object đã nhóm thành mảng để dễ dàng sử dụng trong template
const groupedTicketsComputedArray = computed(() => {
  return Object.values(groupedTickets.value);
});

const downloadTicket = () => {
  // Gán giá trị của ref vào một biến tạm
  const elementToCapture = ticketElement.value;

  // Kiểm tra biến tạm đó.
  if (!elementToCapture) {
    console.error("Không tìm thấy phần tử vé để tải xuống.");
    return;
  }

  // Từ đây, chỉ sử dụng biến tạm.
  // Trình soạn thảo sẽ hiểu rằng elementToCapture không thể là null.
  html2canvas(elementToCapture, {
    backgroundColor: '#1f2937',
    useCORS: true,
  }).then(canvas => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `ticket-${order.value?.order?.id || 'TixFlow'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }).catch(err => {
    console.error("Lỗi khi tạo ảnh vé:", err);
    alert("Không thể tải vé. Vui lòng thử lại.");
  });
};
</script>