<template>
    <div class="games-container">
        <div v-if="store.isLoading" class="loader"></div>
        <ul v-else class="games-list">
            <Game v-for="game in store.games" :key="game.id" :game="game" />
        </ul>
        <div class="pagination-controls">
           <button v-if="prevPage2 >= 0" @submit.prevent="handleSubmit(prevPage2)>{{ prevPage2 }}</button>
            <button v-if="prevPage1 >= 0">{{ prevPage1 }}</button>
            <button v-if="currentPage >= 0">{{ currentPage }}</button>
            <button v-if="nextPage1 < store.allPagesCount">{{ nextPage1 }}</button>
            <button v-if="nextPage2 < store.allPagesCount">{{ nextPage2 }}</button>
            <button v-if="store.currentPage !== store.allPagesCount">{{ store.allPagesCount }}</button>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useGamesStore } from '../store/store';
import Game from './Game.vue';
const store = useGamesStore();
const prevPage2 = computed(() => store.currentPage - 2);
const prevPage1 = computed(() => store.currentPage - 1);
const currentPage = computed(() => store.currentPage);
const nextPage1 = computed(() => store.currentPage + 1);
const nextPage2 = computed(() => store.currentPage + 2);

const handleSubmit = (page) => {
    store.getGame(input)
}
</script>
<style scoped>
.pagination-controls{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.games-container {
    padding: 30px 15px;
    width: 98%;
}

.games-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
}


.loader {
    margin: 0 auto;
    width: 45px;
    aspect-ratio: 1;
    --c: no-repeat linear-gradient(#000 0 0);
    background:
        var(--c) 0% 50%,
        var(--c) 50% 50%,
        var(--c) 100% 50%;
    background-size: 20% 100%;
    animation: l1 1s infinite linear;
}

@keyframes l1 {
    0% {
        background-size: 20% 100%, 20% 100%, 20% 100%
    }

    33% {
        background-size: 20% 10%, 20% 100%, 20% 100%
    }

    50% {
        background-size: 20% 100%, 20% 10%, 20% 100%
    }

    66% {
        background-size: 20% 100%, 20% 100%, 20% 10%
    }

    100% {
        background-size: 20% 100%, 20% 100%, 20% 100%
    }
}
</style>