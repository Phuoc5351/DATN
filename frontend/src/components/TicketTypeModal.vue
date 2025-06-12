<template>
  <div @click.self="$emit('close')" class="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">

    <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8 transform transition-all">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Tạo loại vé mới</h2>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-1">Tên loại vé</label>
          <input type="text" v-model="newTicket.name" class="w-full p-3 bg-blue-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Ví dụ: Vé VIP">
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-1">Giá vé</label>
            <input type="number" v-model="newTicket.price" class="w-full p-3 bg-blue-50 border border-gray-300 rounded-md" placeholder="0">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-1">Tổng số lượng</label>
            <input type="number" v-model="newTicket.totalQuantity" class="w-full p-3 bg-blue-50 border border-gray-300 rounded-md" placeholder="0">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-1">Tối thiểu/đơn</label>
            <input type="number" v-model="newTicket.minPerOrder" class="w-full p-3 bg-blue-50 border border-gray-300 rounded-md" placeholder="1">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-1">Tối đa/đơn</label>
            <input type="number" v-model="newTicket.maxPerOrder" class="w-full p-3 bg-blue-50 border border-gray-300 rounded-md" placeholder="10">
          </div>
        </div>

        <div>
          <h3 class="text-md font-bold text-gray-700 mb-2">Thời gian mở bán vé</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-1">Thời gian bắt đầu bán</label>
              <input type="datetime-local" v-model="newTicket.saleStartTime" class="w-full p-3 bg-blue-50 border border-gray-300 rounded-md">
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-1">Thời gian kết thúc bán</label>
              <input type="datetime-local" v-model="newTicket.saleEndTime" class="w-full p-3 bg-blue-50 border border-gray-300 rounded-md">
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 flex justify-end space-x-3">
        <button @click="$emit('close')" class="px-6 py-2 text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200">Hủy</button>
        <button @click="saveTicket" class="px-6 py-2 text-sm font-semibold text-white bg-blue-600 border border-blue-600 rounded-md shadow-sm hover:bg-blue-700">Lưu loại vé</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Định nghĩa các sự kiện mà component này có thể phát ra
const emit = defineEmits(['close', 'save']);

// Dữ liệu nội bộ cho form trong modal
const newTicket = ref({
  name: 'Vé thường',
  price: 0,
  totalQuantity: 100,
  minPerOrder: 1,
  maxPerOrder: 10,
  saleStartTime: '',
  saleEndTime: ''
});

// Khi nhấn nút Lưu, phát ra sự kiện 'save' và gửi dữ liệu vé mới về cho component cha
const saveTicket = () => {
  emit('save', { ...newTicket.value });
};
</script>