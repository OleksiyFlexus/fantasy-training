<template>
    <div class="buttonsContainer">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.buttonsContainer {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
}
</style>