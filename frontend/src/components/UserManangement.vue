<script setup>
import { users, editUser, deleteUser } from '@/components/data.js';
</script>

<template>
  <section class="flex flex-col flex-auto border-l p-4 sm:p-6 bg-gray-50 min-h-screen">
    <header class="mb-6">
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">Quản lý Người dùng</h1>
      <p class="text-gray-500 text-sm sm:text-base">Danh sách tài khoản người dùng trong hệ thống.</p>
    </header>

    <div class="flex justify-end mb-4">
      <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition">
        + Thêm người dùng mới
      </button>
    </div>

    <div class="overflow-x-auto shadow rounded-lg bg-white">
      <table class="hidden md:table w-full divide-y divide-gray-200">
        <thead class="bg-gray-100">
        <tr>
          <th class="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">Tên</th>
          <th class="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">Vai trò</th>
          <th class="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">Ngày tham gia</th>
          <th class="text-left px-6 py-3 text-sm font-semibold text-gray-600 uppercase">Hành động</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 text-gray-700">
        <tr v-if="users.length === 0">
          <td colspan="4" class="text-center py-6 text-gray-500">Không có người dùng nào.</td>
        </tr>
        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50 transition">
          <td class="px-6 py-4">
            <div class="flex items-center">
              <img class="w-10 h-10 rounded-full mr-4 object-cover border border-gray-200" :src="user.avatar" :alt="user.name">
              <div>
                <p class="font-medium text-gray-900">{{ user.name }}</p>
                <p class="text-sm text-gray-500">{{ user.email }}</p>
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
              <span
                  :class="{
                  'bg-red-100 text-red-700': user.role === 'Admin',
                  'bg-blue-100 text-blue-700': user.role === 'User'
                }"
                  class="px-3 py-1 text-xs font-semibold rounded-full"
              >
                {{ user.role }}
              </span>
          </td>
          <td class="px-6 py-4 text-sm text-gray-600">{{ user.joinDate }}</td>
          <td class="px-6 py-4">
            <button
                @click="editUser(user.id)"
                class="text-blue-600 hover:underline font-medium text-sm mr-4 transition"
            >
              Sửa
            </button>
            <button
                @click="deleteUser(user.id)"
                class="text-red-600 hover:underline font-medium text-sm transition"
            >
              Xóa
            </button>
          </td>
        </tr>
        </tbody>
      </table>

      <!-- Card layout cho mobile -->
      <div class="md:hidden divide-y divide-gray-100">
        <div v-if="users.length === 0" class="text-center py-6 text-gray-500">
          Không có người dùng nào.
        </div>
        <div
            v-for="user in users"
            :key="user.id"
            class="p-4 border-b hover:bg-gray-50 transition-colors"
        >
          <div class="flex items-center mb-2">
            <img class="w-12 h-12 rounded-full mr-4 object-cover border border-gray-200" :src="user.avatar" :alt="user.name">
            <div>
              <p class="font-medium text-gray-900 text-base">{{ user.name }}</p>
              <p class="text-sm text-gray-500">{{ user.email }}</p>
            </div>
          </div>
          <div class="text-sm text-gray-600 mb-1">
            <strong>Vai trò: </strong>
            <span
                :class="{
                'bg-red-100 text-red-700': user.role === 'Admin',
                'bg-blue-100 text-blue-700': user.role === 'User'
              }"
                class="inline-block px-2 py-0.5 text-xs font-semibold rounded-full"
            >
              {{ user.role }}
            </span>
          </div>
          <div class="text-sm text-gray-600 mb-2">
            <strong>Ngày tham gia:</strong> {{ user.joinDate }}
          </div>
          <div>
            <button
                @click="editUser(user.id)"
                class="text-blue-600 hover:underline text-sm font-medium mr-4 transition"
            >
              Sửa
            </button>
            <button
                @click="deleteUser(user.id)"
                class="text-red-600 hover:underline text-sm font-medium transition"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
