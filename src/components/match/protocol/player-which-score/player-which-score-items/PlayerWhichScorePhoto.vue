<template>
  <div class="playerPhoto">
    <img :src="playerPhoto" alt="Player Photo" />
  </div>
</template>

<script setup lang="ts">
import DefaultPlayerPhoto from "@/assets/images/DefaultPlayerLogo.png";
import { computed } from "vue";

const props = defineProps<{
  player?: any;
}>();

const playerPhoto = computed(() => {
  return props.player?.photo || DefaultPlayerPhoto;
});
</script>

<style scoped>
.playerPhoto {
  width: 48px;
  height: 48px;
  background-color: #6d9c9b33;
  border-radius: 50%;
  display: flex;
  overflow: hidden;
}

.playerPhoto img {
  width: 48px;
  object-fit: cover;
  object-position: top;
}
</style>
