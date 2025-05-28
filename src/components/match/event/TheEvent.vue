<template>
  <div class="eventContainer">
    <EventTeamNameSection />
    <div class="eventTeamSection">
      <slot name="teamHome">
        <EventTeamContainer title="Home" />
      </slot>
      <slot name="score">
        <EventScoreSection />
      </slot>
      <slot name="teamAway">
        <EventTeamContainer title="Away" />
      </slot>
    </div>
    <div class="styledBorder"></div>
    <TimerControlPanel />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.eventContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  background-color: #161616;
  background-image: url("@/assets/images/LooperBG.png");
  background-size: cover;
  border-radius: 15px;
  gap: 15px;
}

.eventTeamSection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
}
.styledBorder {
  width: 100%;
  border-top: 2px dashed #211f21;
}
</style>
