<template>
  <div class="teamLogoSection">
    <div class="teamHome">
      <img :src="DefaultTeamLogo" alt="default logo" />
    </div>
    <div class="teamAway">
      <img :src="EaLogo" alt="Ea logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultTeamLogo from "@/assets/images/DefaultTeamLogo.png";
import EaLogo from "@/assets/images/Ea.png";
</script>

<style scoped>
.teamLogoSection {
  width: 90px;
  display: flex;
  position: relative;
}

.teamLogoSection img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.teamHome {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #211f21;
  border: 2px solid #161616;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.teamAway {
  width: 48px;
  height: 48px;
  position: absolute;
  left: 40px;
  border-radius: 50%;
  border: 2px solid #161616;
  background-color: #211f21;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
