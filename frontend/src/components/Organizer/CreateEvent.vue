<template>
  <div class="organizer-layout">
    <aside class="sidebar dark-theme">
      <div class="sidebar-header">
        <div class="logo-icon-wrapper">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#2ED573"/>
            <path d="M30 50H70" stroke="white" stroke-width="8" stroke-linecap="round"/>
            <path d="M50 30V70" stroke="white" stroke-width="8" stroke-linecap="round"/>
          </svg>
        </div>
        <h1 class="sidebar-title">TixFlow</h1>
      </div>
      <nav class="sidebar-nav">
        <a href="#" class="sidebar-link active">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span>Sự kiện của tôi</span>
        </a>
        <a href="#" class="sidebar-link">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
          <span>Quản lý Báo cáo</span>
        </a>
        <a href="#" class="sidebar-link">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span>Điều khoản cho ban tổ chức</span>
        </a>
      </nav>
    </aside>

    <div class="main-panel">
      <CreateEventHeader :current-step="step" />

      <main class="content-area">
        <div class="form-card">
          <section class="form-section">
            <label class="form-label" for="custom-url">*Link dẫn đến sự kiện</label>
            <label class="form-sublabel" for="custom-url">*Tùy chỉnh đường dẫn:</label>
            <input type="text" id="custom-url" class="form-input" v-model="eventData.customUrl">
            <p class="url-preview">
              Đường dẫn sự kiện của bạn là: <a>{{ fullEventUrl }}</a>
            </p>
          </section>

          <section class="form-section">
            <label class="form-label">Quyền riêng tư sự kiện</label>
            <div class="radio-group">
              <div class="radio-option">
                <input type="radio" id="public-event" value="public" v-model="eventData.privacy">
                <label for="public-event">Sự kiện mở cho mọi người</label>
              </div>
              <div class="radio-option">
                <input type="radio" id="private-event" value="private" v-model="eventData.privacy">
                <label for="private-event">Sự kiện dành riêng cho 1 nhóm</label>
              </div>
            </div>
          </section>

          <section class="form-section">
            <label class="form-label" for="confirmation-message">Tin nhắn xác nhận cho người tham gia</label>
            <p class="form-description">Tin nhắn xác nhận này sẽ gửi đến cho người tham gia sau khi đặt vé thành công</p>
            <textarea id="confirmation-message" class="form-textarea" v-model="eventData.confirmationMessage"></textarea>
          </section>

          <section class="form-section">
            <label class="form-label">Tạo bảng câu hỏi cho người tham gia</label>
            <p class="form-description">
              Tixflow giúp bạn tạo câu hỏi với 3 mẫu :<br>
              1. Điền câu trả lời<br>
              2. Chọn 1 câu trả lời<br>
              3. Chọn nhiều câu trả lời
            </p>
            <div class="checkbox-option">
              <input type="checkbox" id="enable-questions" v-model="eventData.enableQuestions">
              <label for="enable-questions">Mở chức năng này (tạo câu hỏi ở bước sau)</label>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
// Script không có gì thay đổi
import { ref, computed } from 'vue';
import CreateEventHeader from '@/components/Organizer/CreateEventHeader.vue';

const step = ref(1);
const eventData = ref({
  customUrl: 'sukienhottiktok-2005',
  privacy: 'public',
  confirmationMessage: '',
  enableQuestions: false
});

const fullEventUrl = computed(() => {
  return `https://tixflow.vn/${eventData.value.customUrl}`;
});
</script>

<style scoped>
.organizer-layout {
  display: flex;
  height: 100vh;
}

/* --- Cột Trái: Sidebar (Không đổi) --- */
.sidebar.dark-theme {
  width: 280px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #252628 0%, #1C1D1F 100%);
  padding: 1.5rem 1rem;
  border-right: 1px solid #3a3b3d;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.sidebar-header { display: flex; align-items: center; gap: 0.75rem; padding: 0 0.5rem; }
.logo-icon-wrapper { width: 36px; height: 36px; }
.sidebar-title { font-size: 1.25rem; font-weight: 600; color: #ffffff; }
.sidebar-nav { display: flex; flex-direction: column; gap: 0.5rem; }
.sidebar-link { display: flex; align-items: center; gap: 1rem; text-decoration: none; color: #adb5bd; padding: 0.85rem 1rem; border-radius: 8px; font-weight: 500; transition: background-color 0.2s, color 0.2s; }
.sidebar-link .icon { width: 20px; height: 20px; stroke-width: 2; flex-shrink: 0; }
.sidebar-link:hover { background-color: rgba(255, 255, 255, 0.05); color: #ffffff; }
.sidebar-link.active { background-color: rgba(46, 213, 115, 0.15); color: #2ed573; font-weight: 600; }

/* --- Cột Phải: Panel chính --- */
.main-panel {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  /* CẬP NHẬT: Nền xám rất nhạt cho toàn bộ cột phải */
  background-color: #f8f9fa;
}

.content-area {
  padding: 2rem;
}

/* CẬP NHẬT: TOÀN BỘ CSS CHO FORM THEME SÁNG */
.form-card {
  background-color: #ffffff; /* Nền trắng cho card */
  padding: 2.5rem;
  border-radius: 8px;
  border: 1px solid #dee2e6; /* Viền xám nhạt */
  color: #343a40; /* Chữ đen/xám đậm */
}

.form-section {
  margin-bottom: 2.5rem;
}
.form-section:last-child {
  margin-bottom: 0;
}

.form-label {
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #212529; /* Chữ đen đậm */
}
.form-label[for="custom-url"]::before {
  content: '* ';
  color: #ff4d4f; /* Màu đỏ cho dấu sao bắt buộc */
}

.form-sublabel {
  display: block;
  margin-bottom: 0.5rem;
  color: #495057;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  background-color: #ffffff; /* Nền trắng */
  border: 1px solid #ced4da; /* Viền xám */
  color: #495057; /* Chữ xám đậm */
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus, .form-textarea:focus {
  border-color: #2ed573; /* Viền xanh khi focus */
  outline: none;
  box-shadow: 0 0 0 3px rgba(46, 213, 115, 0.15);
}

.form-input {
  max-width: 400px;
}

.url-preview {
  margin-top: 0.75rem;
  color: #6c757d; /* Chữ xám nhạt hơn */
}
.url-preview a {
  color: #2ed573;
  text-decoration: none;
  font-weight: 500;
}

.radio-group, .checkbox-option {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.radio-option, .checkbox-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: #495057;
}

input[type="radio"], input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.form-description {
  color: #6c757d;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

/* Đặc biệt cho textarea trong hình có nền xanh nhạt */
#confirmation-message {
  background-color: #eef7ff;
  border-color: #cce4ff;
}
</style>