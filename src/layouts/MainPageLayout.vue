<template>
  <div class="body_gradient"></div>
  <div class="layoutContent">
    <router-view />
    <div class="footer">
      <Menu />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.layoutContent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.footer {
  width: 100%;
  padding: 15px;
  position: fixed;
  bottom: 0;
  z-index: 100;
}
</style>
