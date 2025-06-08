<script setup>

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <AppHeader></AppHeader>

  <main>

    <router-view></router-view>
  </main>

  <AppFooter></AppFooter>
</template>