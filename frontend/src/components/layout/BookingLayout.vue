<template>
  <div class="no-header-footer-layout min-h-screen flex flex-col">
    <slot />
  </div>
</template>

<script setup>

</script>

<style scoped>
/* Bạn có thể thêm các kiểu dáng cơ bản cho layout này nếu cần, ví dụ màu nền */
.no-header-footer-layout {
  background-color: #f5f5f5; /* Ví dụ: màu nền nhẹ */
}
</style>