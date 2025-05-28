<template>
  <div class="eventTeamContainer">
    <img :src="DefaultTeamLogo" alt="DefaultTeamLogo" />
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
import DefaultTeamLogo from "@/assets/images/DefaultTeamLogo.png";

const props = defineProps({
  title: {
    type: String,
    home: "Home",
    away: "Away",
  },
});
</script>

<style scoped>
.eventTeamContainer {
  background-color: #2d2d2d;
  opacity: 0.9;
  border-radius: 25px;
  padding: 16px 16px 22px;
  min-width: 120px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.eventTeamContainer img {
  width: 65px;
  height: 65px;
  object-position: center;
  object-fit: cover;
}
</style>
