<template>
  <div class="event-detail-page min-h-screen flex flex-col bg-gray-100">
    <div class="bg-gradient-to-br from-purple-900 via-indigo-800 to-rose-700 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-xl bg-white">
          <div class="relative w-full md:w-3/4 bg-[#0c0c49] flex flex-col justify-between px-4 py-6 md:px-8 md:py-10 text-white">
            <div class="absolute -bottom-3 -right-4 md:-right-8 top-4 md:top-1/2 transform md:-translate-y-1/2 z-20">
              <div class="absolute -bottom-20 w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-dashed border-black relative z-40"
                   style="clip-path: inset(0 40% 0 0);">
              </div>
              <div class="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-md z-20">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/86168539c9e84124818960bfd3574041aeb444c7"
                     alt="Logo" class="w-8 md:w-10" />
              </div>
            </div>
            <div class="pr-12 md:pr-0">
              <h3 class="text-3xl md:text-5xl font-bold mb-3 md:mb-4">BLACKPINK THE VIRTUAL</h3>
              <p class="text-base md:text-lg">PUBG MOBILE x BLACKPINK</p>
              <p class="text-base md:text-lg mt-3 md:mt-4">Ngày tổ chức: 22-24 & 29-31 JULY 2022</p>
              <p class="text-base md:text-lg">Địa điểm: Trực tuyến trong PUBG</p>
            </div>
            <div class="mt-4 md:mt-6 relative z-30">
              <button class="bg-white text-[#0c0c49] px-4 py-1.5 md:px-6 md:py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition">
                Mua vé ngay
              </button>
            </div>
            <div class="absolute top-0 left-0 w-full h-full opacity-30 z-0">
              <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#e91e63;stop-opacity:0.3" />
                    <stop offset="100%" style="stop-color:#9c27b0;stop-opacity:0.3" />
                  </linearGradient>
                </defs>
                <path d="M300,100 C400,150 450,300 350,400 S150,450 100,300 S150,150 300,100 Z" fill="url(#gradient)" />
                <path d="M150,50 C50,100 0,250 100,350 S300,400 400,250 S350,100 150,50 Z" fill="rgba(63,81,181,0.3)" />
              </svg>
            </div>
          </div>
          <div class="w-full h-1 md:w-1 md:h-auto border-b-2 md:border-r-2 border-dashed border-white relative z-0 md:-ml-0.5 -mt-0.5 md:-mt-0.5 md:my-auto"></div>
          <div class="w-full md:w-4/3 relative">
            <img
                src="../../assets/BLACKPINK_The_Virtual_Banner.jpg"
                alt="Event Poster"
                class="w-full h-auto md:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 py-3 shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button @click="router.back()" class="flex items-center text-gray-600 hover:text-indigo-600 text-sm font-semibold">
          <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Trở về
        </button>
        <div class="text-center text-gray-700 font-medium">
          <span class="text-indigo-600 font-semibold relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-indigo-600">
            Chọn vé
          </span>
        </div>
        <div class="w-16"></div> </div>
    </div>

    <main class="flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 flex flex-col space-y-4">
        <div v-for="slot in timeSlots" :key="slot.id" class="p-4 bg-white rounded-xl shadow-md border border-gray-200">
          <div class="flex items-center justify-between mb-4">
            <span class="font-bold text-lg text-gray-800">{{ slot.time.split(',')[0] }}</span>
            <span v-if="slot.isSoldOut" class="text-red-500 font-semibold">Hết vé</span>
          </div>

          <div v-for="ticket in slot.tickets" :key="ticket.id" class="mb-4 last:mb-0">
            <div class="grid grid-cols-3 md:grid-cols-4 items-center gap-4 py-2 border-b border-gray-100 last:border-b-0">
              <div class="col-span-2 md:col-span-2 flex flex-col items-start">
                <button @click="toggleTicketDetail(ticket.id)" class="font-semibold text-gray-800 hover:text-indigo-600 flex items-center group">
                  <svg :class="{ 'rotate-90': activeTickets.has(ticket.id) }" class="w-4 h-4 mr-2 transition-transform duration-300 text-gray-600 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  {{ ticket.name }}
                </button>
                <span class="text-sm text-gray-600 ml-6">{{ ticket.price }}</span>
              </div>
              <div class="col-span-1 md:col-span-1 text-center font-medium" :class="getTicketStatusClass(ticket.isSoldOut)">
                {{ ticket.isSoldOut ? 'Hết vé' : '' }}
              </div>
              <div class="col-span-1 md:col-span-1 flex items-center justify-end">
                <div v-if="!ticket.isSoldOut" class="flex items-center border border-gray-300 rounded-md">
                  <button
                      @click.stop="updateTicketQuantity(slot.id, ticket.id, -1)"
                      class="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-l-md text-gray-800 font-bold"
                  >
                    -
                  </button>
                  <input
                      type="number"
                      :value="selectedTickets[slot.id]?.[ticket.id] || 0"
                      min="0"
                      class="w-12 text-center bg-white text-gray-800 border-x border-gray-300 appearance-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0"
                      @input="e => updateTicketQuantity(slot.id, ticket.id, parseInt(e.target.value))"
                  />
                  <button
                      @click.stop="updateTicketQuantity(slot.id, ticket.id, 1)"
                      class="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-r-md text-gray-800 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <transition name="expand">
              <div v-if="activeTickets.has(ticket.id)" class="mt-2 px-4 py-2 bg-gray-50 rounded-md text-sm text-gray-700 leading-relaxed">
                <p>{{ ticket.detailedDescription }}</p>
                <p class="text-xs text-gray-500 mt-2">
                  <ul v-if="ticket.notes && ticket.notes.length" class="list-disc pl-4">
                    <li v-for="(note, index) in ticket.notes" :key="index">{{ note }}</li>
                  </ul>
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <div class="lg:col-span-1">
        <div class="sticky top-4 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h4 class="text-xl font-bold text-gray-800 mb-4 text-center">[TP.HCM] CONCERT BLACKPINK In Your Area</h4>
          <p class="text-sm text-gray-700 mb-2 text-center">16:00 Ngày 5 tháng 8, 2025</p>
          <p class="text-sm text-gray-700 mb-4 text-center">Nhà hát Nguyễn Du</p>

          <h3 class="font-semibold text-gray-800 mb-2">Giá vé</h3>
          <div class="mb-4">
            <div v-for="ticket in timeSlots[0].tickets" :key="ticket.id" class="flex justify-between items-center py-1 text-sm">
              <span class="text-gray-700">{{ ticket.name }}</span>
              <span class="font-semibold text-gray-900" :class="{ 'text-red-500': ticket.isSoldOut }">{{ ticket.isSoldOut ? 'Hết vé' : ticket.price }}</span>
            </div>
          </div>

          <div class="border-t border-gray-300 pt-4 mt-4">
            <div class="flex justify-between items-center mb-4">
              <span class="text-lg font-bold text-gray-900">Thông tin đặt vé</span>
              <span class="text-sm text-indigo-600 cursor-pointer hover:underline">Chọn loại vé</span>
            </div>

            <div class="mb-4">
              <div v-if="Object.keys(selectedTickets).length === 0 || !hasSelectedTickets" class="text-gray-500 text-sm text-center py-2">
                Chưa có vé được chọn.
              </div>
              <div v-else>
                <div v-for="(ticketsInSlot, slotId) in selectedTickets" :key="slotId">
                  <div v-for="(quantity, ticketId) in ticketsInSlot" :key="ticketId">
                    <div v-if="quantity > 0" class="grid grid-cols-3 items-center py-1 text-sm">
                      <span class="col-span-1 text-gray-700">{{ getTicketName(slotId, ticketId) }}</span>
                      <span class="col-span-1 text-center text-gray-700">{{ quantity }}</span>
                      <span class="col-span-1 text-right font-semibold text-gray-900">{{ formatPrice(getTicketPriceValue(slotId, ticketId) * quantity) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-between items-center mt-4 border-t border-gray-300 pt-4">
              <span class="text-lg font-bold text-gray-900">Tạm tính {{ totalSelectedItems }} vé</span>
              <span class="text-xl font-bold text-indigo-600">{{ formatPrice(totalPrice) }}</span>
            </div>
          </div>

          <button
              @click="goToPayment"
              class="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 mt-4"
          >
            Tiếp tục - {{ formatPrice(totalPrice) }} >>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  id: {
    type: String,
    required: false
  }
});

const router = useRouter();


const goToPayment = () => {
  // 1. Tạo một mảng để chứa các mục trong giỏ hàng
  const cartItems = [];

  // 2. Lặp qua các vé đã chọn trong `selectedTickets`
  for (const slotId in selectedTickets.value) {
    for (const ticketId in selectedTickets.value[slotId]) {
      const quantity = selectedTickets.value[slotId][ticketId];
      if (quantity > 0) {
        // Tìm thông tin chi tiết của vé từ `timeSlots`
        const slot = timeSlots.value.find(s => s.id === slotId);
        const ticketInfo = slot.tickets.find(t => t.id === ticketId);

        // Thêm vào giỏ hàng với cấu trúc dữ liệu mà trang Payment mong muốn
        cartItems.push({
          id: `${ticketInfo.id}-${slotId}`, // Tạo id duy nhất cho từng mục
          name: ticketInfo.name,
          // Mô tả bao gồm số lượng và tên sự kiện
          description: `Số lượng: ${quantity}`,
          seatInfo: `Vé sự kiện "${slot.time.split(',')[0]}"`,
          // Tổng giá cho loại vé này (giá vé * số lượng)
          price: ticketInfo.rawPrice * quantity,
          // Bạn có thể thêm ảnh vé ở đây nếu có
          image: 'https://via.placeholder.com/80x80.png?text=Ticket',
        });
      }
    }
  }

  // Nếu chưa chọn vé nào thì thông báo
  if (cartItems.length === 0) {
    alert('Vui lòng chọn ít nhất 1 vé để tiếp tục!');
    return;
  }

  sessionStorage.setItem('cart', JSON.stringify(cartItems));

  router.push({ name: 'PaymentPage' });
};

const suggestedEvents = ref([]);

const timeSlots = ref([
  {
    id: 'slot1',
    time: '16:00 - 22:40, 28 Tháng 8, 2025',
    isSoldOut: false,
    tickets: [
      {
        id: 'ticket1',
        name: 'REGULAR TICKET',
        price: '755.000 đ',
        rawPrice: 755000,
        description: 'Vé vào cửa tiêu chuẩn, không kèm theo vật phẩm.',
        detailedDescription: 'Vé này cho phép bạn tham gia sự kiện ảo BLACKPINK THE VIRTUAL vào khung giờ đã chọn.',
        notes: [
          '- Với mỗi đơn hàng khán giả được mua tối đa 5 vé',
          '- Vé thuộc hạng dùng không phân khu vực khán giả tối ưu ưu tiên vị trí đứng',
          '- Không áp dụng ưu đãi giảm giá đi kèm của blackpink hoặc đối tác',
          '- Quà tặng: Sticker pack, phong bì, vé giấy',
          '- Hỗ trợ LED Livecam theo dõi toàn bộ sự kiện'
        ],
        isSoldOut: false,
      },
      {
        id: 'ticket2',
        name: 'COMBO 1 REGULAR TICKET + 1 STICK',
        price: '1.091.000 đ',
        rawPrice: 1091000,
        description: 'Gói combo bao gồm 1 vé thường và 1 lightstick chính hãng.',
        detailedDescription: 'Gói ưu đãi này bao gồm 1 vé vào cửa tiêu chuẩn và 1 lightstick chính hãng của BLACKPINK.',
        notes: [
          '- Với mỗi đơn hàng khán giả được mua tối đa 5 vé',
          '- Vé thuộc hạng dùng không phân khu vực khán giả tối ưu ưu tiên vị trí đứng',
          '- Không áp dụng ưu đãi giảm giá đi kèm của blackpink hoặc đối tác',
          '- Quà tặng: Sticker pack, phong bì, vé giấy',
          '- Hỗ trợ LED Livecam theo dõi toàn bộ sự kiện'
        ],
        isSoldOut: true,
      },
      {
        id: 'ticket3',
        name: 'COMBO 10 REGULAR TICKET',
        price: '1.091.000 đ',
        rawPrice: 1091000,
        description: 'Gói combo 10 vé thường.',
        detailedDescription: 'Dành cho nhóm 10 người, gói này cung cấp 10 vé vào cửa tiêu chuẩn với mức giảm giá.',
        notes: [
          '- Với mỗi đơn hàng khán giả được mua tối đa 5 vé',
          '- Vé thuộc hạng dùng không phân khu vực khán giả tối ưu ưu tiên vị trí đứng',
          '- Không áp dụng ưu đãi giảm giá đi kèm của blackpink hoặc đối tác',
          '- Quà tặng: Sticker pack, phong bì, vé giấy',
          '- Hỗ trợ LED Livecam theo dõi toàn bộ sự kiện'
        ],
        isSoldOut: false,
      },
      {
        id: 'ticket4',
        name: 'REGULAR TICKET KID',
        price: '755.000 đ',
        rawPrice: 755000,
        description: 'Vé dành cho trẻ em.',
        detailedDescription: 'Vé này dành riêng cho trẻ em tham gia sự kiện, quyền lợi tương đương vé thường.',
        notes: [
          '- Với mỗi đơn hàng khán giả được mua tối đa 5 vé',
          '- Vé thuộc hạng dùng không phân khu vực khán giả tối ưu ưu tiên vị trí đứng',
          '- Không áp dụng ưu đãi giảm giá đi kèm của blackpink hoặc đối tác',
          '- Quà tặng: Sticker pack, phong bì, vé giấy',
          '- Hỗ trợ LED Livecam theo dõi toàn bộ sự kiện'
        ],
        isSoldOut: true,
      },
    ],
  },
]);

const activeSlot = ref('slot1');
const activeTickets = ref(new Set());
const selectedTickets = ref({
  'slot1': {
    'ticket1': 0,
    'ticket3': 0
  }
});

onMounted(() => {
  const allTicketIds = timeSlots.value.flatMap(slot =>
      slot.tickets.filter(ticket => !ticket.isSoldOut).map(ticket => ticket.id)
  );
  allTicketIds.forEach(id => activeTickets.value.add(id));
});

const toggleSlot = (slotId) => {
  if (activeSlot.value === slotId) {
  } else {
    activeSlot.value = slotId;
  }
};

const toggleTicketDetail = (ticketId) => {
  if (activeTickets.value.has(ticketId)) {
    activeTickets.value.delete(ticketId);
  } else {
    activeTickets.value.add(ticketId);
  }
};

const getTicketStatusClass = (isSoldOut) => {
  return isSoldOut ? 'text-red-500' : 'text-gray-900';
};

const updateTicketQuantity = (slotId, ticketId, change) => {
  if (!selectedTickets.value[slotId]) {
    selectedTickets.value[slotId] = {};
  }
  let currentQuantity = selectedTickets.value[slotId][ticketId] || 0;
  let newQuantity;
  if (typeof change === 'number' && (change === 1 || change === -1)) {
    newQuantity = currentQuantity + change;
  } else if (typeof change === 'number' && change >= 0) {
    newQuantity = change;
  } else {
    return;
  }
  if (newQuantity < 0) {
    newQuantity = 0;
  }
  if (newQuantity > 10) {
    newQuantity = 10;
  }
  selectedTickets.value[slotId][ticketId] = newQuantity;
  if (newQuantity === 0) {
    delete selectedTickets.value[slotId][ticketId];
    if (Object.keys(selectedTickets.value[slotId]).length === 0) {
      delete selectedTickets.value[slotId];
    }
  }
};

const getTicketName = (slotId, ticketId) => {
  const slot = timeSlots.value.find(s => s.id === slotId);
  if (slot) {
    const ticket = slot.tickets.find(t => t.id === ticketId);
    return ticket ? ticket.name : '';
  }
  return '';
};

const getTicketPriceValue = (slotId, ticketId) => {
  const slot = timeSlots.value.find(s => s.id === slotId);
  if (slot) {
    const ticket = slot.tickets.find(t => t.id === ticketId);
    return ticket ? ticket.rawPrice : 0;
  }
  return 0;
};

const formatPrice = (value) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};

const totalPrice = computed(() => {
  let total = 0;
  for (const slotId in selectedTickets.value) {
    for (const ticketId in selectedTickets.value[slotId]) {
      const quantity = selectedTickets.value[slotId][ticketId];
      const price = getTicketPriceValue(slotId, ticketId);
      total += price * quantity;
    }
  }
  return total;
});

const hasSelectedTickets = computed(() => {
  for (const slotId in selectedTickets.value) {
    for (const ticketId in selectedTickets.value[slotId]) {
      if (selectedTickets.value[slotId][ticketId] > 0) {
        return true;
      }
    }
  }
  return false;
});

const totalSelectedItems = computed(() => {
  let total = 0;
  for (const slotId in selectedTickets.value) {
    for (const ticketId in selectedTickets.value[slotId]) {
      total += selectedTickets.value[slotId][ticketId];
    }
  }
  return total;
});

const getTotalQuantityForSlot = (slotId) => {
  let total = 0;
  if (selectedTickets.value[slotId]) {
    for (const ticketId in selectedTickets.value[slotId]) {
      total += selectedTickets.value[slotId][ticketId];
    }
  }
  return total;
};

const getTotalPriceForSlot = (slotId) => {
  let total = 0;
  if (selectedTickets.value[slotId]) {
    for (const ticketId in selectedTickets.value[slotId]) {
      const quantity = selectedTickets.value[slotId][ticketId];
      const price = getTicketPriceValue(slotId, ticketId);
      total += price * quantity;
    }
  }
  return total;
};
</script>

<style>

.event-detail-page {
  font-family: 'Arial', sans-serif;
  color: #333;
}


.mask-fade-bottom {
  mask-image: linear-gradient(to bottom, black, transparent);
  -webkit-mask-image: -webkit-linear-gradient(to bottom, black, transparent);
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
}


input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>