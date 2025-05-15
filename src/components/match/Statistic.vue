<template>
  <div class="matchStatisticContainer">
    <div class="headerSection">
      <h1>TOP PLAYERS</h1>
  </div>
    <slot> </slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.matchStatisticContainer {
  width: 100%;
  background-color: #161616;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
}

.goalScorerSection,
.matchWinnerSection {
  background-color: #2d2d2d;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.goalScorerTitle,
.matchWinnerTitle {
  font-weight: bold;
  margin-bottom: 10px;
  color: #c8f558;
}

.goalScorerDetails {
  display: flex;
  align-items: center;
  gap: 10px;
}

.goalScorerDetails img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.goalScorerName {
  font-size: 16px;
  color: #ffffff;
}

.matchWinnerDetails {
  font-size: 18px;
  color: #c8f558;
  font-weight: bold;
}
</style>
