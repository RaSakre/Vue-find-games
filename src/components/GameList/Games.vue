<template >
    <div class="games-container">
        <h1 style="font-size: 30px;" v-if="store.games.length === 0">Найдите ваши любимые игры!</h1>
        <div v-if="store.isLoading" class="loader"></div>
        <ul v-else class="games-list">
            <Game v-for="game in store.games" :key="game.id" :game="game"
                :getGamePlatformesBy3="getGamePlatformesBy3" @toggleFavourite="toggleFavourite" :isAuth="isAuth" />
        </ul>
    </div>
</template>
<script setup>
import Game from '../Game.vue';
const props = defineProps(['store', 'getGamePlatformesBy3', 'toggleFavourite', 'isAuth'])
</script>
<style scoped>

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