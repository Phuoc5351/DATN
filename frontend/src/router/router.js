import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/LoginComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import HomeComponent from "@/components/HomeComponent.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";
import ResetPassword from '@/components/ResetPassword.vue'
import Details from '@/components/Details.vue'
import EventManagement from "@/components/EventManagement.vue";
import UserManagement from "@/components/UserManangement.vue";
import AdminDashboard from "@/components/AdminDashboard.vue";
import EventDetail  from "@/components/EventDetail.vue";
import BookingLayout from "@/components/layout/BookingLayout.vue";
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
        meta: { layout: 'BookingLayout' } // <--- Thay đổi layout ở đây
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
