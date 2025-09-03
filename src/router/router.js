import { createRouter, createWebHistory } from 'vue-router';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import GamesList from '../components/GameList/GamesList.vue';
import Profile from '../components/Profile.vue';

const routes = [
    {
        path: '/register',
        component: Register,
        meta: { requiresAuth: false }
    },
    {
        path: '/login',
        component: Login,
        meta: { requiresAuth: false }
    },
    {
        path: '/',
        component: GamesList,
        meta: { requiresAuth: false }
    },
    {
        path: '/profile',
        component: Profile,
        meta: { requiresAuth: true } 
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router