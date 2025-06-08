<template>
  <div class="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-xl bg-white">
    <div class="relative w-full md:w-3/4 bg-gradient-to-br from-[#0c0c49] to-[#2a2a69] flex flex-col justify-between px-6 py-8 md:px-10 md:py-12 text-white">

      <div class="absolute inset-0 flex items-center justify-center z-0">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" class="w-3/4 h-3/4 opacity-30">
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

      <div class="absolute -right-6 md:-right-10 top-6 md:top-1/3 transform -translate-y-1/2 z-30">
        <div class="absolute w-14 h-14 md:w-18 md:h-18 rounded-full border-2 border-dashed border-white z-20"
             style="clip-path: inset(0 0 50% 0);">
        </div>
        <div class="w-14 h-14 md:w-18 md:h-18 rounded-full bg-white flex items-center justify-center shadow-md z-30">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/86168539c9e84124818960bfd3574041aeb444c7"
               alt="Logo" class="w-7 md:w-9" />
        </div>
      </div>

      <div class="relative z-30 pr-10 md:pr-0">
        <h3 class="text-3xl md:text-5xl font-bold mb-3 md:mb-4 uppercase tracking-wider" style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);">BLACKPINK THE VIRTUAL</h3>
        <p class="text-base md:text-lg mb-1" style="letter-spacing: 0.5px;">PUBG MOBILE x BLACKPINK</p>
        <p class="text-base md:text-lg mt-3 md:mt-4 italic">Ngày tổ chức: <span class="font-semibold">22-24 & 29-31 JULY 2022</span></p>
        <p class="text-base md:text-lg">Địa điểm: <span class="underline">Trực tuyến trong PUBG</span></p>
      </div>

      <div class="relative z-30 mt-5 md:mt-8">
        <button class="bg-white text-[#0c0c49] px-5 py-2 md:px-8 md:py-3 rounded-full font-semibold text-sm uppercase hover:bg-gray-200 transition duration-300 shadow-md" style="letter-spacing: 0.8px;">
          Mua vé ngay
        </button>
      </div>
    </div>

    <div class="w-full h-1 md:w-1 md:h-auto border-b-2 md:border-r-2 border-dashed border-gray-300 relative z-0 -mt-0.5 md:-ml-1"></div>

    <div class="w-full md:w-4/3 relative">
      <img
          src="../assets/BLACKPINK_The_Virtual_Banner.jpg"
          alt="Event Poster"
          class="w-full h-auto md:h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
// Không cần logic ở đây trừ khi bạn muốn thêm tính năng
</script>