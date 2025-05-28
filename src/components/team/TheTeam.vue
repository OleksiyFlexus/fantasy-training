<template>
  <div class="teamContainer">
    <TeamInfo :team="team" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  team: Object;
}>();
</script>

<style scoped>
.teamContainer {
  width: 100%;
  border-radius: 12px;
  background-color: #2d2d2d;
  display: flex;
  flex-direction: column;
  padding: 13px;
  gap: 20px;
}
</style>
