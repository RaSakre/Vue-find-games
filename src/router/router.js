import { createRouter, createWebHistory } from 'vue-router';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import GamesList from '../components/GamesList.vue';

const routes = [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/', component: GamesList } // ← Главная страница
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router