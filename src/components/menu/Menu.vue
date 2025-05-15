<template>
  <div class="menuContainer">
    <MenuItems />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
.menuContainer {
    display: flex;
    padding: 10px;
    background-color: #161616;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 20px;
}
</style>
