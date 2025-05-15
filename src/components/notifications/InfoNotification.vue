<template>
    <div class="overlay">
        <div class="notificationContainer">
            <div class="iconSection">
                <InfoIcon />
            </div>
            <div class="textSection">
                <h1>{{ message }}</h1>
            </div>
            <button class="closeSection" @click="emit('close')">
                <CloseIcon />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { InfoIcon, CloseIcon } from '@/constants/importIcons';

defineProps<{ message: string }>();

const emit = defineEmits(['close']);
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
    background-color: #7eb8ff;
}

.notificationContainer:hover {
    background-color: #5ba5ff;
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
    stroke: #1e3a8a;
}

.textSection h1 {
    color: #1e3a8a;
}

.closeSection svg {
    width: 25px;
    height: 25px;
    stroke: #1e3a8a;
}
</style>