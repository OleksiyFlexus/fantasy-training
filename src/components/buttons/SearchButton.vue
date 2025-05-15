<template>
    <div class="searchBtnContainer">
        <button class="searchBtn"><SearchIcon /></button>
    </div>
</template>

<script setup lang="ts">
import { SearchIcon } from '@/constants/importIcons';
</script>

<style scoped>
.searchBtnContainer {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #161616;
    display: flex;
    align-items: center;
    justify-content: center;
}

.searchBtn {
    width: 24px;
    height: 24px;
}
</style>