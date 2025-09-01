import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteGamesStore = defineStore("favoriteGames", () => {
    const favoriteGames = ref([]);

    function addGame(game) {
        favoriteGames.value.push(game);
    }
    const toggleFavorite = (game) => {
        if (isFavorite(game.id)) {
            removeGame(game);
        } else {
            addGame(game);
        }
    }

    const removeGame = (game) => {
        favoriteGames.value = favoriteGames.value.filter((g) => g.id !== game.id);
    }

    function isFavorite(id) {
        return favoriteGames.value.some((g) => g.id === id);
    }
    return {
        favoriteGames,
        toggleFavorite,
        isFavorite
    }
})
