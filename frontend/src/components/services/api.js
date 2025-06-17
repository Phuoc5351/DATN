// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api', // URL backend của bạn
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    // Tạo sự kiện nháp mới
    createEvent() {
        return apiClient.post('/events');
    },
    // Lấy dữ liệu sự kiện
    getEvent(id) {
        return apiClient.get(`/events/${id}`);
    },
    // Cập nhật sự kiện
    updateEvent(id, eventData) {
        // Chuyển đổi tên thuộc tính từ camelCase (JS) sang snake_case (Java/DTO)
        const payload = {
            eventName: eventData.event_name,
            eventType: eventData.event_type,
            locationType: eventData.location_type,
            venueName: eventData.venue_name,
            province: eventData.province,
            district: eventData.district,
            description: eventData.description,
            organizerName: eventData.organizer_name,
            organizerInfo: eventData.organizer_info,
            sessions: eventData.sessions,
            customUrl: eventData.custom_url,
            privacy: eventData.privacy,
            confirmationMessage: eventData.confirmation_message,
            enableQuestions: eventData.enable_questions,
        };
        return apiClient.put(`/events/${id}`, payload);
    },
    // (Tùy chọn) Public sự kiện
    publishEvent(id) {
        // Bạn cần tạo API endpoint này ở backend
        // return apiClient.put(`/events/${id}/publish`);
    }
};