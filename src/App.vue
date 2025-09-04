<script setup>
import Header from './components/Header/Header.vue'

import { useRouter } from 'vue-router';
import { useUsersStore } from './store/usersStore';
const usersStore = useUsersStore()
const router = useRouter();

router.beforeEach((to, from, next) => {
  // console.log(usersStore.isAuthenticated)
  if (to.meta.requiresAuth && !localStorage.getItem('user')) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})
</script>

<template>
  <Header />
  <router-view />
</template>

<style scoped></style>
