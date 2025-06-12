<script setup>
import { useRouter } from 'vue-router';
// 1. Import trực tiếp các biến và hàm từ file store
import { stats, pendingEvents, upcomingEvents } from '@/components/data.js';

const router = useRouter();

function navigateToEventsPage(event) {
  console.log(`Đang điều hướng để duyệt sự kiện: ${event.name}`);
  router.push('/admin/events');
}
</script>

<template>
  <div class="flex flex-col gap-6">

    <section>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white p-6 rounded-lg shadow flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">Tổng Sự Kiện</p>
            <p class="text-3xl font-bold text-gray-800">{{ stats.totalEvents }}</p>
          </div>
          <div class="bg-blue-100 text-blue-500 p-3 rounded-full">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">Sự Kiện Chờ Duyệt</p>
            <p class="text-3xl font-bold text-orange-500">{{ stats.pendingEvents }}</p>
          </div>
          <div class="bg-orange-100 text-orange-500 p-3 rounded-full">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">Tổng Người Dùng</p>
            <p class="text-3xl font-bold text-gray-800">{{ stats.totalUsers }}</p>
          </div>
          <div class="bg-green-100 text-green-500 p-3 rounded-full">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500">Doanh Thu (VND)</p>
            <p class="text-3xl font-bold text-gray-800">{{ stats.revenue.toLocaleString() }}</p>
          </div>
          <div class="bg-purple-100 text-purple-500 p-3 rounded-full">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 12v-4m0 4h.01M12 12a2 2 0 01-.01-4H12v4zm0 0a2 2 0 00.01 4H12v-4zm0 4c-1.11 0-2.08-.402-2.599-1M12 16v1m0-1v-.01"></path></svg>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white p-6 rounded-lg shadow">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-gray-800">Sự kiện mới đang chờ duyệt</h2>
        <a href="/admin/events" @click.prevent="router.push('/admin/events')" class="text-sm text-blue-500 hover:underline">Xem tất cả</a>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm">
          <tbody>
          <tr v-for="event in pendingEvents" :key="event.id"
              @click="navigateToEventsPage(event)"
              class="border-b hover:bg-gray-100 cursor-pointer">
            <td class="py-3 px-2">
              <p class="font-semibold">{{ event.name }}</p>
              <p class="text-xs text-gray-500">Người gửi: {{ event.requester }}</p>
            </td>
            <td class="py-3 px-2 text-gray-600 text-right">{{ event.date }}</td>
          </tr>
          <tr v-if="pendingEvents.length === 0">
            <td colspan="2" class="text-center py-4 text-gray-500">Không có sự kiện nào cần duyệt.</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">Sự kiện sắp diễn ra</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead class="bg-gray-50">
          <tr>
            <th class="text-left py-2 px-2 font-semibold text-gray-600">Tên Sự Kiện</th>
            <th class="text-left py-2 px-2 font-semibold text-gray-600">Thời Gian</th>
            <th class="text-left py-2 px-2 font-semibold text-gray-600">Địa Điểm</th>
            <th class="text-left py-2 px-2 font-semibold text-gray-600">Vé Đã Bán</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="event in upcomingEvents" :key="event.id" class="border-b hover:bg-gray-50">
            <td class="py-3 px-2 font-semibold">{{ event.name }}</td>
            <td class="py-3 px-2 text-gray-600">{{ event.date }}</td>
            <td class="py-3 px-2 text-gray-600">{{ event.location }}</td>
            <td class="py-3 px-2 font-bold">{{ event.ticketsSold }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>

  </div>
</template>