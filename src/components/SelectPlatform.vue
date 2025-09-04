<template>
    <div class="container">
        <select @change="watchChangingPlatform(selectedPlatform)" v-model="selectedPlatform"
            v-if="store.games.length > 0" class="form-select form-select-lg" aria-label="Default select example">
            <option value="Default" selected>Choose platform</option>
            <option v-for="platform in store.platforms" :key="platform.id" :value="platform.id">
                {{ platform.name }}
            </option>
        </select>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const selectedPlatform = ref('Default')
const props = defineProps(['store', 'watchChangingPlatform',])

</script>
<style scoped>
.form-select {
    margin: 0 auto 20px;
    background-color: #bd9f9f;
    color: white;
    width: 300px;
}
</style>