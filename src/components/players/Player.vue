<template>
    <div v-for="player in players" :key="player.id" class="currentPlayerCard">
        <div class="playerTeamsContainer">
            <div class="currentPlayerCard">
                <div class="cardHeader">
                    PLAYER DETAILS
                </div>
                <div class="aboutPlayer">
                    <div class="clubLogo" :class="{ club: expandedPlayers[player.id] }">
                        <img :src="DefaultTeamLogo" alt="DefaultTeamLogo">
                    </div>
                    <div class="playerInfo">
                        <div class="playerPhoto">
                            <img :src="player.photo || DefaultPlayerPhoto" alt="PlayerPhoto" />
                        </div>
                        <div class="decorativeLine"></div>
                        <div class="playerName">
                            <h1>{{ player.name }} {{ player.surname }}</h1>
                        </div>
                    </div>
                    <button class="additionalInfo" @click="togglePlayerDetails(player.id)">
                        <ArrowLeftCircle :class="{ rotated: expandedPlayers[player.id] }" />
                    </button>
                </div>
                <div v-if="expandedPlayers[player.id]" class="additionalContent">
                    <div class="containerName">
                        <h1>PLAYER STATISTIC</h1>
                    </div>
                    <div class="playerStatContainer">
                        <div class="playerStat">
                            <GamesIcon />
                            <p>0</p>
                        </div>
                        <div class="playerStat">
                            <GoalsIcon />
                            <p>0</p>
                        </div>
                        <div class="playerStat">
                            <AssistsIcon />
                            <p>0</p>
                        </div>
                    </div>
                    <MatchHistory>
                        <TeamMatchHistory />
                    </MatchHistory>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import DefaultTeamLogo from '@/assets/images/DefaultTeamLogo.png'
import DefaultPlayerPhoto from '@/assets/images/DefaultPlayerLogo.png'

import { ArrowLeftCircle, GamesIcon, GoalsIcon, AssistsIcon } from '@/constants/importIcons'


const props = defineProps<{
    players: any[]
}>();

const expandedPlayers = ref<Record<string, boolean>>({});

const togglePlayerDetails = (playerId: string) => {
    expandedPlayers.value[playerId] = !expandedPlayers.value[playerId];
};

watch(
    () => props.players,
    (newPlayers) => {
        newPlayers.forEach(player => {
            if (!(player.id in expandedPlayers.value)) {
                expandedPlayers.value[player.id] = false;
            }
        });
    },
    { immediate: true }
);
</script>

<style scoped>
.playerTeamsContainer {
    width: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    background-color: #161616;
    color: #FFFFFF;
}

.currentPlayerCard {
    display: flex;
    flex-direction: column;
}

.aboutPlayer {
    display: flex;
    flex-direction: row;
    position: relative;
}

.cardHeader {
    display: flex;
    height: 40px;
    align-items: center;
    padding-left: 16px;
}

.clubLogo {
    min-width: 120px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('@/assets/images/ClubBackground.png');
    background-size: cover;
    border-bottom-left-radius: 12px;
}

.clubLogo img {
    width: 90px;
    height: 90px;
    object-position: center;
    object-fit: cover;
}

.playerInfo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background-image: url('@/assets/images/VectorPlayers.png');
    background-size: cover;
    background-repeat: no-repeat;
}

.playerPhoto img {
    width: 120px;
    height: 100px;
    object-position: top;
    object-fit: cover;
}

.decorativeLine {
    display: flex;
    width: 100%;
    border: 1px dashed #211F21;
}

.playerName {
    display: flex;
    font-size: 18px;
    font-weight: bold;
}

.additionalInfo {
    position: absolute;
    right: 10px;
    top: 50px;
    background: none;
    border: none;
    cursor: pointer;
    transform: rotate(180deg);
}

.rotated {
    transform: rotate(90deg);
    transition: transform 0.3s ease;
}

.club {
    border-bottom-left-radius: 0;
}

.additionalContent {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 20px;
    background-color: #1a1a1a;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    transition: all 0.3s ease;
}

.playerStatContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.playerStat {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 24px;
    gap: 8px;
    font-weight: bold;
}

.playerStatContainer svg {
    width: 30px;
    fill: #C8F558;
}
</style>