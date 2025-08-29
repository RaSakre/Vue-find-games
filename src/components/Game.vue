<template>
    <li :style="{
        backgroundImage: `linear-gradient(rgb(31, 31, 31), rgba(31, 31, 31, 0.85)), url(${game.background_image})`
    }" class="game-card">
    <a class="game-link" :href=url >
        <div class="game-content">
            <div class="image-block">
                <img class="game-image" :src=game.background_image :alt=game.name>
            </div>
            <div class="game-info">
                <h3>{{ game.name }}</h3>
                <p>Дата выхода: {{ game.released }} </p>
                <div class="genresplatforms">
                    <p>Жанры: {{ game.genres.map(genre => genre.name).join(', ') }}</p>
                    <p>Платформы: {{ getGamePlatformes(game.platforms) }} </p>
                </div>
            </div>
        </div>
        </a>
    </li>
</template>

<script setup>

import { defineProps } from 'vue';
const props = defineProps({
    game: {
        type: Object,
        required: true
    }
})
const url = `https://rawg.io/games/${props.game.slug}`
const getGamePlatformes = (platformes) => {
    if (platformes.length > 3) {
        return platformes.slice(0, 3).map(platform => platform.platform.name).join(', ') + ` and ${platformes.length - 3} more`
    } else {
        return platformes.map(platform => platform.platform.name).join(', ')
    }
}
</script>

<style scoped>
.game-card {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #1b1b1b;
    border-radius: 4px;
    background-color: #333333;
    transition: transform 0.3s ease-in-out;
}

.game-card:hover {
    transform: translateY(-5px);
}

.game-link {
    color: #f7f7f7;
    cursor: pointer;
}

.game-content {
    display: flex;
    gap: 20px;
    height: 100%;
    backdrop-filter: blur(7px);
    padding: 10px 15px;
}

.image-block {
    cursor: pointer;
    width: 200px;
    max-height: 145px;
    flex-shrink: 0;
}

.game-image {
    border-radius: 4px;
    width: 100%;
    object-fit: cover;
    height: 100%;
}
</style>