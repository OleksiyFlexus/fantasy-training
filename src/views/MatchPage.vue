<template>
  <div class="matchPageContainer">
    <TheEvent />
    <TabPanel>
      <SwapSectionBtn v-for="tab in tabs" :key="tab" :title="tab" :activeTab="activeTab" @changeTab="changeTab" />
    </TabPanel>
    <MatchesHistorySection v-if="activeTab === 'Matches history'" />
    <TheLineUp v-if="activeTab === 'Formation'" />
    <ScoreSection v-if="activeTab === 'Protocol'" />
  </div>
</template>

<script setup lang="ts">
const tabs = ref(["Formation", "Protocol", "Matches history"]);
const activeTab = ref("Formation");

const changeTab = (tab: string) => {
  activeTab.value = tab;
};
</script>

<style scoped>
.matchPageContainer {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
