<script setup>
import Sidebar from '@/components/AdminPage/SideBar.vue';
import TopNav from '@/components/AdminPage/TopNav.vue';
</script>

<template>
  <div class="flex h-screen w-screen bg-gray-100">

    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">

      <TopNav />

      <main class="flex-1 overflow-y-auto p-4">
        <router-view></router-view>
      </main>

    </div>
  </div>
</template>