import {defineStore} from "pinia";
import {ref} from "vue";

export const useGamesStore = defineStore("games", () => {
  const games = ref([]);
  const isLoading = ref(false);
  const error = ref("");
  const query = ref('')

  const currentPage = ref(1);
  const allPagesCount = ref(0);

  const getGameByPage = (page) => {
    currentPage.value = page;
    getGame(query);
  };

  const getGame = async (query) => {
    isLoading.value = true;
    const itemsOnPage = 20;
    console.log(currentPage.value, isLoading.value);
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=785f5a66e21f48a59ed6501ba3d2c48a&search=${query}&page=${currentPage.value}`
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      console.log(data);
      console.log(
        "itemsOnPage",
        data.count,
        itemsOnPage,
        Math.ceil(data.count / itemsOnPage)
      );
      games.value = data.results;

      allPagesCount.value = Math.ceil(data.count / itemsOnPage);
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  const clear = () => {
    currentPage.value = 1;
    allPagesCount.value = 0;
  };

  return {
    query,
    games,
    getGame,
    isLoading,
    error,
    currentPage,
    allPagesCount,
    clear,
  };
});
