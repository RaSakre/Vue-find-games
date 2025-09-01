<template>
    <header class="header mb-5">
        <div class="container">
            <div class="header__content">
                <router-link to="/" class="header__logo">
                    <img :src="logo" alt="logo">
                </router-link>
                <form @submit.prevent="handleSubmit(input)" action="" class="header__form">
                    <input v-model="input" type="text" placeholder="Type your game in English" class="header__input">
                    <button type="submit" class="header__button button">Find</button>
                </form>
                <div v-if="!usersStore.isAuthenticated" class="auth-buttons">
                    <router-link to="/login" class="button">Login</router-link>
                    <router-link to="/register" class="button">Join</router-link>
                </div>
                <div v-else class="auth-buttons">
                    <button @click="moveToProfile" class="button">Profile</button>
                    <button @click="logout" class="button">Log out</button>
                </div>

            </div>
        </div>
    </header>
</template>

<script setup>

import { useGamesStore } from '../store/store';
import { useUsersStore } from '../store/usersStore';
import { ref } from 'vue';
import logo from '../assets/logo.svg'
import { useRouter } from 'vue-router';


const router = useRouter();
const input = ref('')
const store = useGamesStore()
const usersStore = useUsersStore()
const handleSubmit = (input) => {
    store.query = input
    store.clear()
    store.getGame(input)
}

const moveToProfile = () => {
    router.push('/profile')
}

const logout = () => {
    usersStore.logout()
    router.push('/')
}

</script>
<style scoped>
.header {
    padding: 15px 0px;
}

.container {
    max-width: 1300px;
    margin: 0 auto;
}

.header__content {
    display: flex;
    gap: 15px;
    align-items: center;
}

.header__form {
    display: flex;
    min-width: 500px;
    gap: 10px;
    flex-grow: 1;
}

.header__input {
    border: 1px solid #d9d9d9;
    padding: 10px;
    border-radius: 5px;
    color: #444;
    max-width: 350px;
    width: 100%;
}

.header__input:focus {
    outline: 2px solid black;

}

.button {
    background-color: rgb(71, 68, 68);
    padding: 10px 25px;
    border-radius: 5px;
    color: white;
    border: none;
    cursor: pointer
}

.auth-buttons {
    display: flex;
    gap: 10px;
}
</style>