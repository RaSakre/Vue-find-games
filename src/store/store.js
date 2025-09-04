import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { buildApiUrl } from "./paramsHelper";

export const useGamesStore = defineStore("games", () => {
    const games = ref([]);
    const isLoading = ref(false);
    const error = ref("");
    const query = ref('');
    const platforms = ref([])
    const platformId = ref(0)
    const isNextNull = ref(false)
    const isPreviousNull = ref(false)
    const currentPage = ref(1);
    const allPagesCount = ref(0);

    const getGameByPage = (page) => {
        currentPage.value = page;
        getGame();
    };

    const urlGames = computed(() => {
        const params = {
            search: query.value,
            page: currentPage.value,
        };

        if (platformId.value && platformId.value !== 'Default') {
            params.platforms = platformId.value;
        }

        return buildApiUrl('games', params);
    });
    const urlPlatforms = computed(() => {
        const params = {
            search: query.value,
            // platforms: platformId.value,
            page: currentPage.value,
        };

        if (platformId.value && platformId.value !== 'Default') {
            params.platforms = platformId.value;
        }
        return buildApiUrl('games', params);
    })

    const getGame = async () => {
        isLoading.value = true;
        const itemsOnPage = 20;
        try {
            const response = await fetch(urlGames.value);
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
            const response = await fetch('https://api.rawg.io/api/platforms?key=785f5a66e21f48a59ed6501ba3d2c48a');
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


    const filterGamesByPlatform = async () => {
        const itemsOnPage = 20
        try {
            const response = await fetch(urlPlatforms.value)
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            const data = await response.json();
            games.value = data.results;
            allPagesCount.value = Math.ceil(data.count / itemsOnPage);
        } catch (err) {
            error.value = err.message;
        }
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
        platformId
    };
});
