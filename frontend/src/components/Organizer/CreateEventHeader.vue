<template>
  <header class="event-header-container fixed">
    <div class="top-bar">
      <div class="actions-group">
        <button class="create-event-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Tạo sự kiện
        </button>

        <div
            class="account-dropdown"
            @mouseover="isDropdownVisible = true"
            @mouseleave="isDropdownVisible = false"
        >
          <button class="account-trigger">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span>Tài khoản</span>
          </button>

          <transition name="fade">
            <div v-if="isDropdownVisible" class="dropdown-menu">
              <a href="#" class="dropdown-item">Vé đã mua</a>
              <a href="#" class="dropdown-item">Sự kiện của tôi</a>
              <a href="#" class="dropdown-item">Tài khoản của tôi</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">Đăng xuất</a>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div class="stepper-bar">
      <div class="stepper-container">
        <div class="steps">
          <div class="step" :class="{ active: currentStep >= 1 }">
            <div class="step-number">1</div>
            <div class="step-label">Thông tin sự kiện</div>
          </div>
          <div class="step" :class="{ active: currentStep >= 2 }">
            <div class="step-number">2</div>
            <div class="step-label">Thời gian & Loại vé</div>
          </div>
          <div class="step" :class="{ active: currentStep >= 3 }">
            <div class="step-number">3</div>
            <div class="step-label">Cài đặt</div>
          </div>
          <div class="step" :class="{ active: currentStep >= 4 }">
            <div class="step-number">4</div>
            <div class="step-label">Thông tin thanh toán</div>
          </div>
        </div>
        <div class="progress-track">
          <div class="progress-bar" :style="{ width: progressBarWidth }"></div>
        </div>
      </div>
      <div class="navigation-buttons">
        <button class="save-button">Lưu</button>
        <button class="continue-button">Tiếp tục</button>
      </div>
    </div>
  </header>
</template>

<script setup>
// PHẦN SCRIPT KHÔNG CÓ GÌ THAY ĐỔI
import { ref, computed } from 'vue';

const props = defineProps({
  currentStep: {
    type: Number,
    required: true,
    default: 1
  }
});

const isDropdownVisible = ref(false);

const progressBarWidth = computed(() => {
  if (props.currentStep <= 1) {
    return '12.5%';
  }
  const percentage = ((props.currentStep - 1) / 3) * 75 + 12.5;
  return `${Math.min(percentage, 100)}%`;
});
</script>

<style scoped>
/* CSS cũ giữ nguyên */
.event-header-container {
  background-color: #ffffff;
  color: #333333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 0 2rem;
  border-bottom: 1px solid #e0e0e0;
}

/* ... Toàn bộ CSS cũ của bạn ở đây ... */

/* --- Top Bar --- */
.top-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e0e0e0; /* THAY ĐỔI: viền xám nhạt */
}

.actions-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Nút "Tạo sự kiện" màu xanh có thể giữ nguyên vì là nút hành động chính */
.create-event-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #2ed573;
  color: #1c1d1f;
  font-weight: 600;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.create-event-button:hover {
  background-color: #28b865;
}

/* --- Dropdown Tài khoản --- */
.account-dropdown {
  position: relative;
}

.account-trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #333333; /* THAY ĐỔI: Chữ đen */
  font-size: 1rem;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 150%;
  right: 0;
  background-color: #ffffff; /* THAY ĐỔI: Nền trắng */
  border: 1px solid #e0e0e0; /* THAY ĐỔI: Viền xám nhạt */
  border-radius: 8px;
  width: 200px;
  padding: 0.5rem 0;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1); /* THAY ĐỔI: Bóng mờ nhạt hơn */
  z-index: 1000;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  color: #333333; /* THAY ĐỔI: Chữ đen */
  text-decoration: none;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: #f8f9fa; /* THAY ĐỔI: Nền xám rất nhạt khi hover */
}

.dropdown-divider {
  height: 1px;
  background-color: #e0e0e0; /* THAY ĐỔI: Viền xám nhạt */
  margin: 0.5rem 0;
}

/* --- Stepper Bar --- */
.stepper-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.stepper-container {
  position: relative;
  flex-grow: 1;
}

.steps {
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
}

.step {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #6c757d; /* THAY ĐỔI: Chữ xám cho các bước chưa active */
  transition: color 0.3s;
}

.step.active {
  color: #333333; /* THAY ĐỔI: Chữ đen đậm cho bước active */
  font-weight: 600;
}

.step-number {
  width: 28px;
  height: 28px;
  border: 2px solid #adb5bd; /* THAY ĐỔI: Viền xám */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  transition: border-color 0.3s, color 0.3s;
}

.step.active .step-number {
  border-color: #333333; /* THAY ĐỔI: Viền đen cho bước active */
  color: #333333; /* THAY ĐỔI: Chữ đen */
}

.progress-track {
  position: absolute;
  bottom: -17px;
  left: 5%;
  right: 5%;
  height: 4px;
  background-color: #e9ecef; /* THAY ĐỔI: Nền xám nhạt cho thanh tiến trình */
  border-radius: 2px;
}

/* Màu xanh của thanh tiến trình có thể giữ lại để tạo điểm nhấn */
.progress-bar {
  height: 100%;
  background-color: #2ed573;
  border-radius: 2px;
  transition: width 0.4s ease-in-out;
}


/* --- Navigation Buttons --- */
.navigation-buttons {
  display: flex;
  gap: 0.75rem;
  margin-left: 2rem;
}
.save-button, .continue-button {
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.save-button {
  background-color: #ffffff; /* THAY ĐỔI: Nền trắng */
  color: #333333; /* THAY ĐỔI: Chữ đen */
  border: 1px solid #ced4da; /* THAY ĐỔI: Viền xám */
}
.save-button:hover {
  background-color: #f8f9fa; /* THAY ĐỔI: Nền xám nhạt khi hover */
}

/* Nút "Tiếp tục" màu xanh có thể giữ lại */
.continue-button {
  background-color: #2ed573;
  color: #1c1d1f;
  border: 1px solid #2ed573;
}
.continue-button:hover {
  background-color: #28b865;
  border-color: #28b865;
}

/* Transition cho dropdown */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* === PHẦN THÊM MỚI ĐỂ FIX LỖI === */
.event-header-container.fixed {
  position: fixed;
  top: 0;
  /* Đặt vị trí bên trái bằng đúng độ rộng của sidebar (280px) */
  left: 280px;
  right: 0;
  z-index: 1000;

  /* Ghi đè lại padding để nó căn đều trong không gian mới */
  padding: 0 2rem;

  /* Ghi đè lại width để nó không bị co lại */
  width: calc(100% - 280px);
}

</style>