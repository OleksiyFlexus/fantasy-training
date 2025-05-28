<template>
  <div class="playerScore">
    <div class="goals" v-if="goals > 0">
      <GoalsIcon />
      x{{ goals }}
    </div>
    <div class="assists" v-if="assists > 0">
      <AssistsIcon />
      x{{ assists }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { AssistsIcon, GoalsIcon } from "@/constants/importIcons";

const props = defineProps<{
  goals?: number;
  assists?: number;
}>();
</script>

<style scoped>
.playerScore {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 15px;
}

.playerScore svg {
  width: 35px;
  height: 35px;
  fill: #ffffff;
}

.goals,
.assists {
  color: #ffffff;
  font-weight: 800;
}
</style>
