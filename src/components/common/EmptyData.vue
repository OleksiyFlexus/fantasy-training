<template>
  <div class="notificationContainer">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.notificationContainer {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #161616a1;
  border: 1px dashed #c8f558;
  border-radius: 12px;
  font-size: 22px;
  color: aliceblue;
  font-weight: 600;
}
</style>
