<script setup>
import {ref, computed} from 'vue';
import {
  events,
  pendingEvents,
  approveEvent,
  rejectEvent,
  toggleFeatured
} from '@/components/data.js';

const filterStatus = ref('all');

const filteredEvents = computed(() => {
  if (filterStatus.value === 'all') {
    return events.value;
  }
  return events.value.filter(event => event.status === filterStatus.value);
});

const pendingEventsCount = computed(() => pendingEvents.value.length);
</script>

<template>
  <section class="flex flex-col flex-auto border-l p-4 sm:p-6 bg-gray-50 min-h-screen">
    <header class="mb-6">
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">Quản lý & Duyệt sự kiện</h1>
      <p class="text-gray-500 text-sm sm:text-base">Danh sách các sự kiện chờ duyệt hoặc đã xử lý.</p>
    </header>

    <div class="flex flex-wrap gap-2 mb-6">
      <button
          @click="filterStatus = 'all'"
          :class="filterStatus === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50'"
          class="px-4 py-2 rounded-md border shadow-sm transition-colors"
      >
        Tất cả
      </button>
      <button
          @click="filterStatus = 'pending'"
          :class="filterStatus === 'pending' ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700 hover:bg-yellow-50'"
          class="px-4 py-2 rounded-md border shadow-sm transition-colors"
      >
        Chờ duyệt ({{ pendingEventsCount }})
      </button>
      <button
          @click="filterStatus = 'approved'"
          :class="filterStatus === 'approved' ? 'bg-green-500 text-white' : 'bg-white text-gray-700 hover:bg-green-50'"
          class="px-4 py-2 rounded-md border shadow-sm transition-colors"
      >
        Đã duyệt
      </button>
    </div>

    <div class="overflow-x-auto shadow rounded-lg bg-white">
      <table class="hidden md:table w-full text-sm text-left text-gray-700 bg-white rounded-xl shadow overflow-hidden">
        <thead class="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
        <tr>
          <th class="px-6 py-4">Tên sự kiện</th>
          <th class="px-6 py-4">Người tạo</th>
          <th class="px-6 py-4">Ngày gửi</th>
          <th class="px-6 py-4">Trạng thái</th>
          <th class="px-6 py-4">Hành động</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
        <tr v-if="filteredEvents.length === 0">
          <td colspan="5" class="text-center py-6 text-gray-500">Không có sự kiện nào.</td>
        </tr>
        <tr
            v-for="event in filteredEvents"
            :key="event.id"
            class="hover:bg-gray-50 transition"
        >
          <td class="px-6 py-4 font-medium text-gray-900">{{ event.name }}</td>
          <td class="px-6 py-4">{{ event.requester }}</td>
          <td class="px-6 py-4">{{ event.submitDate }}</td>
          <td class="px-6 py-4">
        <span
            :class="{
            'bg-yellow-100 text-yellow-700': event.status === 'pending',
            'bg-green-100 text-green-700': event.status === 'approved',
            'bg-red-100 text-red-700': event.status === 'rejected'
          }"
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
        >
          <svg
              v-if="event.status === 'pending'"
              class="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="6"/>
          </svg>
          <svg
              v-if="event.status === 'approved'"
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
          <svg
              v-if="event.status === 'rejected'"
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          {{ event.status === 'pending' ? 'Chờ duyệt' : event.status === 'approved' ? 'Đã duyệt' : 'Đã từ chối' }}
        </span>
          </td>
          <td class="px-6 py-4 space-x-2">
            <button
                v-if="event.status === 'pending'"
                @click="approveEvent(event.id)"
                class="inline-flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 text-xs font-medium transition-all duration-200"
            >
              ✅ <span>Duyệt</span>
            </button>

            <button
                v-if="event.status === 'pending'"
                @click="rejectEvent(event.id)"
                class="inline-flex items-center gap-1 px-3 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 text-xs font-medium transition-all duration-200"
            >
              ❌ <span>Từ chối</span>
            </button>

            <button
                v-if="event.status !== 'pending'"
                @click="viewDetails(event.id)"
                class="inline-flex items-center gap-1 px-3 py-1.5 border border-blue-500 text-blue-600 rounded-md bg-white hover:bg-blue-50 text-xs font-medium transition-all duration-200"
            >
              📄 <span>Xem chi tiết</span>
            </button>

            <button
                v-if="event.status !== 'pending' && event.status !== 'rejected'"
                @click="toggleFeatured(event.id)"
                :class="['inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200',
                event.featured? 'bg-purple-500 text-white hover:bg-purple-600': 'bg-gray-200 text-gray-800 hover:bg-gray-300' ]"
            >
              {{ event.featured ? '🌐 Bỏ khỏi trang chủ' : '📌 Hiển thị trang chủ' }}
            </button>
          </td>

        </tr>
        </tbody>
      </table>
    </div>

    <div class="md:hidden space-y-4 mt-4">
      <div
          v-for="event in filteredEvents"
          :key="event.id"
          class="bg-white p-4 rounded-lg shadow space-y-2"
      >
        <div class="flex justify-between items-center">
          <h2 class="font-semibold text-gray-800 text-lg">{{ event.name }}</h2>
          <span
              :class="{
          'bg-yellow-100 text-yellow-700': event.status === 'pending',
          'bg-green-100 text-green-700': event.status === 'approved',
          'bg-red-100 text-red-700': event.status === 'rejected'
        }"
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
          >
        <svg
            v-if="event.status === 'pending'"
            class="w-3.5 h-3.5"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
          <circle cx="10" cy="10" r="6" />
        </svg>
        <svg
            v-if="event.status === 'approved'"
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <svg
            v-if="event.status === 'rejected'"
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        {{ event.status === 'pending' ? 'Chờ duyệt' : event.status === 'approved' ? 'Đã duyệt' : 'Đã từ chối' }}
      </span>
        </div>

        <div class="text-sm text-gray-600">
          <p><strong>Người tạo:</strong> {{ event.requester }}</p>
          <p><strong>Ngày gửi:</strong> {{ event.submitDate }}</p>
        </div>

        <div class="flex flex-wrap gap-2 pt-2">
          <button
              v-if="event.status === 'pending'"
              @click="approveEvent(event.id)"
              class="px-3 py-1.5 bg-green-600 text-white rounded-md text-xs hover:bg-green-700 transition"
          >
            ✅ Duyệt
          </button>

          <button
              v-if="event.status === 'pending'"
              @click="rejectEvent(event.id)"
              class="px-3 py-1.5 bg-red-500 text-white rounded-md text-xs hover:bg-red-600 transition"
          >
            ❌ Từ chối
          </button>

          <button
              v-if="event.status !== 'pending'"
              @click="viewDetails(event.id)"
              class="px-3 py-1.5 border border-blue-500 text-blue-600 rounded-md bg-white hover:bg-blue-50 text-xs transition"
          >
            📄 Xem chi tiết
          </button>

          <button
              v-if="event.status !== 'pending' && event.status !== 'rejected'"
              @click="toggleFeatured(event.id)"
              :class="[
          'px-3 py-1.5 rounded-md text-xs transition',
          event.featured
            ? 'bg-purple-500 text-white hover:bg-purple-600'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        ]"
          >
            {{ event.featured ? '🌐 Bỏ khỏi trang chủ' : '📌 Hiển thị trang chủ' }}
          </button>
        </div>
      </div>

      <p v-if="filteredEvents.length === 0" class="text-center text-gray-500 py-6">Không có sự kiện nào.</p>
    </div>
  </section>
</template>
