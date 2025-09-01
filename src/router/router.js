import { createRouter, createWebHistory } from 'vue-router';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import GamesList from '../components/GameList/GamesList.vue';
import Profile from '../components/Profile.vue';

const routes = [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/', component: GamesList }, // Главная страница
    {path: '/profile', component: Profile}
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router