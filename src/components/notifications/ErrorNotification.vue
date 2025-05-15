<template>
    <div class="overlay">
        <div class="notificationContainer">
            <div class="iconSection">
                <XroundeCircleIcon />
            </div>
            <div class="textSection">
                <h1>An issue occurred.</h1>
            </div>
            <button class="closeSection" @click="$emit('close')">
                <CloseIcon />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CloseIcon, XroundeCircleIcon } from '@/constants/importIcons';
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9;
}

.notificationContainer {
    width: 330px;
    height: 60px;
    border-radius: 8px;
    padding: 10px 15px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 15px;
    background-color: #ff7e7e;
}

.notificationContainer:hover {
    background-color: #ff5f5f;
}

.iconSection,
.textSection,
.closeSection {
    display: flex;
    align-items: center;
}

.iconSection svg {
    width: 30px;
    height: 30px;
    fill: #7f1d1d;
}

.textSection h1 {
    color: #7f1d1d;
}

.closeSection svg {
    width: 25px;
    height: 25px;
    stroke: #7f1d1d;
}
</style>