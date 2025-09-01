<template>
    <div class="container">
        <select @change="props.watchChangingPlatform" v-model="selectedPlatform" v-if="props.store.games.length > 0"
            class="form-select form-select-lg" aria-label="Default select example">
            <option value="Default" selected>Choose platform</option>
            <option v-for="platform in props.store.platforms" :key="platform.id" :value="platform.name">{{ platform.name }}
            </option>
        </select>
        <div v-if="props.store.isLoading" class="loader"></div>
        <ul v-else class="games-list">
            <Game v-for="game in props.store.games" :key="game.id" :game="game" :getGamePlatformesBy3="getGamePlatformesBy3"
                @toggleFavourite="toggleFavourite" :isAuth="isAuth" />
        </ul>
        <div v-if="props.store.games.length > 0" class="pagination-controls">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li v-if="props.store.currentPage >= 5" @click="handleSubmit(page1)" :class="getPageItemClass(page1)">
                        <a class="page-link" href="#">{{ page1 }}</a>
                    </li>
                    <li v-if="props.store.currentPage > 1" @click="handleSubmit(prevPage)"
                        :class="getPageItemClass(prevPage)">
                        <a class="page-link" href="#">{{ prevPage }}</a>
                    </li>
                    <li @click="handleSubmit(currentPage)" :class="getPageItemClass(currentPage)">
                        <a class="page-link" href="#">{{ currentPage }}</a>
                    </li>
                    <li v-if="props.store.currentPage < props.store.allPagesCount" @click="handleSubmit(nextPage1)"
                        :class="getPageItemClass(nextPage1)">
                        <a class="page-link" href="#">{{ nextPage1 }}</a>
                    </li>
                    <li v-if="props.store.currentPage < props.store.currentPage - 2" @click="handleSubmit(nextPage2)"
                        :class="getPageItemClass(nextPage2)">
                        <a class="page-link" href="#">{{ nextPage2 }}</a>
                    </li>
                    <li v-if="props.store.currentPage < props.store.allPagesCount - 1" @click="handleSubmit(props.store.allPagesCount)"
                        :class="getPageItemClass(props.store.allPagesCount)">
                        <a class="page-link" href="#">{{ props.store.allPagesCount }}</a>
                    </li>
                </ul>
            </nav>
        </div>
        <h1 style="font-size: 30px;" v-if="props.store.games.length === 0">Найдите ваши любимые игры!</h1>
    </div>
</template>
<script setup>

const selectedPlatform = ref('Default');
import { ref } from 'vue';
import Game from '../Game.vue';
const props = defineProps([
    'getGamePlatformesBy3', 
    'toggleFavourite', 
    'watchChangingPlatform', 
    'isAuth', 
    'getPageItemClass', 
    'handleSubmit', 
    'currentPage', 
    'prevPage', 
    'nextPage1', 
    'nextPage2', 
    'page1',
    'store'
])

</script>

<style scoped>
.form-select {
    margin: 0 auto 20px;
    background-color: #bd9f9f;
    color: white;
    width: 300px;
}

.pagination-controls {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.page-link {
    cursor: pointer;
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