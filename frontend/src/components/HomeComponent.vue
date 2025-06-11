<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import {eventsHomeDetails} from '@/components/data.js'

const events = ref(eventsHomeDetails)


const featuredCarousel = ref(null);
const upcomingCarousel = ref(null);
const onGoingCarsousel = ref(null);

const scrollFeaturedCarousel = (direction) => {
  if (featuredCarousel.value) {
    const scrollAmount = featuredCarousel.value.offsetWidth * 0.8;
    featuredCarousel.value.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  }
};
const scrollOnGoingEvent = (direction) => {
  if (onGoingCarsousel.value) {
    const scrollAmount = onGoingCarsousel.value.offsetWidth * 0.8;
    onGoingCarsousel.value.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  }
};

const scrollUpcomingCarousel = (direction) => {
  if (upcomingCarousel.value) {
    const scrollAmount = upcomingCarousel.value.offsetWidth * 0.8;
    upcomingCarousel.value.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  }
};
let intervalId;
onMounted(() => {
  intervalId = setInterval(() => {
    events.value.forEach(event => {
      event.endsIn.seconds--;
      if (event.endsIn.seconds < 0) {
        event.endsIn.seconds = 59;
        event.endsIn.minutes--;
      }
      if (event.endsIn.minutes < 0) {
        event.endsIn.minutes = 59;
        event.endsIn.hours--;
      }
    });
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="bg-gray-100 font-sans">
    <section class="text-white pt-20 pb-32 md:pt-24 md:pb-40 bg-gradient-to-br from-purple-900 via-indigo-800 to-rose-700">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Chọn vé cho sự kiện yêu thích
        </h1>
        <p class="mt-4 text-base sm:text-lg lg:text-xl text-slate-300">
          Đừng bỏ lỡ những sự kiện bùng nổ sắp diễn ra!
        </p>
        <form class="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-2">
          <div class="relative flex-grow w-full">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                   fill="currentColor">
                <path fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"/>
              </svg>
            </div>
            <input type="text" placeholder="Tìm sự kiện?"
                   class="w-full bg-white text-gray-900 rounded-full py-3 pl-11 pr-4 border-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
          </div>
          <button type="submit"
                  class="w-full sm:w-auto bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 flex-shrink-0">
            Tìm kiếm
          </button>
        </form>
      </div>
    </section>
    <div class="container mx-auto relative -mt-24 pb-16">

      <button @click="scrollFeaturedCarousel(-1)"
              class="absolute top-1/2 -translate-y-1/2 left-2 md:left-0 md:-translate-x-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-lg hover:bg-white transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <div ref="featuredCarousel"
           class="flex overflow-x-auto snap-x snap-mandatory space-x-4 md:space-x-6 px-4 sm:px-6 lg:px-8 scrollbar-hide -mx-4 sm:-mx-6 lg:-mx-8 py-4">

        <div
            v-for="event in events"
            :key="event.id"
            class="group relative flex-shrink-0 w-[85vw] sm:w-72 md:w-80 h-[420px] bg-slate-800 rounded-2xl shadow-lg overflow-hidden snap-start transition-all duration-300"
        >
          <img :src="event.image" :alt="'Hình ảnh cho ' + event.name"
               class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"/>
          <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300"></div>
          <div class="relative h-full flex flex-col justify-end p-5 text-white">
            <h3 class="text-lg font-bold leading-tight">{{ event.name }}</h3>
            <p class="text-indigo-300 font-semibold mt-1">{{ event.price }}</p>
            <div
                class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
              <div class="space-y-2 text-sm text-left border-l-2 border-indigo-400/50 pl-3">
                <p class="flex items-start">
                  <svg class="w-4 h-4 mr-2.5 text-gray-300 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24"
                       stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                  </svg>
                  <span>{{ event.location }}</span>
                </p>
                <p class="flex items-start">
                  <svg class="w-4 h-4 mr-2.5 text-gray-300 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24"
                       stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18"/>
                  </svg>
                  <span>{{ event.time }}</span>
                </p>
              </div>
            </div>
            <router-link
                :to="`/details/${event.id}`"
                class="mt-4 block text-center w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
            >
              Xem chi tiết
            </router-link>
          </div>
        </div>

      </div>

      <button @click="scrollFeaturedCarousel(1)"
              class="absolute top-1/2 -translate-y-1/2 right-2 md:right-0 md:translate-x-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-lg hover:bg-white transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </div>
  <section class="bg-white py-16 sm:py-16">
    <div class="container mx-auto px-4 text-center">

      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Lợi thế của chúng tôi
      </h2>

      <p class="mt-4 text-lg leading-8 text-gray-600">
        Chúng tôi cam kết người dùng đầy đủ các chức năng sau đây:
      </p>

      <div class="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-8">

        <div class="flex flex-col items-center text-center">

          <div class="flex items-center justify-center h-40 w-40 mb-4 rounded-lg bg-indigo-100">
            <svg class="h-30 w-30 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-12a1.5 1.5 0 011.5-1.5h5.25A1.5 1.5 0 0115 4.5v15a1.5 1.5 0 01-1.5 1.5H7.5a1.5 1.5 0 01-1.5-1.5v-15zm1.5 0h5.25m-5.25 0h5.25"/>
            </svg>
          </div>

          <h3 class="text-lg font-semibold text-gray-800">Đặt vé trực tuyến</h3>
        </div>

        <div class="flex flex-col items-center text-center">

          <div class="flex items-center justify-center h-40 w-40 mb-4 rounded-lg bg-indigo-100">
            <svg class="h-30 w-30 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.18-3.185m-7.5 0h-4.992"/>
            </svg>
          </div>

          <h3 class="text-lg font-semibold text-gray-800">Hoàn vé</h3>
        </div>

        <div class="flex flex-col items-center text-center">

          <div class="flex items-center justify-center h-40 w-40 mb-4 rounded-lg bg-indigo-100">
            <svg class="h-30 w-30 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414-.336.75-.75.75h-.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75-.75v-.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V7.5c0-.621.504-1.125 1.125-1.125h1.5DB"/>
            </svg>
          </div>

          <h3 class="text-lg font-semibold text-gray-800">Giá cả phải chăng</h3>
        </div>

      </div>
    </div>
  </section>

  <div class="bg-gray-100 py-16 sm:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Các sự kiện đang diễn ra</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Khám phá các sự kiện đang diễn ra</p>
        <div class="mt-6 flex items-center justify-center gap-x-4">
          <button @click="scrollUpcomingCarousel(-1)"
                  class="p-2 rounded-full border border-gray-300 text-gray-500 bg-white">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
            </svg>
          </button>
          <button @click="scrollUpcomingCarousel(1)"
                  class="p-2 rounded-full border border-gray-300 text-gray-500 bg-white">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </svg>
          </button>
        </div>
      </div>

      <div ref="upcomingCarousel" class="mt-10 flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
        <div
            v-for="event in events"
            :key="event.id"
            class="flex-shrink-0 w-64 sm:w-72"
        >
          <div
              class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 group"
          >
            <div class="relative">
              <img
                  :src="event.image"
                  :alt="event.name"
                  class="w-full h-80 object-cover"
              />

              <div
                  class="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-red-500/40 text-white text-xs backdrop-blur-sm shadow-md"
              >
                <div class="flex items-center gap-x-1 sm:gap-x-2">
                  <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Thời gian kết thúc</span>
                  <span class="ml-auto font-mono">
              {{ event.endsIn.days }}D,
              {{ String(event.endsIn.hours).padStart(2, '0') }}:
              {{ String(event.endsIn.minutes).padStart(2, '0') }}:
              {{ String(event.endsIn.seconds).padStart(2, '0') }}
            </span>
                </div>
              </div>
            </div>

            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-900 truncate">
                {{ event.name }}
              </h3>
              <p class="text-sm text-gray-600 mt-2 flex items-center gap-1 whitespace-nowrap">
                <svg class="w-4 h-4  text-indigo-500" fill="none" viewBox="0 0 24 24"
                     stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18"/>
                </svg>
                Thời gian: {{ event.time }}
              </p>
              <p
                  class="text-sm text-gray-800 mt-3 font-bold flex items-center gap-1"
              >
                <svg
                    class="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 7H4a1 1 0 00-1 1v2a2 2 0 000 4v2a1 1 0 001 1h5m6-10h5a1 1 0 011 1v2a2 2 0 010 4v2a1 1 0 01-1 1h-5M9 7v10m6-10v10"
                  />
                </svg>
                {{ event.price }}
              </p>
            </div>

            <div class="bg-gray-50 px-4 py-3 border-t border-gray-100">
              <router-link
                  :to="`/details/${event.id}`"
                  class="mt-4 block text-center w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg "
              >
                Đặt ngay
              </router-link>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
  <div class="bg-gray-100 py-16 sm:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Các sự kiện sắp diễn ra</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Khám phá các sự kiện sắp sửa diễn ra</p>
        <div class="mt-6 flex items-center justify-center gap-x-4">
          <button @click="scrollOnGoingEvent(-1)"
                  class="p-2 rounded-full border border-gray-300 text-gray-500 bg-white hover:bg-gray-100 transition-colors duration-300">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
            </svg>
          </button>
          <button @click="scrollOnGoingEvent(1)"
                  class="p-2 rounded-full border border-gray-300 text-gray-500 bg-white hover:bg-gray-100 transition-colors duration-300">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </svg>
          </button>
        </div>
      </div>
      <div ref="onGoingCarsousel" class="mt-10 flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
        <div
            v-for="event in events"
            :key="event.id"
            class="flex-shrink-0 w-64 sm:w-72"
        >
          <div
              class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 group"
          >
            <div class="relative">
              <img
                  :src="event.image"
                  :alt="event.name"
                  class="w-full h-80 object-cover "
              />
              <div
                  class="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-white p-4 text-center"
              >
                <h4 class="text-2xl font-extrabold tracking-widest uppercase">
                  Coming Soon
                </h4>
                <p class="mt-2 text-lg font-semibold flex items-center gap-2">
                  <svg class="w-5 h-5 text-white"
                       fill="none"
                       stroke="currentColor"
                       stroke-width="2"
                       viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 2a10 10 0 110 20 10 10 0 010-20z"></path>
                  </svg>
                  {{ event.time }}
                </p>
              </div>
            </div>

            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-900 truncate">
                {{ event.name }}
              </h3>
              <p class="text-sm text-gray-600 mt-2 flex items-center gap-1 truncate">
                <svg class="w-4 h-4 text-indigo-500"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="2"
                     viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z">
                  </path>
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z">
                  </path>
                </svg>

                {{ event.location }}
              </p>
              <p class="text-sm text-gray-800 mt-3 font-bold flex items-center gap-1">
                <svg class="w-4 h-4 text-green-500"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="2"
                     viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 7H4a1 1 0 00-1 1v2a2 2 0 000 4v2a1 1 0 001 1h5m6-10h5a1 1 0 011 1v2a2 2 0 010 4v2a1 1 0 01-1 1h-5M9 7v10m6-10v10">
                  </path>
                </svg>
                {{ event.price }}
              </p>
            </div>

            <div class="bg-gray-50 px-4 py-3 border-t border-gray-100">
              <router-link
                  :to="`/details/${event.id}`"
                  class="mt-4 block text-center w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg"
              >
                Đặt ngay
              </router-link>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
  <section class="pb-12 mx-auto md:pb-20 max-w-7xl py-16">
    <div class="py-4 text-center md:py-8">
      <h4 class="text-3xl font-bold tracking-wide text-center uppercase text-black">Bạn nghĩ gì về chúng tôi?</h4>
      <p class="mt-1 tracking-tight text-black text text-2xl">Hãy để lại nhận xét để chúng tôi có thể cải thiện và phát
        triễn hơn nữa</p>
    </div>

    <div class="gap-8 space-y-8 md:columns-2 lg:columns-3">

      <div class="p-8 bg-white border border-gray-100 shadow-xl aspect-auto rounded-3xl shadow-blue-500/10">

        <svg xmlns="http://www.w3.org/2000/svg"
             width="28" height="28" viewBox="0 0 24 24" fill="none"
             stroke="#1C6FE3" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-quote-icon lucide-quote">
          <path
              d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
          <path
              d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
        </svg>
        <p class="mt-2 mb-5">Absolutely love these seat covers. They're stylish, comfortable, and were really easy to
          install.
          My car interior looks brand new!</p>
        <div class="flex gap-4 items-start">
          <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar"
               width="400" height="400" loading="lazy">
          <div class="flex-1 flex justify-between items-start">
            <div>
              <h6 class="text-lg font-medium text-gray-700">Sneha Rao</h6>
              <p class="text-sm text-gray-500">Product Designer</p>
            </div>

          </div>
        </div>
      </div>

      <div class="p-8 bg-white border border-gray-100 shadow-xl aspect-auto rounded-3xl shadow-blue-500/10">

        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
             stroke="#1C6FE3" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-quote-icon lucide-quote">
          <path
              d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
          <path
              d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
        </svg>
        <p class="mt-2 mb-5">Absolutely love these seat covers. They're stylish, comfortable, and were really easy to
          install.
          My car interior looks brand new!</p>
        <div class="flex gap-4 items-start">
          <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar"
               width="400" height="400" loading="lazy">
          <div class="flex-1 flex justify-between items-start">
            <div>
              <h6 class="text-lg font-medium text-gray-700">Sneha Rao</h6>
              <p class="text-sm text-gray-500">Product Designer</p>
            </div>

          </div>
        </div>
      </div>

      <div class="p-8 bg-white border border-gray-100 shadow-xl aspect-auto rounded-3xl shadow-blue-500/10">

        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
             stroke="#1C6FE3" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-quote-icon lucide-quote">
          <path
              d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
          <path
              d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
        </svg>
        <p class="mt-2 mb-5">Absolutely love these seat covers. They're stylish, comfortable, and were really easy to
          install.
          My car interior looks brand new!</p>
        <div class="flex gap-4 items-start">
          <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar"
               width="400" height="400" loading="lazy">
          <div class="flex-1 flex justify-between items-start">
            <div>
              <h6 class="text-lg font-medium text-gray-700">Sneha Rao</h6>
              <p class="text-sm text-gray-500">Product Designer</p>
            </div>

          </div>
        </div>
      </div>

      <div class="p-8 bg-white border border-gray-100 shadow-xl aspect-auto rounded-3xl shadow-blue-500/10">

        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
             stroke="#1C6FE3" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-quote-icon lucide-quote">
          <path
              d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
          <path
              d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
        </svg>
        <p class="mt-2 mb-5">Absolutely love these seat covers. They're stylish, comfortable, and were really easy to
          install.
          My car interior looks brand new!</p>
        <div class="flex gap-4 items-start">
          <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar"
               width="400" height="400" loading="lazy">
          <div class="flex-1 flex justify-between items-start">
            <div>
              <h6 class="text-lg font-medium text-gray-700">Sneha Rao</h6>
              <p class="text-sm text-gray-500">Product Designer</p>
            </div>

          </div>
        </div>
      </div>

      <div class="p-8 bg-white border border-gray-100 shadow-xl aspect-auto rounded-3xl shadow-blue-500/10">

        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
             stroke="#1C6FE3" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-quote-icon lucide-quote">
          <path
              d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
          <path
              d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
        </svg>
        <p class="mt-2 mb-5">Absolutely love these seat covers. They're stylish, comfortable, and were really easy to
          install.
          My car interior looks brand new!</p>
        <div class="flex gap-4 items-start">
          <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar"
               width="400" height="400" loading="lazy">
          <div class="flex-1 flex justify-between items-start">
            <div>
              <h6 class="text-lg font-medium text-gray-700">Sneha Rao</h6>
              <p class="text-sm text-gray-500">Product Designer</p>
            </div>

          </div>
        </div>
      </div>
      <div class="p-8 bg-white border border-gray-100 shadow-xl aspect-auto rounded-3xl shadow-blue-500/10">

        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
             stroke="#1C6FE3" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-quote-icon lucide-quote">
          <path
              d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
          <path
              d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
        </svg>
        <p class="mt-2 mb-5">Absolutely love these seat covers. They're stylish, comfortable, and were really easy to
          install.
          My car interior looks brand new!</p>
        <div class="flex gap-4 items-start">
          <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar"
               width="400" height="400" loading="lazy">
          <div class="flex-1 flex justify-between items-start">
            <div>
              <h6 class="text-lg font-medium text-gray-700">Sneha Rao</h6>
              <p class="text-sm text-gray-500">Product Designer</p>
            </div>

          </div>
        </div>
      </div>

    </div>
    <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">

      <a href="#"
         class="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center px-6 py-3 font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-star-icon lucide-star">
          <path
              d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
        </svg>
        <span>Xem tất cả đánh giá</span>
      </a>
      <a href="#"
         class="inline-flex  items-center justify-center gap-2 w-full sm:w-auto text-center px-6 py-3 font-medium text-white bg-indigo-600 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white"
             stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-pencil-line-icon lucide-pencil-line">
          <path d="M12 20h9"/>
          <path
              d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>
          <path d="m15 5 3 3"/>
        </svg>
        <span> Đánh giá cho chúng tôi</span>
      </a>
    </div>
  </section>


</template>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>