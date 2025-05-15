<template>
  <div class="modalBody">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.modalBody {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  color: #333;
  gap: 15px;
}
</style>
