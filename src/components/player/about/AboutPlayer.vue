<template>
  <div class="aboutPlayer">
    <PlayerClub :expanded="expanded" />
    <div class="playerInfo">
      <PlayerInfo :player="player" />
    </div>
    <div class="additionalInfo">
      <DetailsBtn :class="{ expanded }" @click="togglePlayerDetails" />
    </div>
  </div>
  <AboutPlayerAdditionalInfo v-if="expanded" :player="player" />
</template>

<script setup lang="ts">
const props = defineProps<{
  player: Player;
}>();

const expanded = ref(false);

const togglePlayerDetails = () => {
  expanded.value = !expanded.value;
};
</script>

<style scoped>
.aboutPlayer {
  display: flex;
  flex-direction: row;
  position: relative;
}

.playerInfo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-image: url("@/assets/images/VectorPlayers.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.additionalInfo {
  position: absolute;
  right: 10px;
  top: 50px;
  background: none;
  border: none;
  cursor: pointer;
}

.expanded {
  transform: rotate(270deg);
}
</style>
