<template>
  <div class="modalHeader">
    <slot />
    <CloseButton @click="emit('close')" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);
</script>

<style scoped>
.modalHeader {
  width: 100%;
  display: flex;
  padding: 10px;
  position: sticky;
  z-index: 3;
  top: 0;
  justify-content: space-between;
  align-items: center;
  color: #ffff;
  font-size: 18px;
  font-weight: 800;
}
</style>
