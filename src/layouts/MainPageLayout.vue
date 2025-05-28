<template>
  <div class="bodyGradient"></div>
  <div class="layoutContent">
    <router-view />
    <div class="footer">
      <TheMenu />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheMenu from "../components/menu/TheMenu.vue";
</script>

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
