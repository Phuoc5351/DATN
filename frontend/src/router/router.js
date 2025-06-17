import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/LoginComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import HomeComponent from "@/components/HomeComponent.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";
import ResetPassword from '@/components/ResetPassword.vue'
import Details from '@/components/Details.vue'
import EventManagement from "@/components/AdminPage/EventManagement.vue";
import UserManagement from "@/components/AdminPage/UserManangement.vue";
import AdminDashboard from "@/components/AdminPage/AdminDashboard.vue";
import EventDetail  from "@/components/BookingPage/EventDetail.vue";
import CreateEvent from "@/components/Organizer/CreateEvent.vue";
import Step3 from "@/components/Organizer/Step3.vue";
import Step2 from "@/components/Organizer/Step2.vue";
import Step1 from "@/components/Organizer/Step1.vue";
import Step4 from "@/components/Organizer/Step4.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        meta: { layout: 'HomeLayout' }
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent,
        meta: { layout: 'HomeLayout' }
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterComponent,
        meta: { layout: 'HomeLayout' }
    },
    {
        path: '/forgetpassword',
        name: 'ForgetPassword',
        component: ForgotPassword,
        meta: { layout: 'HomeLayout' }
    },
    {
        path: '/resetpassword',
        name: 'ResetPassword',
        component: ResetPassword,
        meta: { layout: 'HomeLayout' }
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: Details,
        props: true,
        meta: { layout: 'HomeLayout' }
    },
    {
        path: '/admin',
        name: 'AdminDashboard',
        component: AdminDashboard,
        meta: { layout: 'AdminLayout' }
    },
    {
        path: '/admin/events',
        name: 'AdminEventManagement',
        component: EventManagement,
        meta: { layout: 'AdminLayout' }
    },
    {
        path: '/admin/users',
        name: 'UserManagement',
        component: UserManagement,
        meta: { layout: 'AdminLayout' }
    },
    {
        path: '/EventDetail',
        name: 'EventDetail',
        component: EventDetail,
        props: true,
        meta: { layout: 'BookingLayout' }
    },
    {
        path: '/CreateEvent',
        name: 'CreateEvent',
        component: CreateEvent,
        props: true,
        meta: { layout: 'BookingLayout' }
    },
    {
        path: '/create-event/:id', // <-- :id là placeholder
        component: CreateEvent,
        props: true,
        meta: { layout: 'BookingLayout' },
        children: [
            // Thay thế :id bằng ID thật khi điều hướng
            { path: 'step-1', name: 'Step1', component: Step1 }, // <-- name: 'Step1'
            { path: 'step-2', name: 'Step2', component: Step2 },
            { path: 'step-3', name: 'Step3', component: Step3 },
            { path: 'step-4', name: 'Step4', component: Step4 },
        ]
    },
    {
        path: '/CreateEvent',
        redirect: to => {
            // Logic tạo sự kiện mới sẽ được xử lý trong component hoặc store
            // Ở đây chỉ là một placeholder, logic thật sẽ nằm ở nơi gọi
            return { path: '/CreateEvent/:id' }; // Hoặc trang dashboard
        }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes, // <- dùng biến routes đã khai báo ở trên
    scrollBehavior(to, from, savedPosition) {

        return { top: 0 }
    }
});

export default router;
