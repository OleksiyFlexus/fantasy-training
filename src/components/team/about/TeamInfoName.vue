<template>
  <div class="teamName">
    <h1>{{ team && team.name ? team.name : "Team name" }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  team: Object,
});
</script>

<style scoped>
.teamName {
  font-size: 18px;
  font-weight: bold;
}
</style>
