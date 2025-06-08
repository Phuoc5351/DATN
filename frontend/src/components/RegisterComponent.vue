<template>
  <div class="bg-white min-h-screen lg:bg-gray-100 lg:flex lg:items-center lg:justify-center lg:p-8">

    <div class="lg:bg-white lg:w-full lg:max-w-screen-xl lg:rounded-2xl lg:shadow-xl lg:overflow-hidden">

      <div class="flex flex-col-reverse lg:flex-row">

        <div class="flex flex-1 flex-col justify-center items-center p-6 sm:p-8 lg:p-20 xl:p-24 lg:w-1/2">
          <div class="w-full max-w-sm">

            <div class="text-center lg:text-left">
              <h2 class="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Tạo tài khoản</h2>
            </div>

            <div class="mt-8 space-y-6">
              <div>
                <a href="#" class="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 lg:py-4">
                  <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  <span>Sign in with Google</span>
                </a>
              </div>

              <div class="relative">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="bg-white px-2 text-gray-500">or</span>
                </div>
              </div>

              <form class="space-y-6" action="#" method="POST">
                <div>
                  <label for="name" class="block text-base font-medium leading-6 text-gray-900">Tên</label>
                  <div class="mt-2 relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                      </svg>
                    </div>
                    <input id="name" name="name" type="text" autocomplete="name" required placeholder="Điền họ tên của bạn" class="block w-full rounded-lg border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base lg:text-lg">
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-base font-medium leading-6 text-gray-900">Email</label>
                  <div class="mt-2 relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                      </svg>
                    </div>
                    <input id="email" name="email" type="email" autocomplete="email" required placeholder="Điền email của bạn" class="block w-full rounded-lg border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base lg:text-lg">
                  </div>
                </div>

                <div>
                  <label for="password" class="block text-base font-medium leading-6 text-gray-900">Mật khẩu</label>
                  <div class="mt-2 relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" /></svg>
                    </div>
                    <input id="password" name="password" type="password" required placeholder="Điền mật khẩu" class="block w-full rounded-lg border-0 py-3 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base lg:text-lg">
                    <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l-4.243-4.243" />
                      </svg>
                    </button>
                  </div>
                  <p class="mt-2 text-sm text-gray-500">Must be at least 8 characters.</p>
                </div>

                <div>
                  <label for="confirm-password" class="block text-base font-medium leading-6 text-gray-900">Confirm Password</label>
                  <div class="mt-2 relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" /></svg>
                    </div>
                    <input id="confirm-password" name="confirm-password" type="password" required placeholder="Confirm your password" class="block w-full rounded-lg border-0 py-3 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base lg:text-lg">
                    <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l-4.243-4.243" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div>
                  <button type="submit" class="flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-3 text-base lg:py-4 lg:text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Tạo tài khoản
                  </button>
                </div>
              </form>

              <p class="mt-8 text-center text-sm lg:text-base text-gray-600">
                Đã có tài khoản?
                <router-link to="/login" class="font-semibold text-indigo-600 hover:text-indigo-500">Log In</router-link>
              </p>
            </div>

          </div>
        </div>

        <div class="relative hidden lg:block lg:w-1/2">
          <img class="absolute inset-0 h-full w-full object-cover"
               src="https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
               alt="Abstract background image">
          <div class="relative h-full flex flex-col items-center justify-center text-white text-center px-8 bg-black bg-opacity-40">
            <h1 class="text-4xl lg:text-5xl font-bold tracking-tight">Tham Gia Ngay</h1>
            <p class="mt-4 text-lg lg:text-xl max-w-lg">Bắt đầu hành trình với TixFlow - Platform đặt vé tốt nhất.</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>