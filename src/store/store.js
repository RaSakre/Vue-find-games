import { defineStore } from "pinia";
import { ref } from "vue";

export const useGamesStore = defineStore("games", () => {
const games = ref([])
const isLoading = ref(false)
const error = ref('')

const getGame = async (query) => {
    isLoading.value = true
    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=785f5a66e21f48a59ed6501ba3d2c48a&search=${query}&page=1`)
        if (!response.ok) {
            throw new Error('Error fetching data')
        }
        const data = await response.json()
        console.log(data)
        games.value = data.results
    }
    catch (err) {
        error.value = err.message
    }
    finally {
        isLoading.value = false
    }
}

return {
    games,
    getGame,
    isLoading,
    error
}
})