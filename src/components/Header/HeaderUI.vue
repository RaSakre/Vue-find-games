<template >
    <header class="header mb-5">
        <div class="container">
            <div class="header__content">
                <router-link to="/" class="header__logo">
                    <img :src="logo" alt="logo">
                </router-link>
                <HeaderForm :handleSubmit="handleSubmit"/>
                <div v-if="!usersStore.isAuthenticated" class="auth-buttons">
                    <router-link to="/login" class="button">Login</router-link>
                    <router-link to="/register" class="button">Join</router-link>
                </div>
                <div v-else class="auth-buttons">
                    <button @click="moveToProfile" class="button">Profile</button>
                    <button @click="logout" class="button">Log out</button>
                </div>
                <label class="checkbox-green">
                    <input @click="toggleTheme"  type="checkbox">
                    <span  class="checkbox-green-switch" data-label-on="Dark" data-label-off="Light"></span>
                </label>
            </div>
        </div>
    </header>
</template>
<script setup>
import logo from '../../assets/logo.svg';
import HeaderForm from './HeaderForm.vue';
const props = defineProps([
    'handleSubmit',
    'usersStore',
    'moveToProfile',
    'logout',
    'toggleTheme'
])
</script>
<style>
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

body.dark .header__input {
    color: #d9d9d9;
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

.checkbox-green {
    display: inline-block;
    height: 28px;
    line-height: 28px;
    margin-right: 10px;
    position: relative;
    vertical-align: middle;
    font-size: 14px;
    user-select: none;
}

.checkbox-green .checkbox-green-switch {
    display: inline-block;
    height: 28px;
    width: 90px;
    box-sizing: border-box;
    position: relative;
    border-radius: 2px;
    background: #848484;
    transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);
}

.checkbox-green .checkbox-green-switch:before {
    content: attr(data-label-on);
    display: inline-block;
    box-sizing: border-box;
    width: 45px;
    padding: 0 12px;
    position: absolute;
    top: 0;
    left: 45px;
    text-transform: uppercase;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    font-size: 10px;
    line-height: 28px;
}

.checkbox-green .checkbox-green-switch:after {
    content: attr(data-label-off);
    display: inline-block;
    box-sizing: border-box;
    width: 44px;
    border-radius: 1px;
    position: absolute;
    top: 1px;
    left: 1px;
    z-index: 5;
    text-transform: uppercase;
    text-align: center;
    background: white;
    line-height: 26px;
    font-size: 10px;
    color: #777;
    transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);
}

.checkbox-green input[type="checkbox"] {
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.checkbox-green input[type="checkbox"]:checked+.checkbox-green-switch {
    background-color: rgb(185 106 106);;
}

.checkbox-green input[type="checkbox"]:checked+.checkbox-green-switch:before {
    content: attr(data-label-off);
    left: 0;
}

.checkbox-green input[type="checkbox"]:checked+.checkbox-green-switch:after {
    content: attr(data-label-on);
    color: #10100f;
    transform: translate3d(44px, 0, 0);
}

/* Hover */
.checkbox-green input[type="checkbox"]:not(:disabled)+.checkbox-green-switch:hover {
    cursor: pointer;
}

.checkbox-green input[type="checkbox"]:not(:disabled)+.checkbox-green-switch:hover:after {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
}

/* Disabled */
.checkbox-green input[type=checkbox]:disabled+.checkbox-green-switch {
    opacity: 0.6;
    filter: grayscale(50%);
}

/* Focus */
.checkbox-green.focused .checkbox-green-switch:after {
    box-shadow: inset 0px 0px 4px #ff5623;
}
</style>