<template>
  <div class="matchHistoryContainer">
    <div class="headerSection">
      <h1>MATCH HISTORY</h1>
      <ViewMoreMatchesBtn />
    </div>
    <PreviousMatch v-for="match in matches" :key="match.id" />
  </div>
</template>

<script setup lang="ts">
const matches = ref([{ id: 1 }, { id: 2 }, { id: 3 }]);
</script>

<style scoped>
.matchHistoryContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.headerSection {
  display: flex;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
}
</style>
