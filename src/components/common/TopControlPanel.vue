<template>
    <div class="controlPanelContainer">
        <div class="mainBtnContainer">
            <div class="buttonContainer">
                <button class="prevPageBtn" @click="() => { router.push('/match') }">
                    <ArrowLeftCircle />
                </button>
            </div>
            <div class="pageName">
                <slot name="pageName"></slot>
                <p>Live Matches</p>
            </div>
        </div>
        <div class="menuBtn">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowLeftCircle } from '@/constants/importIcons'

import router from '@/router';
</script>

<style scoped>
.controlPanelContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
}

.mainBtnContainer {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
}

.buttonContainer {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #16161693;
    display: flex;
    align-items: center;
    justify-content: center;
}

.prevPageBtn {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
}

.pageName {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 32px;
    line-height: 24px;
    font-weight: bold;
    color: #FFFFFF;
}

.pageName p {
    font-size: 12px;
}

.menuBtn {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>