<template>
  <div class="flex h-screen bg-gray-50 font-sans">

    <aside class="w-280px flex-shrink-0 bg-black text-white flex flex-col gap-8 p-6 px-4 border-r border-gray-700">
      <div class="flex items-center gap-3 px-2">
        <div class="w-9 h-9">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#2ED573"/>
            <path d="M30 50H70" stroke="white" stroke-width="8" stroke-linecap="round"/>
            <path d="M50 30V70" stroke="white" stroke-width="8" stroke-linecap="round"/>
          </svg>
        </div>
        <h1 class="text-xl font-semibold text-white">TixFlow</h1>
      </div>

      <nav class="flex flex-col gap-2">
        <a href="#" class="flex items-center gap-4 py-3 px-4 rounded-lg font-medium text-brand-green bg-purple-600">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span>Sự kiện của tôi</span>
        </a>
        <a href="#" class="flex items-center gap-4 py-3 px-4 rounded-lg font-medium hover:bg-white/5 hover:text-white transition-colors">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
          <span>Quản lý Báo cáo</span>
        </a>
        <a href="#" class="flex items-center gap-4 py-3 px-4 rounded-lg font-medium hover:bg-white/5 hover:text-white transition-colors">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span>Điều khoản cho ban tổ chức</span>
        </a>
      </nav>
    </aside>

    <div class="flex-1 flex flex-col overflow-y-auto">
      <CreateEventHeader :current-step="currentStep"
                         class="sticky top-0 z-40"/>

      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

  </div>
</template>

<script setup>
// Imports
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import CreateEventHeader from './CreateEventHeader.vue'; // Component header
const route = useRoute();
const currentStep = computed(() => {
  const stepName = route.name;
  if (typeof stepName === 'string' && stepName.startsWith('Step')) {
    return parseInt(stepName.replace('Step', ''));
  }
  return 1;
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>