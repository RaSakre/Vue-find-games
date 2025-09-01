import { defineStore } from "pinia";
import { reactive, ref } from "vue";


export const useUsersStore = defineStore("users", () => {
    const users = ref([])
    const isAuthenticated = ref(false)

    const addUser = (user) => {
        users.value.push(user)
    }
    const logout = () => {
        localStorage.clear()
        isAuthenticated.value = false
    }
    const login = (user) => {
        const existingUser = users.value.find((u) => u.userName === user.userName && u.password === user.password)
        if (existingUser) {
            localStorage.setItem("user", JSON.stringify(existingUser))
            isAuthenticated.value = true
            alert('Вы успешно вошли!')
        } else {
            alert("Проверьте правильность введённых данных")
        }
    }
    return {
        users,
        addUser,
        isAuthenticated,
        logout,
        login,
    }
})