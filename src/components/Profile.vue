<template>
    <div class="container">
        <h1 class="greetings">Добро пожаловать {{ userName }}!</h1>
        <p>Здесь будут отображаться ваши избранные игры</p>
        <div class="favourite-games container">
            <ul class="favourite-games-list">
                <Game v-for="game in favoriteGamesStore.favoriteGames" :key="game.id" :game="game"
                    :getGamePlatformesBy3="getGamePlatformesBy3" :isAuth="true" @toggleFavourite="toggleFavourite" />
            </ul>
        </div>
    </div>
</template>

<script setup>
import Game from './Game.vue';
import { useFavoriteGamesStore } from '../store/favoriteGamesStore';
import { useGamesStore } from '../store/store';
const favoriteGamesStore = useFavoriteGamesStore()
const store = useGamesStore()
const userName = localStorage.getItem('userName')

const toggleFavourite = (id) => {
    const game = store.games.find(game => game.id === id);
    favoriteGamesStore.toggleFavorite(game)
}

const getGamePlatformesBy3 = (platformes) => {
    if (platformes.length > 3) {
        return platformes.slice(0, 3).map(platform => platform.platform.name).join(', ') + ` and ${platformes.length - 3} more`
    } else {
        return platformes.map(platform => platform.platform.name).join(', ')
    }
}
</script>
<style scoped>
.greetings {
    font-size: 40px;
}

.favourite-games-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
}
</style>