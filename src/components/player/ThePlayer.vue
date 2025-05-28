<template>
  <div class="playerCard">
    <div class="cardHeader">PLAYER DETAILS</div>
    <AboutPlayer :player="player" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  player: Player;
}>();
</script>

<style scoped>
.playerCard {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: #161616;
  color: #ffffff;
}

.cardHeader {
  display: flex;
  height: 40px;
  align-items: center;
  padding-left: 16px;
}
</style>
