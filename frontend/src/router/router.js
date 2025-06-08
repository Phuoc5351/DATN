import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/LoginComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import HomeComponent from "@/components/HomeComponent.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";
import ResetPassword from '@/components/ResetPassword.vue'
import Details from '@/components/Details.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent,
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterComponent,
    },
    {
        path: '/forgetpassword',
        name: 'Forget Password',
        component: ForgotPassword,
    },
    {
        path: '/resetpassword',
        name: 'Reset Password',
        component: ResetPassword,
    },
    {
        path: '/details',
        name: 'Details',
        component: Details,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes, // <- dùng biến routes đã khai báo ở trên
    scrollBehavior(to, from, savedPosition) {

        return { top: 0 }
    }
});

export default router;
