<script setup>
import { ref, computed } from 'vue';
import { events, pendingEvents, approveEvent, rejectEvent } from '@/components/data.js';

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
      <table class="hidden md:table w-full divide-y divide-gray-200">
        <thead class="bg-gray-100">
        <tr>
          <th class="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">Tên sự kiện</th>
          <th class="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">Người tạo</th>
          <th class="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">Ngày gửi</th>
          <th class="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">Trạng thái</th>
          <th class="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">Hành động</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
        <tr v-if="filteredEvents.length === 0">
          <td colspan="5" class="text-center py-6 text-gray-500">Không có sự kiện nào.</td>
        </tr>
        <tr
            v-for="event in filteredEvents"
            :key="event.id"
            class="hover:bg-gray-50 transition-colors"
        >
          <td class="px-6 py-4 text-gray-800 font-medium">{{ event.name }}</td>
          <td class="px-6 py-4 text-gray-700">{{ event.requester }}</td>
          <td class="px-6 py-4 text-gray-700">{{ event.date }}</td>
          <td class="px-6 py-4">
              <span
                  :class="{
                  'bg-yellow-100 text-yellow-700': event.status === 'pending',
                  'bg-green-100 text-green-700': event.status === 'approved',
                  'bg-red-100 text-red-700': event.status === 'rejected'
                }"
                  class="px-3 py-1 text-xs font-semibold rounded-full"
              >
                {{ event.status === 'pending' ? 'Chờ duyệt' : event.status === 'approved' ? 'Đã duyệt' : 'Đã từ chối' }}
              </span>
          </td>
          <td class="px-6 py-4">
            <template v-if="event.status === 'pending'">
              <button
                  @click="approveEvent(event.id)"
                  class="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-1 px-3 rounded-md mr-2 transition"
              >
                Duyệt
              </button>
              <button
                  @click="rejectEvent(event.id)"
                  class="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1 px-3 rounded-md transition"
              >
                Từ chối
              </button>
            </template>
            <button
                v-else
                class="text-blue-600 hover:underline text-sm transition"
            >
              Xem chi tiết
            </button>
          </td>
        </tr>
        </tbody>
      </table>

      <!-- Card layout for small screens -->
      <div class="md:hidden divide-y divide-gray-100">
        <div v-if="filteredEvents.length === 0" class="text-center py-6 text-gray-500">
          Không có sự kiện nào.
        </div>
        <div
            v-for="event in filteredEvents"
            :key="event.id"
            class="p-4 border-b hover:bg-gray-50 transition-colors"
        >
          <h2 class="text-lg font-semibold text-gray-800">{{ event.name }}</h2>
          <p class="text-sm text-gray-600">Người tạo: {{ event.requester }}</p>
          <p class="text-sm text-gray-600">Ngày gửi: {{ event.date }}</p>
          <p class="mt-1">
            <span
                :class="{
                'bg-yellow-100 text-yellow-700': event.status === 'pending',
                'bg-green-100 text-green-700': event.status === 'approved',
                'bg-red-100 text-red-700': event.status === 'rejected'
              }"
                class="inline-block px-3 py-1 text-xs font-semibold rounded-full"
            >
              {{ event.status === 'pending' ? 'Chờ duyệt' : event.status === 'approved' ? 'Đã duyệt' : 'Đã từ chối' }}
            </span>
          </p>
          <div class="mt-2">
            <template v-if="event.status === 'pending'">
              <button
                  @click="approveEvent(event.id)"
                  class="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-1 px-3 rounded-md mr-2 transition"
              >
                Duyệt
              </button>
              <button
                  @click="rejectEvent(event.id)"
                  class="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1 px-3 rounded-md transition"
              >
                Từ chối
              </button>
            </template>
            <button
                v-else
                class="text-blue-600 hover:underline text-sm transition"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
