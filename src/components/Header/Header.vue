<template>
    <HeaderUI 
    :toggleTheme="toggleTheme" 
    :handleSubmit="handleSubmit" 
    :moveToProfile="moveToProfile" 
    :logout="logout"
    :usersStore="usersStore" />
</template>

<script setup>

import { useGamesStore } from '../../store/store';
import { useUsersStore } from '../../store/usersStore';
import HeaderUI from './HeaderUI.vue';
import { useRouter } from 'vue-router';

const toggleTheme = () => {
    const body = document.querySelector('body')
    if (body.classList.contains('light')) {
        body.classList.remove('light')
        body.classList.add('dark')
    } else {
        body.classList.remove('dark')
        body.classList.add('light')
    }
}
const router = useRouter();

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


</style>