<template >
    <div class="container">
        <Pagination :store="store" :prevPage="prevPage" :currentPage="currentPage" :nextPage1="nextPage1"
            :nextPage2="nextPage2" :arrowNextPage="arrowNextPage" :arrowPrevPage="arrowPrevPage"
            :handleSubmit="handleSubmit" :getPageItemClass="getPageItemClass"/>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import Pagination from './Pagination.vue';
import { useGamesStore } from '../../store/store';
const store = useGamesStore()
const props = defineProps(['store'])
const prevPage = computed(() => store.currentPage - 1);
const currentPage = computed(() => store.currentPage);
const nextPage1 = computed(() => store.currentPage + 1);
const nextPage2 = computed(() => store.currentPage + 2);

const handleSubmit = (page) => {
    store.getGameByPage(page);
}


const getPageItemClass = (page) => {
    return {
        'page-item': true,
        'active': page === store.currentPage
    };
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
</script>
<style scoped>
    
</style>