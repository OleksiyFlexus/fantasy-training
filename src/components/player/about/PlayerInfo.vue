<template>
  <div class="playerPhoto">
    <img v-if="player.photo" :src="player.photo" alt="PlayerPhoto" />
    <img v-else :src="DefaultPlayerPhoto" alt="PlayerPhoto" />
  </div>
  <div class="decorativeLine"></div>
  <div class="playerName">
    <h1>{{ player.name }} {{ player.surname }}</h1>
  </div>
</template>

<script setup lang="ts">
import DefaultPlayerPhoto from "@/assets/images/DefaultPlayerLogo.png";

const props = defineProps<{
  player: Player;
}>();
</script>

<style scoped>
.playerPhoto img {
  width: 120px;
  height: 100px;
  object-position: top;
  object-fit: cover;
}

.playerName {
  width: 100%;
  display: flex;
  justify-content: center;
}

.playerName h1 {
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
}

.decorativeLine {
  display: flex;
  width: 100%;
  border: 1px dashed #1f211f;
}
</style>
