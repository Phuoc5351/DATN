<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import HomeLayout from '@/components/layout/HomeLayout.vue';
import AdminLayout from '@/components/layout/AdminLayout.vue';

const route = useRoute();

const layouts = {
  HomeLayout,
  AdminLayout
};

const currentLayout = computed(() => {
  const layoutName = route.meta.layout || 'HomeLayout'; // Mặc định là HomeLayout
  return layouts[layoutName] || HomeLayout;
});
</script>

<template>
  <!-- Hiển thị layout tương ứng -->
  <component :is="currentLayout">
    <router-view />
  </component>
</template>