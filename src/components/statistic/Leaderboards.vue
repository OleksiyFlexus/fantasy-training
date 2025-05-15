<template>
    <div class="leaderboardPageContent">
        <div class="leagueSelectContainer">
            <div class="leagueLogo">
                <img :src="DefaultTeamLogo" alt="default logo">
            </div>
            <div class="leagueNameContainer">
                <button>Prev</button>
                <div class="nameSection">
                    <h1>Fantasy League</h1>
                    <p>1/9</p>
                </div>
            
                <button>Next</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import DefaultTeamLogo from '@/assets/images/DefaultTeamLogo.png'
</script>

<style scoped>
.leaderboardPageContent {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
}

.leagueSelectContainer {
    width: 100%;
    gap: 20px;
    background-color: blueviolet;
    padding: 15px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.leagueLogo {
    display: flex;
    width: 120px;
}

.leagueNameContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
}

.nameSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
</style>