<template>
    <div class="playerContainer">
        <div class="playerPhoto">
            <img :src=DefaultPlayerLogo alt="DefaultPlayerLogo">
        </div>
        <div class="playerSurname">
            Dzyhunskyi
        </div>
    </div>
</template>

<script setup lang="ts">
import DefaultPlayerLogo from '@/assets/images/DefaultPlayerLogo.png'
</script>

<style scoped>
.playerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    position: relative;
}

.playerPhoto {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #558F78;
    overflow: hidden;
}

.playerSurname {
    display: block;
    max-width: 80px;
    min-width: 80px;
    max-height: 25px;
    min-height: 25px;
    background-color: #558F78;
    color: #ffffff;
    padding: 5px;
    border-radius: 8px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.playerPhoto img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    object-position: center;
}
</style>