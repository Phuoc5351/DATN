<template>
  <header class="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="relative flex items-center justify-between h-20">

        <div class="flex-1">
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <div class="hidden md:flex items-center space-x-8">
            <router-link to="/" class="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Trang chủ</router-link>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Sự kiện</a>
            <a href="#" class="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Vé đã mua</a>
            <button
                @click="handleCreateEvent"
                :disabled="isCreating"
                class="text-gray-700 hover:text-indigo-600 font-medium px-2 py-1 disabled:text-gray-400"
            >
              {{ isCreating ? 'Đang tạo...' : 'Tổ chức sự kiện' }}
            </button>
          </div>
        </div>

        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center space-x-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black">
              <path d="M9 20V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M18 13V11C18 8.23858 15.7614 6 13 6H11C8.23858 6 6 8.23858 6 11V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M12 2L12 3M12 21L12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M4 12L2 12M22 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M19.071 4.92896L18.364 5.63607" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M5.63601 18.364L4.9289 19.0711" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M19.0711 19.0711L18.364 18.364" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M5.63601 5.63607L4.9289 4.92896" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span class="text-3xl font-bold tracking-wider text-black">TixFlow</span>
          </router-link>
        </div>

        <div class="flex-1 flex items-center justify-end space-x-5">
          <a href="#" class="text-gray-600 hover:text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </a>

          <router-link to="/login" class="hidden md:flex items-center justify-center px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
            Login/Register
          </router-link>

          <router-link to="/login" class="md:hidden flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>

      </nav>

      <div v-if="isMenuOpen" class="md:hidden pb-4">
        <div class="flex flex-col space-y-4">
          <a href="#" class="text-gray-700 hover:text-indigo-600 font-medium px-2 py-1">Trang chủ</a>
          <a href="#" class="text-gray-700 hover:text-indigo-600 font-medium px-2 py-1">Sự kiện</a>
          <a href="#" class="text-gray-700 hover:text-indigo-600 font-medium px-2 py-1">Vé đã mua</a>
          <button
              @click="handleCreateEvent"
              :disabled="isCreating"
              class="text-gray-700 hover:text-indigo-600 font-medium px-2 py-1 disabled:text-gray-400"
          >
            {{ isCreating ? 'Đang tạo...' : 'Tổ chức sự kiện' }}
          </button>
        </div>

      </div>

    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
import { useRouter } from 'vue-router';
import api from '../components/services/api.js'; // Đảm bảo đường dẫn này đúng

const router = useRouter();
const isCreating = ref(false);

const handleCreateEvent = async () => {
  if (isCreating.value) return;

  isCreating.value = true;
  try {
    // Bước 1: Vẫn gọi API để tạo bản nháp và lấy ID mới như cũ
    const response = await api.createEvent();
    const newEventId = response.data.eventId;

    if (!newEventId) {
      throw new Error("Không nhận được ID sự kiện từ server.");
    }

    // Bước 2: Dùng router.resolve để lấy đường dẫn URL đầy đủ
    const routeData = router.resolve({
      name: 'Step1', // Tên route của step đầu tiên
      params: { id: newEventId }
    });

    // Bước 3: Dùng window.open để mở URL đó trong một tab mới
    window.open(routeData.href, '_blank');

  } catch (error) {
    console.error("Lỗi khi tạo sự kiện mới:", error);
    alert("Không thể tạo sự kiện mới, vui lòng thử lại.");
  } finally {
    isCreating.value = false;
  }
};
</script>