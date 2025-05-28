<template>
  <button class="option">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
.option {
  position: absolute;
  background-color: #1e1e1e;
  border: 2px solid #ffdd00;
  color: #ffff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
