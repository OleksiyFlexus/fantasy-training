<template>
  <div class="createPlayer">
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.createPlayer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
</style>
