<template>
    <div class="container">
        <SelectPlatform :watchChangingPlatform="watchChangingPlatform" :store="store" />
        <Games :store="store" :getGamePlatformesBy3="getGamePlatformesBy3" :toggleFavourite="toggleFavourite"
            :isAuth="isAuth" />
        <PaginationWrapper />
    </div>
</template>

<script setup>
import SelectPlatform from '../SelectPlatform.vue';
import PaginationWrapper from '../Pagination/PaginationWrapper.vue';
import Games from './Games.vue';
import { onMounted } from 'vue';
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


const toggleFavourite = (id) => {
    const game = store.games.find(game => game.id === id);
    favoriteGamesStore.toggleFavorite(game)
}


const watchChangingPlatform = (platformId) => {
    store.platformId = platformId;

    if (platformId === 'Default') {
        store.getGame()
    }
    store.filterGamesByPlatform()
}


const getGamePlatformesBy3 = (platformes) => {
    if (!platformes) {
        return ''
    }
    if (platformes.length > 3) {
        return platformes.slice(0, 3).map(platform => platform.platform.name).join(', ') + ` and ${platformes.length - 3} more`
    }
    else {
        return platformes.map(platform => platform.platform.name).join(', ')
    }
}



</script>

<style></style>