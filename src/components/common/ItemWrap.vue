<template>
    <div class="itemContainer">
        <div class="imageContainer">
            <slot name="img"></slot>
        </div>
        <div class="itemName">
            <slot name="name">Oleksii Dzyhunskyi</slot>
        </div>
        <div class="itemPosition">
            <slot name="position">22</slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.itemContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    border-radius: 15px;
    padding: 15px;
    background-color: brown;
}

.imageContainer {
    width: 50px;
    height: 50px;
    display: flex;
}

.itemName {
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
}

.itemPosition {
    width: 25px;
    height: 50px;
    display: flex;
    align-items: center;
}
</style>