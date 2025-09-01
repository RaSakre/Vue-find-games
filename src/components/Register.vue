<template>
    <form @submit.prevent="handleSubmit" class="form">
        <div class="form-floating mb-3">
            <input required v-model="email" type="email" class="form-control " id="floatingInput"
                placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
            <input required v-model="userName" type="text" class="form-control " id="floatingUserName"
                placeholder="Password">
            <label for="floatingUserName">User name</label>
        </div>
        <div class="form-floating mb-3">
            <input required v-model="password" type="password" class="form-control " id="floatingPassword"
                placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</template>
<script setup>
import { ref } from 'vue';
import { useUsersStore } from '../store/usersStore';
import { useRouter } from 'vue-router';


const router = useRouter();
const store = useUsersStore()

const email = ref('');
const userName = ref('');
const password = ref('');
const handleSubmit = () => {
    if (email.value && userName.value && password.value) {
        store.addUser({
            email: email.value,
            userName: userName.value,
            password: password.value
        })
    }
    alert('Вы успешно зарегистрированы!')
    router.push('/login')

}


</script>
<style>
.form {
    max-width: 600px;
    margin: 0 auto;
}
</style>