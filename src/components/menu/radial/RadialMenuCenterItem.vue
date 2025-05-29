<template>
  <div class="player-logo">
    <img v-if="playerPhoto" :src="playerPhoto" alt="DefaultPlayerLogo" />
    <img v-else :src="DefaultPlayerLogo" alt="DefaultPlayerLogo" />
  </div>
</template>

<script setup lang="ts">
import DefaultPlayerLogo from "@/assets/images/DefaultPlayerLogo.png";

const props = defineProps({
  playerPhoto: {
    type: String,
    default: DefaultPlayerLogo,
  },
});
</script>

<style scoped>
.player-logo {
  border-radius: 50%;
  overflow: hidden;
}

.player-logo img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  object-position: center;
  background: transparent;
}
</style>
