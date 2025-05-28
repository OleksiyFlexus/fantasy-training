<template>
  <div class="statisticPageContainer">
    <TabPanel>
      <SwapSectionBtn @changeTab="changeTab" title="Teams statistic" :activeTab="activeTab" />
      <SwapSectionBtn @changeTab="changeTab" title="Players statistic" :activeTab="activeTab" />
    </TabPanel>
    <PlayersScoreTable v-if="activeTab === 'Players statistic'" />
    <TeamsPointsTable v-if="activeTab === 'Teams statistic'" />
  </div>
</template>

<script setup lang="ts">
const activeTab = ref("Teams statistic");

const changeTab = (tab: string) => {
  activeTab.value = tab;
};
</script>

<style scoped>
.statisticPageContainer {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
