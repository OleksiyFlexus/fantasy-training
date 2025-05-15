<template>
    <div class="previousMatches">
            <div class="teamLogoSection">
                <div class="team1">
                    <img :src="DefaultTeamLogo" alt="default logo">
                </div>
                <div class="team2">
                    <img :src="EaLogo" alt="Ea logo">
                </div>
            </div>
            <div class="matchInfoSection">
                <div class="teamsName">
                    <h1>Barca</h1>
                    <p>2:0</p>
                    <h1>RMD</h1>
                </div>
                <div class="data">
                    <p>Tuesday, 16 Mar 2021 . 05.00 am</p>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import DefaultTeamLogo from '@/assets/images/DefaultTeamLogo.png'
import EaLogo from '@/assets/images/Ea.png'
</script>

<style scoped>
.previousMatches {
    display: flex;
    flex-direction: row;
    padding: 8px;
    width: 100%;
    height: 70px;
    background-color: #161616;
    border-radius: 12px;
    align-items: center;
    gap: 50px;
}

.teamLogoSection {
    display: flex;
    position: relative;
}

.teamLogoSection img {
    width: 28px;
    height: 28px;
    border-radius: 50%;

}

.team1 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #211F21;
    border: 2px solid #161616;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.team2 {
    width: 48px;
    height: 48px;
    position: absolute;
    left: 40px;
    border-radius: 50%;
    border: 2px solid #161616;
    background-color: #211F21;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.matchInfoSection {
    width: 180px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
}

.teamsName {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
}

.data {
    display: flex;
    font-size: 12px;
    line-height: 14px;
    font-weight: normal;
}

.data p {
    color: #C8F558;
}

.teamsName h1 {
    font-weight: bold;
}
</style>