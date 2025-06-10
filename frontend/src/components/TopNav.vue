<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { currentUser, logout } from '@/components/data.js';

const route = useRoute();
const isUserMenuOpen = ref(false);

const unreadNotifications = ref(5);

</script>

<template>
  <nav aria-label="top bar" class="flex-none flex items-center justify-between bg-white h-16 border-b px-6">

    <div class="flex items-center">
      <h1 class="text-xl font-semibold text-gray-800">{{ route.name }}</h1>
    </div>

    <ul v-if="currentUser" aria-label="top bar right" class="flex items-center gap-x-4">

      <li class="relative hidden md:block">
        <i class="pointer-events-none absolute top-0 left-0 h-full flex items-center pl-3">
          <svg class="fill-current w-4 h-4 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" /></svg>
        </i>
        <input
            title="Search Bar"
            class="pl-10 pr-4 py-2 rounded-lg border bg-gray-50 text-sm focus:bg-white focus:border-blue-500 transition-all duration-300 ease-in-out w-40 focus:w-64"
            type="text"
            placeholder="Tìm kiếm..."
        />
      </li>

      <li class="relative">
        <button title="Thông báo" class="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full focus:outline-none">
          <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" /></svg>
          <span v-if="unreadNotifications > 0" class="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center border-2 border-white">
            {{ unreadNotifications }}
          </span>
        </button>
      </li>

      <li class="relative">
        <button @click="isUserMenuOpen = !isUserMenuOpen" class="h-10 w-10 rounded-full border-2 border-transparent hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition">
          <img class="h-full w-full rounded-full object-cover" :src="currentUser.avatar" :alt="currentUser.name" />
        </button>
        <div v-if="isUserMenuOpen" v-on:click.away="isUserMenuOpen = false" class="absolute right-0 mt-2 z-20 w-56">
          <ul class="outline-none py-2 bg-white border rounded-lg shadow-lg">
            <li class="px-4 py-2">
              <p class="font-semibold text-gray-800">{{ currentUser.name }}</p>
              <p class="text-xs text-gray-500">{{ currentUser.role }}</p>
            </li>
            <li><hr class="my-1"></li>
            <li class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <svg class="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <span>Hồ sơ</span>
            </li>
            <li class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <svg class="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Cài đặt</span>
            </li>
            <li><hr class="my-1"></li>
            <li @click="logout()" class="flex items-center px-4 py-2 hover:bg-red-50 text-red-600 font-semibold cursor-pointer">
              <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
              <span>Đăng xuất</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>