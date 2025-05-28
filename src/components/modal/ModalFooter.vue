<template>
  <div class="modalFooter">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.modalFooter {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
