// src/components/data.js
import { ref, computed } from 'vue';
import router from '@/router/router';
//Khởi tạo dữ liệu giả events:
export const events = ref([
    { id: 1, name: 'Đêm nhạc Acoustic "Chuyện Chưa Kể"', requester: 'Sơn Tùng', date: '2025-06-10', status: 'pending', isFeatured: false },
    { id: 2, name: 'Hội thảo Công nghệ Vietnam Web Summit', requester: 'Marla Darsuz', date: '2025-06-15', status: 'approved', isFeatured: true },
    { id: 3, name: 'Workshop "Bí quyết Content Marketing"', requester: 'Mai Anh', date: '2025-06-09', status: 'pending', isFeatured: false },
    { id: 4, name: 'Triển lãm nghệ thuật "Mộng Mơ"', requester: 'Sara Dechicco', date: '2025-06-20', status: 'approved', isFeatured: false },
    { id: 5, name: 'Lễ hội ẩm thực đường phố', requester: 'Paul Ferrez', date: '2025-07-01', status: 'rejected', isFeatured: false },
    { id: 8, name: 'Giải chạy "Color Me Run 2025"', requester: 'Thanh Hằng', date: '2025-06-08', status: 'pending', isFeatured: false },
]);
export const pendingEvents = computed(() => events.value.filter(e => e.status === 'pending'));
export const upcomingEvents = computed(() => events.value.filter(e => e.status === 'approved'));

export function approveEvent(eventId) {
    const event = events.value.find(e => e.id === eventId); // tìm id
    if (event) event.status = 'approved';         // Nếu tìm thấy, đổi trạng thái của nó thành 'approved'


}
export function rejectEvent(eventId) {
    const event = events.value.find(e => e.id === eventId); // tìm id
    if (event) event.status = 'rejected';         // Nếu tìm thấy, đổi trạng thái của nó thành 'rejected'
}



// Khởi tạo dữ liệu giả cho users:
export const users = ref([
    { id: 1, name: 'Marla Darsuz', email: 'marla@example.com', role: 'Admin', joinDate: '2024-05-10', avatar: 'https://i.pravatar.cc/150?u=marla' },
    { id: 2, name: 'Jim Beam', email: 'jim@example.com', role: 'User', joinDate: '2024-03-22', avatar: 'https://i.pravatar.cc/150?u=jim' },
    { id: 3, name: 'Paul Ferrez', email: 'paul@example.com', role: 'User', joinDate: '2024-02-11', avatar: 'https://i.pravatar.cc/150?u=paul' },
    { id: 4, name: 'Sara Dechicco', email: 'sara@example.com', role: 'User', joinDate: '2023-12-30', avatar: 'https://i.pravatar.cc/150?u=sara' },
]);

export function editUser(userId) {
    alert(`Chỉnh sửa người dùng có ID: ${userId}`);
}
export function deleteUser(userId) {
    if (confirm(`Bạn có chắc chắn muốn xóa người dùng có ID: ${userId}?`)) {
        users.value = users.value.filter(u => u.id !== userId);
        alert(`Đã xóa người dùng có ID: ${userId}`);
    }
}



const adminUser = users.value.find(u => u.role === 'Admin'); //Lấy user có role là 'Admin' từ danh sách users.
export const currentUser = ref(adminUser || null);

export function logout() {
    currentUser.value = null;
    console.log("User logged out");
    router.push("/login");
}



export const stats = computed(() => {
    // const revenue = events.value
    //     .filter(e => e.status === 'approved' && e.ticketsSold)
    //     .reduce((sum, e) => sum + (e.ticketsSold * e.ticketPrices), 0);
    return {
        totalEvents: events.value.length,
        pendingEvents: pendingEvents.value.length,
        totalUsers: users.value.length,
        revenue: 0,
    }
});