<template>
  <div class="pageContent">
    <Event />
    <Sections>Details</Sections>
    <ControlPanel>
      <button
        class="controlButton"
        :class="{ 'button-active': activeTab === 'statistic' }"
        @click="changeTab('statistic')"
      >
        Statistic
      </button>
      <button
        class="controlButton"
        :class="{ 'button-active': activeTab === 'lineup' }"
        @click="changeTab('lineup')"
      >
        Line up
      </button>
      <button
        class="controlButton"
        :class="{ 'button-active': activeTab === 'match-history' }"
        @click="changeTab('match-history')"
      >
        History
      </button>
    </ControlPanel>
    <div class="contentSection">
      <Statistic
        v-if="activeTab === 'statistic'"
        :team="team"
        :matchStore="matchStore"
      >
        <PlayerWhichScore v-if="matchStore.goalScorer" :player="matchStore.goalScorer" />
      </Statistic>
      <LineUp v-if="activeTab === 'lineup'"></LineUp>
      <MatchHistory v-if="activeTab === 'match-history'">
        <TeamMatchHistory />
      </MatchHistory>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMatchStore } from "@/stores/matchStore";
import { useTeamSelection } from "@/helpers/useTeamSelection";

const { team } = useTeamSelection();

const matchStore = useMatchStore();

const activeTab = ref("statistic");

const changeTab = (tab: string) => {
  activeTab.value = tab;
};
</script>

<style scoped>
.controlButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  border-radius: 80px;
  color: #ffffff;
  background-color: #161616;
  border: 1px solid #2d2d2d;
  font-weight: bold;
}

.button-active {
  background-color: #ffffff;
  border: 1px solid #c8f558;
  color: #000000;
  font-weight: bold;
}
</style>
