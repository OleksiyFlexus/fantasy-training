<template>
  <div class="teamShowdownSection">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.teamShowdownSection {
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}
</style>
