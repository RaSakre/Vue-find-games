import { defineStore } from "pinia";
import { ref } from "vue";

export const useGamesStore = defineStore("games", () => {
    const games = ref([]);
    const isLoading = ref(false);
    const error = ref("");
    const query = ref('');
    const platforms = ref([])
    const isNextNull = ref(false)
    const isPreviousNull = ref(false)
    const currentPage = ref(1);
    const allPagesCount = ref(0);

    const getGameByPage = (page) => {
        currentPage.value = page;
        getGame(query.value);
    };

    const getGame = async (query) => {
        isLoading.value = true;
        const itemsOnPage = 20;
        try {
            const response = await fetch(
                `https://api.rawg.io/api/games?key=785f5a66e21f48a59ed6501ba3d2c48a&search=${query}&page=${currentPage.value}`
            );
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            const data = await response.json();
            games.value = data.results;
            if (data.next === null) {
                isNextNull.value = true;
            } else {
                isNextNull.value = false;
            }
            if (data.previous === null) {
                isPreviousNull.value = true;
            } else {
                isPreviousNull.value = false;
            }
            console.log(data)
            allPagesCount.value = Math.ceil(data.count / itemsOnPage);
        } catch (err) {
            error.value = err.message;
        } finally {
            isLoading.value = false;
        }
    };
    const getPlatforms = async () => {
        try {
            const response = await fetch(
                `https://api.rawg.io/api/platforms?key=785f5a66e21f48a59ed6501ba3d2c48a`
            );
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            const data = await response.json();
            platforms.value = data.results.slice(0, 29);
        }
        catch (err) {
            error.value = err.message;
        }
    }

    const clear = () => {
        currentPage.value = 1;
        allPagesCount.value = 0;
    };


    const filterGamesByPlatform = (selectedPlatform) => {
        if (selectedPlatform === 'Default' || !selectedPlatform) {
            return games.value
        }

        return games.value.filter((game) => {
            return game.platforms.some((platformObj) =>
                platformObj.platform.name.toLowerCase() === selectedPlatform.toLowerCase()
            );
        });
    }

    return {
        query,
        games,
        getGame,
        isLoading,
        error,
        currentPage,
        allPagesCount,
        clear,
        getGameByPage,
        getPlatforms,
        platforms,
        filterGamesByPlatform,
        isNextNull,
        isPreviousNull,
    };
});
