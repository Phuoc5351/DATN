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

import bpImage from '@/assets/BLACKPINK_The_Virtual_Banner.jpg'

export const eventsHomeDetails = [
    {
        id: 1,
        name: 'BLACKPINK THE VIRTUAL',
        location: 'Trực tuyến trong PUBG',
        time: '22-24 & 29-31/7/2022',
        price: 'Từ 500.000đ',
        image: bpImage,
        description: "Chào mừng bạn đến với sự kiện BLACKPINK THE VIRTUAL! Đây là một trải nghiệm âm nhạc độc đáo, đưa bạn vào thế giới ảo của PUBG MOBILE cùng nhóm nhạc nữ toàn cầu BLACKPINK. Bạn sẽ có cơ hội tham gia vào các buổi hòa nhạc ảo hoành tráng, tương tác với các thành viên và khám하거나 những nội dung độc quyền chưa từng được công bố. Sự kiện hứa hẹn mang đến những màn trình diễn đỉnh cao, hiệu ứng hình ảnh sống động và âm thanh chân thực, phá vỡ mọi giới hạn của một buổi concert truyền thống. Hãy sẵn sàng hòa mình vào không khí sôi động, kết nối với cộng đồng BLINKs trên toàn thế giới và tạo nên những kỷ niệm khó quên. Đừng bỏ lỡ cơ hội trở thành một phần của lịch sử âm nhạc ảo này! Sự kiện cũng sẽ có các mini-game và phần thưởng đặc biệt dành cho những người tham gia may mắn. Hãy chắc chắn rằng bạn đã cập nhật phiên bản PUBG MOBILE MOBILE mới nhất để có trải nghiệm tốt nhất. Chúng tôi rất mong được gặp bạn tại BLACKPINK THE VIRTUAL!\n ",
        endsIn: { days: 15, hours: 6, minutes: 35, seconds: 3 }
    },
    {
        id: 2,
        name: 'Sự kiện EDM 2025',
        location: 'SVĐ Quốc Gia Mỹ Đình',
        time: '20-22/8/2025',
        price: 'Từ 800.000đ',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description: "Chào mừng bạn đến với sự kiện EDM 2025, Đây là một trải nghiệm âm nhạc độc đáo, đưa bạn vào thế giới ảo của PUBG MOBILE cùng nhóm nhạc nữ toàn cầu BLACKPINK. Bạn sẽ có cơ hội tham gia vào các buổi hòa nhạc ảo hoành tráng, tương tác với các thành viên và khám하거나 những nội dung độc quyền chưa từng được công bố.",
        endsIn: { days: 3, hours: 12, minutes: 50, seconds: 10 }
    },
    {
        id: 3,
        name: 'Sự kiện E',
        location: 'SVĐ Quân Khu 7',
        time: '20-22/8/2025',
        price: 'Từ 800.000đ',
        image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1562&q=80',
        description: "Chào mừng bạn đến với sự kiện E 2025, Đây là một trải nghiệm âm nhạc độc đáo, đưa bạn vào thế giới ảo của PUBG MOBILE cùng nhóm nhạc nữ toàn cầu BLACKPINK. Bạn sẽ có cơ hội tham gia vào các buổi hòa nhạc ảo hoành tráng, tương tác với các thành viên và khám하거나 những nội dung độc quyền chưa từng được công bố.",
        endsIn: { days: 3, hours: 12, minutes: 50, seconds: 10 }
    },
    {
        id: 4,
        name: 'Sự kiện C',
        location: 'SVĐ Phú Thọ',
        time: '20-22/8/2025',
        price: 'Từ 800.000đ',
        image: 'https://addevent.vn/wp-content/uploads/2024/06/concert-1.jpg',
        description: "Chào mừng bạn đến với sự kiện C 2025, Đây là một trải nghiệm âm nhạc độc đáo, đưa bạn vào thế giới ảo của PUBG MOBILE cùng nhóm nhạc nữ toàn cầu BLACKPINK. Bạn sẽ có cơ hội tham gia vào các buổi hòa nhạc ảo hoành tráng, tương tác với các thành viên và khám하거나 những nội dung độc quyền chưa từng được công bố.",
        endsIn: { days: 3, hours: 12, minutes: 50, seconds: 10 }
    },
    {
        id: 6,
        name: 'Sự kiện D',
        location: 'SVĐ Bình Thới',
        time: '20-22/8/2025',
        price: 'Từ 800.000đ',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80\'',
        description: "Chào mừng bạn đến với sự kiện C 2025, Đây là một trải nghiệm âm nhạc độc đáo, đưa bạn vào thế giới ảo của PUBG MOBILE cùng nhóm nhạc nữ toàn cầu BLACKPINK. Bạn sẽ có cơ hội tham gia vào các buổi hòa nhạc ảo hoành tráng, tương tác với các thành viên và khám하거나 những nội dung độc quyền chưa từng được công bố.",
        endsIn: { days: 3, hours: 12, minutes: 50, seconds: 10 }
    }
]