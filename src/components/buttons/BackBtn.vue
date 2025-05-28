<template>
<div class="buttonContainer">
    <button class="backPageBtn" @click="() => { router.push('/match') }">
        <ArrowLeftCircle />
    </button>
</div>
</template>

<script setup lang="ts">
import { ArrowLeftCircle } from '@/constants/importIcons'

import router from '@/router';
</script>

<style scoped>
.buttonContainer {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #16161693;
    display: flex;
    align-items: center;
    justify-content: center;
}

.backPageBtn {
    display: flex;
    align-items: center;
}

.backPageBtn svg {
    width: 24px;
    height: 24px;
    fill: #fff;
}
</style>
