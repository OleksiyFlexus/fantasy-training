<template>
  <button class="lineUpItemContainer">
    <PlayerItemImgFrame :player="playerData" />
    <PlayerItemName :player="playerData" />
  </button>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { homePlayersByPosition, awayPlayersByPosition } from "@/stores/playerStore";

const props = defineProps<{
  player?: Object;
  position?: any; // Changed from string to any to match the Position type
  team?: string;
}>();

const localPlayerData = ref<Object | null>(null);

const updatePlayerData = () => {
  if (props.player) {
    localPlayerData.value = props.player;
  } else if (props.position && props.team) {
    const playersByTeam = props.team === "home" ? homePlayersByPosition.value : awayPlayersByPosition.value;
    const positionKey = typeof props.position === 'string' ? props.position : props.position.class;
    localPlayerData.value = playersByTeam[positionKey];
  } else {
    localPlayerData.value = null;
  }
};

watch(() => props.player, updatePlayerData, { immediate: true });
watch(() => props.position, updatePlayerData, { immediate: true });
watch(() => props.team, updatePlayerData, { immediate: true });
watch(() => homePlayersByPosition.value, updatePlayerData, { deep: true });
watch(() => awayPlayersByPosition.value, updatePlayerData, { deep: true });
onMounted(updatePlayerData);

const playerData = computed(() => localPlayerData.value);
</script>

<style scoped>
.lineUpItemContainer {
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}
</style>
