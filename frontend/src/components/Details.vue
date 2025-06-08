<template>
  <div class="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-xl bg-white">
    <div class="relative w-full md:w-3/4 bg-[#0c0c49] flex flex-col justify-between px-4 py-6 md:px-8 md:py-10 text-white">
      <div class="absolute -right-4 md:-right-8 top-4 md:top-1/2 transform md:-translate-y-1/2 z-20">
        <div class="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-dashed border-white z-10"
             style="clip-path: inset(0 0 50% 0);">
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

      <div class="mt-4 md:mt-6">
        <button class="bg-white text-[#0c0c49] px-4 py-1.5 md:px-6 md:py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition">
          Mua vé ngay
        </button>
      </div>
      <div class="absolute top-0 left-0 w-full h-full opacity-30">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
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

    <div class="w-full h-1 md:w-1 md:h-auto border-b-2 md:border-r-2 border-dashed border-white relative z-0 -mt-0.5 md:-ml-1"></div>

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