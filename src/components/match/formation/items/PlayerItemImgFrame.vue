<template>
  <div class="addItem" v-if="!player">+</div>
  <div class="playerItem" v-else>
    <img :src="player.photo || DefaultPlayerLogo" />
  </div>
</template>

<script setup lang="ts">
import DefaultPlayerLogo from "@/assets/images/DefaultPlayerLogo.png";

const props = defineProps<{
  player?: Object | null;
}>();
</script>

<style scoped>
.addItem {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.432);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: black;
  border: 2px dashed rgba(255, 255, 255, 0.651);
  overflow: hidden;
}

.playerItem img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px dashed rgba(255, 255, 255, 0.651);
  overflow: hidden;
  object-fit: cover;
  object-position: top;
}
</style>
