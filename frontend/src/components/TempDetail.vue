<template>
  <div class="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-xl bg-white max-w-6xl mx-auto">
    <div class="relative w-full md:w-3/4 bg-[#0c0c49] flex flex-col justify-between px-4 py-6 md:px-8 md:py-10 text-white">

      <div class="absolute -bottom-3 -right-4 md:-right-8 top-4 md:top-1/2 transform md:-translate-y-1/2 z-20">
        <div class="absolute -bottom-20 w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-dashed border-black relative z-40"
             style="clip-path: inset(0 40% 0 0);">
        </div>
        <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-md z-20">
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


    <div class="w-full md:w-4/3 relative"> <img
        src="../assets/BLACKPINK_The_Virtual_Banner.jpg"
        alt="Event Poster"
        class="w-full h-auto md:h-full object-cover"
    />
    </div>
  </div>
  <div class="w-full relative z-30 px-6 py-8 md:px-50 md:py-12 bg-white text-[#0c0c49] shadow-inner rounded-b-xl mt-4">
    <h2 class="text-xl md:text-2xl font-bold mb-4 text-center">Giới thiệu sự kiện</h2>

    <div
        :class="[isExpanded ? 'max-h-full' : 'max-h-28 mask-fade-bottom', 'transition-all duration-30 ease-in-out overflow-hidden']"
    >
      <p class="text-sm md:text-base leading-relaxed text-gray-700">
        Chào mừng bạn đến với sự kiện BLACKPINK THE VIRTUAL! Đây là một trải nghiệm âm nhạc độc đáo, đưa bạn vào thế giới ảo của PUBG MOBILE cùng nhóm nhạc nữ toàn cầu BLACKPINK. Bạn sẽ có cơ hội tham gia vào các buổi hòa nhạc ảo hoành tráng, tương tác với các thành viên và khám하거나 những nội dung độc quyền chưa từng được công bố. Sự kiện hứa hẹn mang đến những màn trình diễn đỉnh cao, hiệu ứng hình ảnh sống động và âm thanh chân thực, phá vỡ mọi giới hạn của một buổi concert truyền thống. Hãy sẵn sàng hòa mình vào không khí sôi động, kết nối với cộng đồng BLINKs trên toàn thế giới và tạo nên những kỷ niệm khó quên. Đừng bỏ lỡ cơ hội trở thành một phần của lịch sử âm nhạc ảo này! Sự kiện cũng sẽ có các mini-game và phần thưởng đặc biệt dành cho những người tham gia may mắn. Hãy chắc chắn rằng bạn đã cập nhật phiên bản PUBG MOBILE MOBILE mới nhất để có trải nghiệm tốt nhất. Chúng tôi rất mong được gặp bạn tại BLACKPINK THE VIRTUAL!
      </p>
    </div>

    <!-- Đã loại bỏ lớp overlay gradient cũ vì đã dùng mask-fade-bottom -->

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
  <div class="w-full relative z-30 px-1 py-8 md:px-50 md:py-12 bg-[#212121] text-white shadow-lg mt-8">
    <h3 class="text-xl md:text-2xl font-bold mb-4 text-center">Thông tin vé</h3>

    <div v-for="slot in timeSlots" :key="slot.id" class="mb-4 last:mb-0 bg-[#333333] rounded-lg overflow-hidden">
      <div class="flex items-center justify-between p-4 cursor-pointer hover:bg-[#444444] transition-colors" @click="toggleSlot(slot.id)">
        <div class="flex items-center">
          <svg :class="{ 'rotate-90': activeSlot === slot.id }" class="w-5 h-5 mr-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span class="font-semibold text-base md:text-lg">{{ slot.time }}</span>
        </div>
        <button v-if="!slot.isSoldOut" class="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors">
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
</template>

<script setup>
import { ref } from 'vue';

// Existing state variables
const isExpanded = ref(false); // For the event description
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

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