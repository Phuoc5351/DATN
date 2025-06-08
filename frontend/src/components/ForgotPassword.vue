<template>
  <div class="bg-white min-h-screen lg:bg-gray-100 lg:flex lg:items-center lg:justify-center lg:p-8">
    <transition
        name="slide-fade"
        appear
        enter-active-class="transform transition duration-500"
        enter-from-class="opacity-0 translate-y-10"
        enter-to-class="opacity-100 translate-y-0"
    >
      <div
          v-show="showForm"
          class="lg:bg-white lg:w-full lg:max-w-screen-xl lg:rounded-2xl lg:shadow-xl lg:overflow-hidden"
      >
        <div class="flex">
          <!-- Form Section -->
          <div class="flex flex-1 flex-col justify-center items-center p-6 sm:p-8 lg:p-20 xl:p-24 lg:w-1/2">
            <div class="w-full max-w-sm">
              <div class="flex items-center gap-2 mb-8">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/86168539c9e84124818960bfd3574041aeb444c7?placeholderIfAbsent=true"
                    class="w-10 aspect-square object-contain"
                    alt="TixFlow Logo"
                />
                <h2 class="text-3xl font-bold text-neutral-900">TixFlow</h2>
              </div>

              <!-- Nếu email chưa được gửi -->
              <div v-if="!isEmailSent">
                <div class="text-center lg:text-left">
                  <h3 class="text-2xl font-semibold text-gray-900">Quên mật khẩu</h3>
                  <p class="mt-4 text-sm text-gray-600">
                    Vui lòng điền email mà bạn đã sử dụng để đăng ký.<br />
                    Chúng tôi sẽ gửi cho bạn một email để thay đổi mật khẩu.
                  </p>
                </div>

                <form @submit.prevent="handleSubmit" class="mt-10 space-y-6 text-sm">
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                      <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0205d2015844df91ceed35fa841f027bfc4cc2b5?placeholderIfAbsent=true"
                          class ="w-5 h-5"
                          alt="Email icon"
                      />
                    </div>
                    <input
                        type="email"
                        v-model="email"
                        required
                        placeholder="elnazbolkhari@gmail.com"
                        class="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                    />
                  </div>

                  <button
                      type="submit"
                      class="w-full py-3 text-white text-sm font-semibold rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200"
                      :disabled="isLoading"
                  >
                    {{ isLoading ? 'Đang gửi...' : 'Gửi' }}
                  </button>

                  <router-link
                      to="/resetpassword"
                      class="block text-center text-sm text-indigo-600 hover:underline mt-4"
                  >
                    Quay lại trang đăng nhập
                  </router-link>
                </form>
              </div>

              <!-- Nếu đã gửi email -->
              <div v-else class="text-center">
                <h3 class="text-2xl font-semibold text-gray-900">Quên mật khẩu</h3>
                <p class="mt-4 text-sm text-gray-600">
                  Đường link để thay đổi mật khẩu đã được gửi đến email:<br />
                  <strong>{{ email }}</strong><br />
                  Nếu như bạn không nhận được email thì vui lòng kiểm tra trong thư rác hoặc thử lại sau vài phút.
                </p>


                </div><div class="mt-8 space-y-3 text-sm">
                <button
                    @click="handleSubmit"
                    class="w-full py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
                >
                  Gửi lại
                </button>

              <button
                  @click="isEmailSent = false"
                  class="block w-full text-indigo-600 hover:underline"
              >
                Quay lại
              </button>


              <button
                    @click="() => { isEmailSent = false; email = '' }"
                    class="block w-full text-indigo-600 hover:underline"
                >
                  Thử lại với một email khác
                </button>
              </div>
            </div>
          </div>

          <!-- Background Image Section -->
          <div class="relative hidden lg:block lg:w-1/2">
            <img
                class="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                alt="Abstract background image"
            />
            <div class="relative h-full flex flex-col items-center justify-center text-white text-center px-8 bg-black bg-opacity-40">
              <h1 class="text-4xl lg:text-5xl font-bold">Reset Your Password</h1>
              <p class="mt-4 text-lg max-w-md">Nhanh chóng khôi phục quyền truy cập vào tài khoản TixFlow.</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const email = ref('')
const isLoading = ref(false)
const showForm = ref(false)
const isEmailSent = ref(false)

onMounted(() => {
  setTimeout(() => {
    showForm.value = true
  }, 50)

  // Lắng nghe nút "Back" trình duyệt
  window.addEventListener('popstate', handlePopState)
})

onBeforeUnmount(() => {
  window.removeEventListener('popstate', handlePopState)
})

const handleSubmit = async () => {
  if (!email.value) return
  isLoading.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Email reset gửi đến:', email.value)

    // Đẩy state mới vào history khi email gửi thành công
    history.pushState({ forgotSent: true }, '')
    isEmailSent.value = true
  } catch (err) {
    console.error('Lỗi gửi email:', err)
  } finally {
    isLoading.value = false
  }
}

const handlePopState = (event) => {
  // Nếu quay lại từ trạng thái đã gửi => trở về form nhập
  if (isEmailSent.value) {
    isEmailSent.value = false
    history.replaceState({}, '') // làm sạch state sau khi quay lại
  }
}

</script>
