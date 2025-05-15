<template>
    <div v-for="team in teams" :key="team.id" class="teamSection">
        <div class="teamContainer">
            <div class="teamsInfoSection" :class="{ showedDetails: expandedTeams[team.id] }">
                <div class="teamSection">
                    <div class="teamLogo">
                        <img :src="team.logo || DefaultTeamLogo" alt="Team Logo" />
                    </div>
                    <div class="teamName">
                        <h1>{{ team.name }}</h1>
                    </div>
                </div>
                <button class="detailsBtn" @click="toggleTeamDetails(team.id)">
                    <ArrowLeftCircle :class="{ rotated: expandedTeams[team.id] }" />
                </button>
            </div>
            <div v-if="expandedTeams[team.id]" class="teamDetails">
                <div class="teamDetailsHeader">
                    <h1>TEAM STATISTIC</h1>
                </div>
                <div class="teamStatSection">
                    <div class="teamStat">
                        <GamesIcon />
                        <div class="teamStatcount">
                            <span>Games</span>
                            <p>0</p>
                        </div>
                    </div>
                    <div class="teamStat">
                        <GoalsIcon />
                        <div class="teamStatcount">
                            <span>Goals</span>
                            <p>0</p>
                        </div>
                    </div>
                    <div class="teamStat">
                        <TrophyIcon />
                        <div class="teamStatcount">
                            <span>Wins</span>
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <div class="lastMatchesSection">
                    <div class="lastMatchHeader">
                        <h1>LAST MATCHES</h1>
                        <div class="winLoseSection">
                            <p>L</p>
                        </div>
                        <ViewMoreMatchesBtn />
                    </div>
                    <div class="matchHistory">
                        <TeamMatchHistory />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import DefaultTeamLogo from '@/assets/images/DefaultTeamLogo.png'
import { ArrowLeftCircle, GamesIcon, GoalsIcon, TrophyIcon } from '@/constants/importIcons';
import { fetchTeams } from '@/api/team';

const props = defineProps({
    teams: {
        type: Array,
        required: true
    }
});

const expandedTeams = ref<Record<string, boolean>>({});

const toggleTeamDetails = (teamId: string) => {
    expandedTeams.value[teamId] = !expandedTeams.value[teamId];
};

onMounted(() => {
    props.teams.forEach(team => {
        expandedTeams.value[team.id] = false;
    });
});
</script>

<style scoped>
.teamContainer {
    width: 100%;
    border-radius: 12px;
    background-color: #2D2D2D;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 20px;
}

.teamsInfoSection {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #ffffffa1;
}

.teamSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
}

.teamName {
    font-size: 18px;
    font-weight: bold;
}

.teamLogo {
    width: 48px;
    height: 48px;
    background-color: #6d9c9b33;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.detailsBtn {
    transform: rotate(180deg);
}

.showedDetails {
    border-bottom: none;
}

.rotated {
    transform: rotate(90deg);
    transition: transform 0.3s ease;
}

.teamDetails {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-bottom: 1px solid #ffffffa1;
    padding-bottom: 10px;
}

.teamStatSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.teamStatSection svg {
    width: 30px;
    height: 30px;
    fill: #C8F558;
}

.teamStat {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 24px;
    gap: 8px;
    font-weight: bold;
}

.teamStatcount {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.teamStatcount span {
    font-size: 16px;
    font-weight: normal;
    color: #ffffff;
}

.lastMatchesSection {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.lastMatchHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

.lastMatchHeader button {
    color: #98be37;
}

.matchHistory {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}

.winLoseSection {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgb(252, 0, 0);
}
</style>