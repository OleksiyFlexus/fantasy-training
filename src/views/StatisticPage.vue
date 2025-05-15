<template>
    <div class="pageContent">
        <TopControlPanel>
            <template #pageName>Statistic</template>
        </TopControlPanel>
        <Sections>
            Statistic
        </Sections>
        <ControlPanel>
            <button class="controlButton" :class="{ 'button-active': activeTab === 'teams-points-table' }"
                @click="changeTab('teams-points-table')">
                Teams statistic
            </button>
            <button class="controlButton" :class="{ 'button-active': activeTab === 'players-score-table' }"
                @click="changeTab('players-score-table')">
                Players statistic
            </button>
        </ControlPanel>
        <div class="contentSection">
            <TeamsPointsTable v-if="activeTab === 'teams-points-table'" />
            <PlayersScoreTable v-if="activeTab === 'players-score-table'" />
        </div>
    </div>
</template>

<script setup lang="ts">

const activeTab = ref('teams-points-table');

const changeTab = (tab: string) => {
    activeTab.value = tab;
};
</script>

<style scoped>
.controlButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    border-radius: 80px;
    color: #ffffff;
    background-color: #161616;
    border: 1px solid #2D2D2D;
    font-weight: bold;
}

.button-active {
    background-color: #FFFFFF;
    border: 1px solid #C8F558;
    color: #000000;
    font-weight: bold;
}

.contentSection {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>