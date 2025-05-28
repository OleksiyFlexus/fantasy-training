<template>
  <div class="createItemForm">
    <slot />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.createItemForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
</style>
