<template>
  <div class="lineUpContainer">
    <LineUpDropdownList :selected="selectedFormation" @formationSelected="changeFormation" />
    <LineUpFormation :formation="selectedFormation" />
  </div>
</template>

<script setup lang="ts">
const selectedFormation = ref("5 vs 5 (default)");

const changeFormation = (formation: string) => {
  selectedFormation.value = formation;
};
</script>

<style scoped>
.lineUpContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
}
</style>
