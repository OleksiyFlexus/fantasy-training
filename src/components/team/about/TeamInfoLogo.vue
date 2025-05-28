<template>
  <div class="teamLogo">
    <img v-if="team && team.logo" :src="team.logo" alt="Team Logo" />
    <img v-else :src="DefaultTeamLogo" alt="Team Logo" />
  </div>
</template>

<script setup lang="ts">
import DefaultTeamLogo from "@/assets/images/DefaultTeamLogo.png";

const props = defineProps({
  team: Object,
});
</script>

<style scoped>
.teamLogo {
  width: 48px;
  height: 48px;
  background-color: #6d9c9b33;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
