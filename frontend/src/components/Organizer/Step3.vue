<template>
  <div class="bg-white p-6 md:px-30 sm:p-8 rounded-xl border border-gray-200 shadow-lg space-y-8">
      <h1 class="text-2xl font-bold text-gray-900">Cài đặt sự kiện</h1>
    <section class="form-section bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-200 shadow-lg space-y-8 ">
      <label class="form-label block text-lg font-semibold mb-4 text-gray-900" for="custom-url">
        Link dẫn đến sự kiện
      </label>
      <label class="form-sublabel block mb-2 text-gray-700" for="custom-url">
        Tùy chỉnh đường dẫn:
      </label>
      <input
          type="text"
          id="custom-url"
          class="form-input max-w-md w-full p-3 rounded-md text-base bg-white border border-gray-300 text-gray-700 transition duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
          v-model="eventData.customUrl"
      >
      <p class="url-preview mt-3 text-gray-500">
        Đường dẫn sự kiện của bạn là: <a href="#" class="text-purple-600 font-medium hover:underline">{{ fullEventUrl }}</a>
      </p>


    <section class="form-section">
      <label class="form-label block text-lg font-semibold mb-4 text-gray-900">
        Quyền riêng tư sự kiện
      </label>
      <div class="radio-group space-y-3">
        <div class="radio-option flex items-center gap-3 cursor-pointer text-gray-700">
          <input
              type="radio"
              id="public-event"
              value="public"
              v-model="eventData.privacy"
              class="h-4 w-4 cursor-pointer text-purple-600 focus:ring-purple-500 border-gray-300"
          >
          <label for="public-event" class="cursor-pointer">Sự kiện mở cho mọi người</label>
        </div>
        <div class="radio-option flex items-center gap-3 cursor-pointer text-gray-700">
          <input
              type="radio"
              id="private-event"
              value="private"
              v-model="eventData.privacy"
              class="h-4 w-4 cursor-pointer text-purple-600 focus:ring-purple-500 border-gray-300"
          >
          <label for="private-event" class="cursor-pointer">Sự kiện dành riêng cho 1 nhóm</label>
        </div>
      </div>
    </section>

    <section class="form-section">
      <label class="form-label block text-lg font-semibold mb-4 text-gray-900" for="confirmation-message">
        Tin nhắn xác nhận cho người tham gia
      </label>
      <p class="form-description text-gray-500 mb-4 leading-relaxed">
        Tin nhắn xác nhận này sẽ gửi đến cho người tham gia sau khi đặt vé thành công.
      </p>
      <textarea
          id="confirmation-message"
          class="form-textarea w-full p-3 rounded-md text-base text-gray-700 transition duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 min-h-[150px] resize-y bg-blue-50 border-blue-200"
          v-model="eventData.confirmationMessage"
      ></textarea>
    </section>

    <section class="form-section">
      <label class="form-label block text-lg font-semibold mb-4 text-gray-900">
        Tạo bảng câu hỏi cho người tham gia
      </label>
      <p class="form-description text-gray-500 mb-4 leading-relaxed">
        Tixflow giúp bạn tạo câu hỏi với 3 mẫu :<br>
        1. Điền câu trả lời<br>
        2. Chọn 1 câu trả lời<br>
        3. Chọn nhiều câu trả lời
      </p>
      <div class="checkbox-option flex items-center gap-3 cursor-pointer text-gray-700">
        <input
            type="checkbox"
            id="enable-questions"
            v-model="eventData.enableQuestions"
            class="h-4 w-4 cursor-pointer text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
        >
        <label for="enable-questions" class="cursor-pointer">Mở chức năng này (tạo câu hỏi ở bước sau)</label>
      </div>
    </section>
    </section>
  </div>


</template>

<script setup>
import { ref, computed } from 'vue';

const eventData = ref({
  customUrl: 'sukienhottiktok-2005',
  privacy: 'public',
  confirmationMessage: '',
  enableQuestions: false
});

const fullEventUrl = computed(() => {
  return `https://tixflow.vn/${eventData.value.customUrl}`;
});
</script>