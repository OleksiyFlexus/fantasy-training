<template>
  <div class="timerContainer">
    {{ time }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  time: {
    type: String,
    default: "07:00",
  },
});
</script>

<style scoped>
.timerContainer {
  width: 70px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  padding: 8px 4px;
  border-radius: 40px;
  font-weight: bold;
  color: #ffffff;
}
</style>
