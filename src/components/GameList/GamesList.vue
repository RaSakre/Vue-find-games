<template>
    <div class="container">
        <GamesListUI :page1="page1" :prevPage="prevPage" :nextPage1="nextPage1" :nextPage2="nextPage2"
            :currentPage="currentPage" :handleSubmit="handleSubmit" :getGamePlatformesBy3="getGamePlatformesBy3"
            :toggleFavourite="toggleFavourite" :getPageItemClass="getPageItemClass" :isAuth="isAuth"
            :watchChangingPlatform="watchChangingPlatform" :store="store" :arrowNextPage="arrowNextPage"
            :arrowPrevPage="arrowPrevPage" />
    </div>
</template>

<script setup>
import GamesListUI from './GamesListUI.vue';
import { computed, ref, onMounted } from 'vue';
import { useGamesStore } from '../../store/store';
import { useFavoriteGamesStore } from '../../store/favoriteGamesStore';
import { useUsersStore } from '../../store/usersStore';

onMounted(() => {
    store.getPlatforms()
})

const store = useGamesStore();
const favoriteGamesStore = useFavoriteGamesStore();
const usersStore = useUsersStore();
const isAuth = usersStore.isAuthenticated
const page1 = ref(1)
const prevPage = computed(() => store.currentPage - 1);
const currentPage = computed(() => store.currentPage);
const nextPage1 = computed(() => store.currentPage + 1);
const nextPage2 = computed(() => store.currentPage + 2);
const selectedPlatform = ref('Default');



const toggleFavourite = (id) => {
    const game = store.games.find(game => game.id === id);
    favoriteGamesStore.toggleFavorite(game)
}

const arrowNextPage = () => {
    if (store.isNextNull) {
        alert('Впереди только драконы')
        return
    }
    store.getGameByPage(store.currentPage + 1)
}

const arrowPrevPage = () => {
    if (store.isPreviousNull) {
        alert('Сзади только драконы')
        return
    }
    store.getGameByPage(store.currentPage - 1)
}

const watchChangingPlatform = () => {
    store.filterGamesByPlatform(selectedPlatform.value)
}



const getGamePlatformesBy3 = computed(() => (platformes) => {
    if (!platformes) {
        return ''
    }
    if (platformes.length > 3) {
        return platformes.slice(0, 3).map(platform => platform.platform.name).join(', ') + ` and ${platformes.length - 3} more`
    }
    else {
        return platformes.map(platform => platform.platform.name).join(', ')
    }
})

const handleSubmit = (page) => {
    store.getGameByPage(page);
}


const getPageItemClass = computed(() => (page) => {
    return {
        'page-item': true,
        'active': page === store.currentPage
    };
})

</script>

<style></style>