<template>
    <form @submit.prevent="handleSubmit(input)" action="" class="header__form">
        <input v-model="input" type="text" placeholder="Type your game in English" class="header__input">
        <button type="submit" class="header__button button">Find</button>
    </form>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps(['handleSubmit'])
const input = ref('')
</script>
<style scoped></style>