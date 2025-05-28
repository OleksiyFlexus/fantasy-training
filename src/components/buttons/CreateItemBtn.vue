<template>
    <button class="createItemBtn">
        <CreateIcon />
    </button>
</template>

<script setup lang="ts">
import { CreateIcon } from '@/constants/importIcons';
</script>

<style scoped>
.createItemBtn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #161616;
    display: flex;
    align-items: center;
    justify-content: center;
}

.createItemBtn svg {
    width: 24px;
    height: 24px;
}
</style>