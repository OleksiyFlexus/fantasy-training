<template>
  <div class="winLoseSection">
    <div class="lose">L</div>
    <div class="win">W</div>
    <div class="draw">D</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.winLoseSection {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.win {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-weight: bold;
  font-size: 12px;
  border-radius: 50%;
  background-color: rgb(0, 252, 0);
}

.draw {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-weight: bold;
  font-size: 12px;
  border-radius: 50%;
  background-color: rgb(252, 252, 0);
}

.lose {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-weight: bold;
  font-size: 12px;
  border-radius: 50%;
  background-color: rgb(252, 0, 0);
}
</style>
