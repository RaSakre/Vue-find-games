<template>
    <div>
        <div v-if="store.games.length > 0" class="pagination-controls">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a @click="arrowPrevPage" class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li v-if="props.store.currentPage >= 5" @click="handleSubmit(page1)"
                        :class="getPageItemClass(page1)">
                        <a class="page-link" href="#">{{ page1 }}</a>
                    </li>
                    <li v-if="props.store.currentPage > 1" @click="handleSubmit(prevPage)"
                        :class="getPageItemClass(prevPage)">
                        <a class="page-link" href="#">{{ prevPage }}</a>
                    </li>
                    <li @click="handleSubmit(currentPage)" :class="getPageItemClass(currentPage)">
                        <a class="page-link" href="#">{{ currentPage }}</a>
                    </li>
                    <li v-if="props.store.currentPage < props.store.allPagesCount" @click="handleSubmit(nextPage1)"
                        :class="getPageItemClass(nextPage1)">
                        <a class="page-link" href="#">{{ nextPage1 }}</a>
                    </li>
                    <li v-if="props.store.currentPage < props.store.currentPage - 2" @click="handleSubmit(nextPage2)"
                        :class="getPageItemClass(nextPage2)">
                        <a class="page-link" href="#">{{ nextPage2 }}</a>
                    </li>
                    <li v-if="props.store.currentPage < props.store.allPagesCount - 1"
                        @click="handleSubmit(props.store.allPagesCount)"
                        :class="getPageItemClass(props.store.allPagesCount)">
                        <a class="page-link" href="#">{{ props.store.allPagesCount }}</a>
                    </li>
                    <li class="page-item">
                        <a @click="arrowNextPage" class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const page1 = ref(1)
const props = defineProps(['store', 'arrowPrevPage', 'arrowNextPage', 'handleSubmit', 'currentPage', 'prevPage', 'nextPage1', 'nextPage2', 'getPageItemClass'])
</script>
<style scoped>
.pagination-controls {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.page-link {
    cursor: pointer;
}
</style>