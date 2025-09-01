<template>
    <form @submit.prevent="handleSubmitLogin" class="form">
        <div class="form-floating mb-3">
            <input v-model="userName" type="text" class="form-control " id="floatingInput" placeholder="Email or login">
            <label for="floatingInput">Email or Login</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="password" type="password" class="form-control " id="floatingPassword"
                placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useUsersStore } from '../store/usersStore';
import { useRouter } from 'vue-router';


const router = useRouter();

const store = useUsersStore();
const userName = ref('');
const password = ref('');

const handleSubmitLogin = () => {
    if (userName.value && password.value) {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('password', password.value);
        store.login({ userName: userName.value, password: password.value });
        if (localStorage.getItem('user')) {
            router.push('/')
        }
    }
}
</script>

<style scoped></style>