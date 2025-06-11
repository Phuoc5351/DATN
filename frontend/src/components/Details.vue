<template>
  <nav class="max-w-6xl mx-auto p-8  ">
    <div class="flex items-center justify-center md:justify-start space-x-6 md:space-x-10 text-lg">
      <a href="#" class="relative font-semibold text-black">
        Nhạc sống
        <span class="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-indigo-600"></span>
      </a>

      <a href="#" class="font-medium text-black/70 hover:text-black transition-colors duration-300">Sân khấu & Nghệ thuật</a>
      <a href="#" class="font-medium text-black/70 hover:text-black transition-colors duration-300">Thể Thao</a>
      <a href="#" class="font-medium text-black/70 hover:text-black transition-colors duration-300">Khác</a>
    </div>
  </nav>
  <div class=" bg-gradient-to-br from-purple-900 via-indigo-800 to-rose-700 flex items-center justify-center p-4 ">

    <div class="max-w-6xl mx-auto">

    <div class="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-xl bg-white">
      <div class="relative w-full md:w-3/4 bg-[#0c0c49] flex flex-col justify-between px-4 py-6 md:px-8 md:py-10 text-white">

        <div class="absolute top- -bottom-3 -right-4 md:-right-8 top-4 md:top-1/2 transform md:-translate-y-1/2 z-20">

          <div class="relative -bottom-20 w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-dashed border-black  z-40"
               style="clip-path: inset(0 40% 0 0);">
          </div>
          <div class="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-md z-20">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/86168539c9e84124818960bfd3574041aeb444c7"
                 alt="Logo" class="w-8 md:w-10" />
          </div>
        </div>
        <div class="pr-12 md:pr-0">
          <h3 class="text-3xl md:text-5xl font-bold mb-3 md:mb-4">{{events.name}}</h3>
          <p class="text-base md:text-lg mt-3 md:mt-4">Thời gian: {{events.time}}</p>
          <p class="text-base md:text-lg">Địa điểm: {{events.location}}</p>
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
            :src="events.image"
            :alt="events.name"
            class="w-full h-auto md:h-full object-cover"
        />
      </div>
    </div>
    </div>
  </div>


  <div class="max-w-7xl mx-auto pt-10 bg-gray  ">
    <div class="relative z-30 px-6 py-8 md:px-8 bg-gray-100 text-[#0c0c49] shadow-inner rounded-xl -mt-1">
      <h2 class="text-xl md:text-2xl font-bold mb-4 text-center">Giới thiệu sự kiện</h2>

      <div
          :class="[isExpanded ? 'max-h-full' : 'max-h-28 mask-fade-bottom', 'transition-all duration-30 ease-in-out overflow-hidden']"
      >
        <p class="text-sm md:text-base leading-relaxed text-gray-700">
          {{events.description}}
        </p>
      </div>

      <div class="text-center mt-4">
        <button
            @click="toggleExpand"
            class="block mx-auto cursor-pointer p-2 rounded-full hover:bg-gray-100 transition duration-300"
        >
          <svg
              :class="{ 'rotate-180': isExpanded }"
              class="w-6 h-6 text-gray-400 hover:text-gray-600 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="max-w-7xl mx-auto p-1 ">
    <div class="relative z-30 px-6 py-8 md:px-8 bg-gradient-to-br from-purple-900 via-indigo-800 to-rose-700 text-white shadow-lg mt-8 rounded-xl">
      <h3 class="text-xl md:text-2xl font-bold mb-4 text-center">Thông tin vé</h3>

      <div v-for="slot in timeSlots" :key="slot.id" class="mb-4 last:mb-0 bg-black rounded-lg overflow-hidden">
        <div class="flex items-center justify-between p-4 cursor-pointer hover:bg-[#444444] transition-colors" @click="toggleSlot(slot.id)">
          <div class="flex items-center">
            <svg :class="{ 'rotate-90': activeSlot === slot.id }" class="w-5 h-5 mr-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span class="font-semibold text-base md:text-lg">{{ slot.time }}</span>
          </div>
          <button v-if="!slot.isSoldOut" class="w-full sm:w-auto bg-indigo-600 text-black font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 flex-shrink-0">
            MUA VÉ NGAY
          </button>
          <span v-else class="text-red-500 text-sm font-semibold">Hết vé</span>
        </div>

        <transition name="expand">
          <div v-if="activeSlot === slot.id" class="px-4 py-3 border-t border-gray-600">
            <div v-for="ticket in slot.tickets" :key="ticket.id" class="py-2 border-b border-gray-700 last:border-b-0">
              <div class="flex items-center justify-between cursor-pointer hover:bg-[#555555] p-2 -mx-2 rounded-md transition-colors" @click="toggleTicketDetail(ticket.id)">
                <div class="flex items-center">
                  <svg :class="{ 'rotate-90': activeTicket === ticket.id }" class="w-4 h-4 mr-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  <p class="font-medium text-base text-gray-200">{{ ticket.name }}</p>
                </div>
                <div class="text-right">
                  <p class="font-semibold text-base" :class="getTicketStatusClass(ticket.isSoldOut)">{{ ticket.price }}</p>
                  <span v-if="ticket.isSoldOut" class="ml-2 text-red-500 text-xs font-semibold">Hết vé</span>
                </div>
              </div>

              <transition name="expand">
                <div v-if="activeTicket === ticket.id" class="mt-2 px-4 py-2 bg-[#444444] rounded-md text-sm text-gray-300 leading-relaxed">
                  {{ ticket.detailedDescription }}
                </div>
              </transition>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="relative z-30 px-6 py-8 md:px-8 bg-[#111827] text-white shadow-lg mt-8 pb-15 rounded-xl">
      <h3 class="text-xl md:text-2xl font-bold mb-6 text-center">Nhà tổ chức</h3>

      <div class="space-y-6">
        <div class="flex items-start space-x-4">
          <img
              src="https://placehold.co/100x100/94a3b8/1e293b?text=LOGO"
              alt="Logo Nhà tổ chức"
              class="w-16 h-16 md:w-20 md:h-20 rounded-lg object-contain flex-shrink-0 bg-slate-400"
          >

          <div>
            <p class="font-semibold text-lg">Live Nation</p>
            <p class="text-sm text-gray-400 mt-1">
              Live Nation Entertainment là công ty giải trí trực tiếp hàng đầu thế giới bao gồm các công ty dẫn đầu thị trường toàn cầu: Ticketmaster, Live Nation Concerts, và Live Nation Sponsorship.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full bg-indigo-400 py-12 pt-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <h2 class="text-3xl font-bold text-center text-[#0c0c49] mb-8">
        Có thể bạn cũng thích
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div
            v-for="event in suggestedEvents"
            :key="event.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer"
        >
          <div class="relative">
            <img :src="event.image" :alt="event.title" class="w-full h-56 object-cover">
            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          <div class="p-5">
            <h3 class="text-lg font-bold text-gray-800 truncate" :title="event.title">
              {{ event.title }}
            </h3>
            <p class="text-sm text-gray-600 mt-1">
              {{ event.subtitle }}
            </p>
            <p class="text-sm font-semibold text-pink-600 mt-3">
              {{ event.date }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
  </template>

<script setup>
import { ref } from 'vue';

// Existing state variables
const isExpanded = ref(false);
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

import { useRoute } from 'vue-router'
import { eventsHomeDetails } from '@/components/data.js'

const route = useRoute()
const eventId = parseInt(route.params.id)
const events = eventsHomeDetails.find(e => e.id === eventId)
// Dán đoạn code này vào trong thẻ <script setup>

const suggestedEvents = ref([
  // Dòng 1
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    title: 'TWICE 6TH WORLD TOUR',
    subtitle: '\'ETERNITY\' in SEOUL',
    date: 'Tháng 10, 2025'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    title: 'aespa LIVE TOUR 2025',
    subtitle: 'SYNK : PARALLEL LINE',
    date: 'Tháng 11, 2025'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    title: 'LE SSERAFIM TOUR',
    subtitle: '\'FEARLESS\' FINALE IN JAPAN',
    date: 'Tháng 12, 2025'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    title: 'Stray Kids 3rd World Tour',
    subtitle: '"DOMINATE" in SEOUL',
    date: 'Tháng 1, 2026'
  },
  // Dòng 2
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    title: '(G)I-DLE WORLD TOUR',
    subtitle: '\'I-LAND\' IN BANGKOK',
    date: 'Tháng 2, 2026'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    title: 'NewJeans Fan Meeting',
    subtitle: '\'Bunnies Camp\' 2026',
    date: 'Tháng 3, 2026'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    title: 'IVE THE 1ST WORLD TOUR',
    subtitle: '\'SHOW WHAT I HAVE\'',
    date: 'Tháng 4, 2026'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    title: 'SEVENTEEN TOUR',
    subtitle: '\'FOLLOW\' AGAIN TO ASIA',
    date: 'Tháng 5, 2026'
  },
  // Dòng 3
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    title: 'NCT 127 3RD TOUR',
    subtitle: '\'NEO CITY : THE UNITY\'',
    date: 'Tháng 6, 2026'
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    title: 'Red Velvet 4th Concert',
    subtitle: '\'La Rouge\' Encore',
    date: 'Tháng 7, 2026'
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    title: 'TOMORROW X TOGETHER',
    subtitle: 'WORLD TOUR \'ACT : PROMISE\'',
    date: 'Tháng 8, 2026'
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    title: 'ENHYPEN WORLD TOUR',
    subtitle: '\'FATE PLUS\' IN US',
    date: 'Tháng 9, 2026'
  }
]);
// Data structure for time slots and tickets (same as before)
const timeSlots = ref([
  {
    id: 'slot1',
    time: '16:00 - 22:40, 28 Tháng 8, 2025',
    isSoldOut: false,
    tickets: [
      {
        id: 'ticket1',
        name: 'REGULAR TICKET',
        price: '765.000 ₫',
        description: 'Vé vào cửa tiêu chuẩn, không kèm theo vật phẩm.',
        detailedDescription: 'Vé này cho phép bạn tham gia sự kiện ảo BLACKPINK THE VIRTUAL vào khung giờ đã chọn. Bao gồm quyền truy cập vào các buổi biểu diễn chính, tương tác trong game và các khu vực sự kiện chung. Không bao gồm vật phẩm đi kèm hay ưu đãi đặc biệt nào khác. Vé không hoàn lại và không chuyển nhượng.',
        isSoldOut: false,
      },
      {
        id: 'ticket2',
        name: 'COMBO 1 REGULAR TICKET + 1 LIGHTSTICK (-2%)',
        price: '1.081.920 ₫',
        description: 'Gói combo bao gồm 1 vé thường và 1 lightstick chính hãng, giảm 2%.',
        detailedDescription: 'Gói ưu đãi này bao gồm 1 vé vào cửa tiêu chuẩn và 1 lightstick chính hãng của BLACKPINK. Lightstick sẽ được gửi đến địa chỉ đăng ký của bạn sau khi sự kiện kết thúc. Giảm giá 2% so với mua riêng lẻ. Số lượng có hạn.',
        isSoldOut: true,
      },
      {
        id: 'ticket3',
        name: 'COMBO 15 REGULAR TICKET (-20%)',
        price: '900.230 ₫',
        description: 'Gói combo 15 vé thường, giảm giá 20% cho nhóm bạn bè.',
        detailedDescription: 'Dành cho nhóm 15 người, gói này cung cấp 15 vé vào cửa tiêu chuẩn với mức giảm giá 20%. Đây là lựa chọn lý tưởng để bạn cùng bạn bè trải nghiệm sự kiện BLACKPINK THE VIRTUAL. Cần mua đủ số lượng vé trong cùng một giao dịch.',
        isSoldOut: false,
      },
      {
        id: 'ticket4',
        name: 'COMBO 10 REGULAR TICKET + 1 LIGHTSTICK (-15%)',
        price: '1.546.830 ₫',
        description: 'Gói combo 10 vé thường kèm 1 lightstick, giảm 15%.',
        detailedDescription: 'Gói này bao gồm 10 vé vào cửa tiêu chuẩn và 1 lightstick chính hãng, được giảm giá 15%. Rất phù hợp cho các nhóm nhỏ muốn có trải nghiệm trọn vẹn và sở hữu vật phẩm kỷ niệm.',
        isSoldOut: true,
      },
      {
        id: 'ticket5',
        name: 'COMBO REGULAR TICKET + KISS IDOL',
        price: '69.000.920 ₫',
        description: 'Gói đặc biệt bao gồm vé thường và cơ hội gặp gỡ, giao lưu với thần tượng.',
        detailedDescription: 'Đây là gói siêu đặc biệt, mang đến cho bạn 1 vé thường và cơ hội độc quyền để tham gia buổi giao lưu (Kiss Idol) với các thành viên BLACKPINK sau sự kiện. Số lượng cực kỳ giới hạn và sẽ được chọn ngẫu nhiên từ những người mua gói này. Chi tiết về buổi giao lưu sẽ được thông báo sau.',
        isSoldOut: true,
      },
      {
        id: 'ticket6',
        name: 'COMBO 5 REGULAR TICKET + 1 LIGHTSTICK (-8%)',
        price: '700.100 ₫',
        description: 'Gói combo 5 vé thường kèm 1 lightstick, giảm 8%.',
        detailedDescription: 'Combo 5 vé thường và 1 lightstick chính hãng, giảm giá 8%. Tiện lợi cho nhóm bạn bè hoặc gia đình muốn trải nghiệm sự kiện cùng nhau và có thêm vật phẩm kỷ niệm.',
        isSoldOut: false,
      },
    ],
  },
  {
    id: 'slot2',
    time: '09:00 - 15:00, 29 Tháng 8, 2025',
    isSoldOut: false,
    tickets: [
      {
        id: 'ticket7',
        name: 'EARLY BIRD TICKET',
        price: '650.000 ₫',
        description: 'Vé ưu đãi dành cho người mua sớm.',
        detailedDescription: 'Vé ưu đãi đặc biệt dành cho những người mua sớm nhất, với số lượng có hạn. Quyền lợi tương đương vé thường.',
        isSoldOut: false,
      },
      {
        id: 'ticket8',
        name: 'VIP PACKAGE',
        price: '5.000.000 ₫',
        description: 'Gói VIP bao gồm vé hàng đầu, quà tặng độc quyền và ưu tiên vào cửa.',
        detailedDescription: 'Gói VIP mang đến trải nghiệm cao cấp nhất: vị trí xem sự kiện tốt nhất, quà tặng độc quyền, lối vào ưu tiên, và một buổi giao lưu ảo đặc biệt (không phải Kiss Idol) với một thành viên ngẫu nhiên của BLACKPINK. Số lượng cực kỳ giới hạn.',
        isSoldOut: true,
      },
    ],
  },
]);

const activeSlot = ref(null);
const activeTicket = ref(null); // Biến trạng thái mới để quản lý loại vé đang mở

const toggleSlot = (slotId) => {
  if (activeSlot.value === slotId) {
    activeSlot.value = null; // Collapse if already active
    activeTicket.value = null; // Close any opened ticket details when slot collapses
  } else {
    activeSlot.value = slotId; // Expand the clicked slot
    activeTicket.value = null; // Close any previously opened ticket detail when new slot expands
  }
};

const toggleTicketDetail = (ticketId) => {
  if (activeTicket.value === ticketId) {
    activeTicket.value = null; // Collapse if already active
  } else {
    activeTicket.value = ticketId; // Expand the clicked ticket
  }
};

const getTicketStatusClass = (isSoldOut) => {
  return isSoldOut ? 'text-red-500' : 'text-green-500';
};
</script>