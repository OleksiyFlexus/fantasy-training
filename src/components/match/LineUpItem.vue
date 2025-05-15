<template>
  <div class="lineUpItemContainer" v-if="!player">
    <span class="addItem">+</span>
  </div>
  <div class="lineUpItemContainer" v-else>
    <span class="addItem">
      <img :src="player.photo || DefaultPlayerLogo" />
    </span>
    <div class="lineUpPlayerName">
      {{ player.surname }}
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultPlayerLogo from "@/assets/images/DefaultPlayerLogo.png";

defineProps<{
  player?: Player;
}>();
</script>

<style scoped>
.lineUpItemContainer {
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
}

.addItem {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #558f78;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 800;
  overflow: hidden;
}

.addItem img {
  object-fit: contain;
  object-position: bottom;
}

.lineUpPlayerName {
  display: block;
  background-color: #558f78;
  max-width: 80px;
  padding: 3px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 600;
  color: #ffff;
  text-transform: uppercase;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
