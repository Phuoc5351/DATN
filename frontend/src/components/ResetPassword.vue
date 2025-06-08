<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center p-6">
    <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
      <div class="flex items-center gap-2 justify-center mb-8">
        <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/86168539c9e84124818960bfd3574041aeb444c7?placeholderIfAbsent=true"
            class="w-10"
            alt="TixFlow Logo"
        />
        <h2 class="text-3xl font-bold text-neutral-900">TixFlow</h2>
      </div>

      <h3 class="text-xl font-semibold text-center text-gray-800 mb-6">
        Quên mật khẩu
      </h3>

      <form @submit.prevent="handleReset" class="space-y-4">
        <!-- New Password -->
        <div class="relative">
          <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              required
              placeholder="New Password"
              class="w-full rounded-md border border-gray-300 py-3 px-4 pr-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <button
              type="button"
              class="absolute inset-y-0 right-3 flex items-center text-gray-400"
              @click="showPassword = !showPassword"
          >
            <span v-if="showPassword">🙈</span>
            <span v-else>👁️</span>
          </button>
        </div>

        <!-- Confirm Password -->
        <div class="relative">
          <input
              type="password"
              v-model="confirmPassword"
              required
              placeholder="Re-enter Password"
              class="w-full rounded-md border border-gray-300 py-3 px-4 pr-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <button
              type="button"
              v-if="confirmPassword"
              class="absolute inset-y-0 right-3 flex items-center text-gray-400"
              @click="confirmPassword = ''"
          >
            ❌
          </button>
        </div>

        <!-- Submit -->
        <button
            type="submit"
            class="w-full mt-4 bg-indigo-700 hover:bg-indigo-600 text-white py-3 rounded-md font-semibold transition"
        >
          Thay đổi mật khẩu
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const token = route.query.token || ''
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)

const handleReset = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Mật khẩu không khớp.')
    return
  }

  try {
    // Giả lập gọi API reset password
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('Mật khẩu đã được cập nhật thành công!')
    router.push('/login')
  } catch (err) {
    console.error(err)
    alert('Có lỗi xảy ra. Vui lòng thử lại.')
  }
}
</script>
