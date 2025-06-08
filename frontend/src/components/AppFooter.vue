<template>
  <footer class="bg-white border-t border-gray-200">
    <div class="container mx-auto px-6 py-12 lg:px-8 lg:py-16">

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

        <div class="sm:col-span-2 md:col-span-4 lg:col-span-2">
          <a href="#" class="flex items-center space-x-2 mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black h-8 w-8">
              <path d="M9 20V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M18 13V11C18 8.23858 15.7614 6 13 6H11C8.23858 6 6 8.23858 6 11V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M12 2L12 3M12 21L12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M4 12L2 12M22 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M19.071 4.92896L18.364 5.63607" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M5.63601 18.364L4.9289 19.0711" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M19.0711 19.0711L18.364 18.364" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M5.63601 5.63607L4.9289 4.92896" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span class="text-2xl font-bold tracking-wider text-black">TixFlow</span>
          </a>
          <p class="text-gray-600 leading-relaxed max-w-md mt-4">
            Nền tảng bán vé toàn cầu cho các trải nghiệm trực tiếp, giúp bạn khám phá và tham dự các sự kiện yêu thích.
          </p>
        </div>

        <div>
          <h3 class="font-semibold text-lg text-gray-800 mb-4">TixFlow</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">Về chúng tôi</a></li>
            <li><a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">Liên hệ</a></li>
            <li><a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg text-gray-800 mb-4">Help</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">Sự kiện đang diễn ra</a></li>
            <li><a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">Hỗ trợ tài khoản</a></li>
            <li><a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">Điều khoản</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg text-gray-800 mb-4">Legal</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">Chính sách bảo mật</a></li>
            <li><a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">Chính sách cookie</a></li>
            <li><a href="#" class="text-gray-600 hover:text-indigo-600 transition-colors">Điều khoản sử dụng</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-200 mt-12 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <h3 class="text-lg md:text-xl font-bold text-gray-900 text-center md:text-left">
          Cập nhật những sự kiện và buổi hòa nhạc mới nhất.
        </h3>
        <form class="relative w-full max-w-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" /><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" /></svg>
          </div>
          <input type="email" placeholder="Nhập email của bạn" class="w-full rounded-full border border-gray-300 bg-white py-3 pl-12 pr-16 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow">
          <button type="submit" class="absolute inset-y-0 right-0 flex items-center justify-center h-full w-14 group">
            <div class="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-700 transition-colors">
              <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </div>
          </button>
        </form>
      </div>

      <div class="border-t border-gray-200 mt-12 pt-8 flex flex-col-reverse md:flex-row justify-between items-center text-sm text-gray-500 gap-6">
        <p class="text-center md:text-left">&copy; 2025 TixFlow. All Rights Reserved.</p>
        <div class="flex items-center space-x-6">
          <a href="#" class="hover:text-gray-900">Terms</a>
          <a href="#" class="hover:text-gray-900">Privacy</a>
          <a href="#" class="hover:text-gray-900">Cookies</a>
        </div>
        <div class="flex items-center space-x-4">
          <a href="#" class="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085 4.93 4.93 0 004.6 3.42 9.86 9.86 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
          </a>
          <a href="#" class="h-8 w-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" /></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>