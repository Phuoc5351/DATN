// src/components/data.js
import { ref, computed } from 'vue';
import router from '@/router/router';

export const events = ref([
    {
        id: 1,
        name: 'BLACKPINK THE VIRTUAL',
        location: 'Trực tuyến trong PUBG',
        time: '22-24 & 29-31/7/2022',
        submitDate: '2022-07-22',
        price: 'Từ 500.000đ',
        image: bpImage,
        description: 'Chào mừng bạn đến với sự kiện BLACKPINK THE VIRTUAL! Đây là một trải nghiệm âm nhạc độc đáo, đưa bạn vào thế giới ảo của PUBG MOBILE cùng nhóm nhạc nữ toàn cầu BLACKPINK. Bạn sẽ có cơ hội tham gia vào các buổi hòa nhạc ảo hoành tráng, tương tác với các thành viên và khám하거나 những nội dung độc quyền chưa từng được công bố. Sự kiện hứa hẹn mang đến những màn trình diễn đỉnh cao, hiệu ứng hình ảnh sống động và âm thanh chân thực, phá vỡ mọi giới hạn của một buổi concert truyền thống. Hãy sẵn sàng hòa mình vào không khí sôi động, kết nối với cộng đồng BLINKs trên toàn thế giới và tạo nên những kỷ niệm khó quên. Đừng bỏ lỡ cơ hội trở thành một phần của lịch sử âm nhạc ảo này! Sự kiện cũng sẽ có các mini-game và phần thưởng đặc biệt dành cho những người tham gia may mắn. Hãy chắc chắn rằng bạn đã cập nhật phiên bản PUBG MOBILE MOBILE mới nhất để có trải nghiệm tốt nhất. Chúng tôi rất mong được gặp bạn tại BLACKPINK THE VIRTUAL!',
        endsIn: { days: 15, hours: 6, minutes: 35, seconds: 3 },
        requester: 'YG Entertainment',
        status: 'approved',
        featured: true
    },
    {
        id: 2,
        name: 'Sự kiện EDM 2025',
        location: 'SVĐ Quốc Gia Mỹ Đình',
        submitDate: '2025-02-10',
        time: '21-22/8/2025',
        date: '2025-08-20',
        price: 'Từ 800.000đ',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?...',
        description: 'Chào mừng bạn đến với sự kiện BLACKPINK THE VIRTUAL! Đây là một trải nghiệm âm nhạc độc đáo, đưa bạn vào thế giới ảo của PUBG MOBILE cùng nhóm nhạc nữ toàn cầu BLACKPINK. Bạn sẽ có cơ hội tham gia vào các buổi hòa nhạc ảo hoành tráng, tương tác với các thành viên và khám하거나 những nội dung độc quyền chưa từng được công bố. Sự kiện hứa hẹn mang đến những màn trình diễn đỉnh cao, hiệu ứng hình ảnh sống động và âm thanh chân thực, phá vỡ mọi giới hạn của một buổi concert truyền thống. Hãy sẵn sàng hòa mình vào không khí sôi động, kết nối với cộng đồng BLINKs trên toàn thế giới và tạo nên những kỷ niệm khó quên. Đừng bỏ lỡ cơ hội trở thành một phần của lịch sử âm nhạc ảo này! Sự kiện cũng sẽ có các mini-game và phần thưởng đặc biệt dành cho những người tham gia may mắn. Hãy chắc chắn rằng bạn đã cập nhật phiên bản PUBG MOBILE MOBILE mới nhất để có trải nghiệm tốt nhất. Chúng tôi rất mong được gặp bạn tại BLACKPINK THE VIRTUAL!',
        endsIn: { days: 3, hours: 12, minutes: 50, seconds: 10 },
        requester: 'EDM Nation',
        status: 'approved',
        featured: true
    },
    {
        id: 3,
        name: 'Sự kiện E',
        location: 'SVĐ Quân Khu 7',
        time: '20-22/8/2025',
        submitDate: '2025-08-20',
        price: 'Từ 800.000đ',
        image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?...',
        description: 'Chào mừng bạn đến với sự kiện BLACKPINK THE VIRTUAL! Đây là một trải nghiệm âm nhạc độc đáo, đưa bạn vào thế giới ảo của PUBG MOBILE cùng nhóm nhạc nữ toàn cầu BLACKPINK. Bạn sẽ có cơ hội tham gia vào các buổi hòa nhạc ảo hoành tráng, tương tác với các thành viên và khám하거나 những nội dung độc quyền chưa từng được công bố. Sự kiện hứa hẹn mang đến những màn trình diễn đỉnh cao, hiệu ứng hình ảnh sống động và âm thanh chân thực, phá vỡ mọi giới hạn của một buổi concert truyền thống. Hãy sẵn sàng hòa mình vào không khí sôi động, kết nối với cộng đồng BLINKs trên toàn thế giới và tạo nên những kỷ niệm khó quên. Đừng bỏ lỡ cơ hội trở thành một phần của lịch sử âm nhạc ảo này! Sự kiện cũng sẽ có các mini-game và phần thưởng đặc biệt dành cho những người tham gia may mắn. Hãy chắc chắn rằng bạn đã cập nhật phiên bản PUBG MOBILE MOBILE mới nhất để có trải nghiệm tốt nhất. Chúng tôi rất mong được gặp bạn tại BLACKPINK THE VIRTUAL!',
        endsIn: { days: 3, hours: 12, minutes: 50, seconds: 10 },
        requester: 'E Productions',
        status: 'approved',
        featured: true
    },
    {
        id: 4,
        name: 'Sự kiện C',
        location: 'SVĐ Phú Thọ',
        time: '20-22/8/2025',
        submitDate: '2025-08-20',
        price: 'Từ 800.000đ',
        image: 'https://addevent.vn/wp-content/uploads/2024/06/concert-1.jpg',
        description: 'Chào mừng bạn đến với sự kiện BLACKPINK THE VIRTUAL! Đây là một trải nghiệm âm nhạc độc đáo, đưa bạn vào thế giới ảo của PUBG MOBILE cùng nhóm nhạc nữ toàn cầu BLACKPINK. Bạn sẽ có cơ hội tham gia vào các buổi hòa nhạc ảo hoành tráng, tương tác với các thành viên và khám하거나 những nội dung độc quyền chưa từng được công bố. Sự kiện hứa hẹn mang đến những màn trình diễn đỉnh cao, hiệu ứng hình ảnh sống động và âm thanh chân thực, phá vỡ mọi giới hạn của một buổi concert truyền thống. Hãy sẵn sàng hòa mình vào không khí sôi động, kết nối với cộng đồng BLINKs trên toàn thế giới và tạo nên những kỷ niệm khó quên. Đừng bỏ lỡ cơ hội trở thành một phần của lịch sử âm nhạc ảo này! Sự kiện cũng sẽ có các mini-game và phần thưởng đặc biệt dành cho những người tham gia may mắn. Hãy chắc chắn rằng bạn đã cập nhật phiên bản PUBG MOBILE MOBILE mới nhất để có trải nghiệm tốt nhất. Chúng tôi rất mong được gặp bạn tại BLACKPINK THE VIRTUAL!',
        endsIn: { days: 3, hours: 12, minutes: 50, seconds: 10 },
        requester: 'C-Event Team',
        status: 'approved',
        featured: true
    },
    {
        id: 6,
        name: 'Sự kiện D',
        location: 'SVĐ Bình Thới',
        time: '20-22/8/2025',
        submitDate: '2025-08-20',
        price: 'Từ 800.000đ',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?...',
        description: 'Chào mừng bạn đến với sự kiện BLACKPINK THE VIRTUAL! Đây là một trải nghiệm âm nhạc độc đáo, đưa bạn vào thế giới ảo của PUBG MOBILE cùng nhóm nhạc nữ toàn cầu BLACKPINK. Bạn sẽ có cơ hội tham gia vào các buổi hòa nhạc ảo hoành tráng, tương tác với các thành viên và khám하거나 những nội dung độc quyền chưa từng được công bố. Sự kiện hứa hẹn mang đến những màn trình diễn đỉnh cao, hiệu ứng hình ảnh sống động và âm thanh chân thực, phá vỡ mọi giới hạn của một buổi concert truyền thống. Hãy sẵn sàng hòa mình vào không khí sôi động, kết nối với cộng đồng BLINKs trên toàn thế giới và tạo nên những kỷ niệm khó quên. Đừng bỏ lỡ cơ hội trở thành một phần của lịch sử âm nhạc ảo này! Sự kiện cũng sẽ có các mini-game và phần thưởng đặc biệt dành cho những người tham gia may mắn. Hãy chắc chắn rằng bạn đã cập nhật phiên bản PUBG MOBILE MOBILE mới nhất để có trải nghiệm tốt nhất. Chúng tôi rất mong được gặp bạn tại BLACKPINK THE VIRTUAL!',
        endsIn: { days: 3, hours: 12, minutes: 50, seconds: 10 },
        requester: 'D Agency',
        status: 'approved',
        featured: true
    },
    {
        id: 7,
        name: 'Lễ hội Ẩm thực Quốc tế',
        location: 'Công viên Lê Văn Tám',
        time: '5-7/9/2025',
        submitDate: '2025-08-25',
        price: 'Miễn phí',
        image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?...',
        description: 'Tham gia lễ hội ẩm thực quốc tế với hàng trăm món ăn đặc sắc từ khắp nơi trên thế giới. Trải nghiệm hương vị đa dạng, chương trình biểu diễn nghệ thuật và cuộc thi nấu ăn hấp dẫn.',
        endsIn: { days: 10, hours: 8, minutes: 30, seconds: 0 },
        requester: 'Taste Vietnam',
        status: 'pending',
        featured: false
    },
    {
        id: 8,
        name: 'Triển lãm Nghệ thuật Trẻ',
        location: 'Nhà Triển lãm Q1',
        time: '12-14/9/2025',
        submitDate: '2025-08-27',
        price: '100.000đ',
        image: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?...',
        description: 'Triển lãm quy tụ các tác phẩm sáng tạo của những nghệ sĩ trẻ tài năng trong nhiều lĩnh vực như hội họa, điêu khắc, nhiếp ảnh. Cơ hội kết nối và truyền cảm hứng nghệ thuật.',
        endsIn: { days: 12, hours: 5, minutes: 20, seconds: 15 },
        requester: 'ArtNow',
        status: 'rejected',
        featured: false
    },
    {
        id: 9,
        name: 'Hội thảo Công nghệ AI',
        location: 'Trung tâm Hội nghị Quốc gia',
        time: '18/9/2025',
        submitDate: '2025-09-01',
        price: '200.000đ',
        image: 'https://images.unsplash.com/photo-1581090700227-1e8e60c8e8f7?...',
        description: 'Khám phá xu hướng trí tuệ nhân tạo hiện nay cùng các chuyên gia đầu ngành. Nội dung bao gồm các chủ đề hot như AI trong giáo dục, y tế, sản xuất và đạo đức công nghệ.',
        endsIn: { days: 17, hours: 10, minutes: 0, seconds: 0 },
        requester: 'TechTalks Vietnam',
        status: 'pending',
        featured: false
    },
    {
        id: 10,
        name: 'Workshop Làm phim bằng điện thoại',
        location: 'Rạp Galaxy Nguyễn Du',
        time: '10/9/2025',
        submitDate: '2025-08-29',
        price: '50.000đ',
        image: 'https://images.unsplash.com/photo-1510070009289-b5bc34383727?...',
        description: 'Buổi hướng dẫn thực hành giúp bạn sử dụng điện thoại thông minh để quay và dựng phim chuyên nghiệp. Phù hợp với người mới bắt đầu đam mê sáng tạo nội dung video.',
        endsIn: { days: 9, hours: 6, minutes: 45, seconds: 30 },
        requester: 'Creative Hub',
        status: 'rejected',
        featured: false
    }
]);

export const pendingEvents = computed(() =>
    events.value.filter(e => e.status === 'pending')
);
export const upcomingEvents = computed(() =>
    events.value.filter(e => e.status === 'approved')
);

export function approveEvent(eventId) {
    const event = events.value.find(e => e.id === eventId); // tìm id
    if (event) event.status = 'approved';         // Nếu tìm thấy, đổi trạng thái của nó thành 'approved'
}
export function rejectEvent(eventId) {
    const event = events.value.find(e => e.id === eventId); // tìm id
    if (event) event.status = 'rejected';         // Nếu tìm thấy, đổi trạng thái của nó thành 'rejected'
}
export function toggleFeatured(eventId) {
    const event = events.value.find(e => e.id === eventId);
    if (event) {
        event.featured = !event.featured;
    }
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

