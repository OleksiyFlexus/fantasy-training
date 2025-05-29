<template>
  <div class="eventContainer">
    <EventTeamNameSection :homeTeamName="selectedHomeTeam?.name" :awayTeamName="selectedAwayTeam?.name" />
    <div class="eventTeamSection">
      <slot name="teamHome">
        <EventTeamContainer title="Home" :teamLogo="selectedHomeTeam?.logo" @openModal="openTeamSelectModal('home')" />
      </slot>
      <slot name="score">
        <EventScoreSection :timer="timer" />
      </slot>
      <slot name="teamAway">
        <EventTeamContainer title="Away" :teamLogo="selectedAwayTeam?.logo" @openModal="openTeamSelectModal('away')" />
      </slot>
    </div>
    <div class="styledBorder"></div>
    <TimerControlPanel @start="startTimer" @pause="pauseTimer" @stop="stopTimer" />
  </div>
  <Modal :isActive="isModalActive" @close="closeModal">
    <ModalHeader @close="closeModal">Choose your team</ModalHeader>
    <ModalBody>
      <TheTeam v-for="team in teams" :key="team.id" :team="team" @click="selectTeam(team)" />
    </ModalBody>
  </Modal>
</template>

<script setup lang="ts">
import { useModal } from "@/helpers/useModal";
import { fetchTeams } from "@/api/team";
import { useCountdownTimer } from "@/helpers/useTimer";

const { timer, startTimer, pauseTimer, stopTimer } = useCountdownTimer();

const { isModalActive, openModal, closeModal } = useModal();
const teams = fetchTeams();

const activeTeamSlot = ref<"home" | "away" | null>(null);

const selectedHomeTeam = ref(null);
const selectedAwayTeam = ref(null);

const openTeamSelectModal = (slot: "home" | "away") => {
  activeTeamSlot.value = slot;
  openModal();
};

const selectTeam = (team: any) => {
  if (activeTeamSlot.value === "home") {
    selectedHomeTeam.value = team;
  } else if (activeTeamSlot.value === "away") {
    selectedAwayTeam.value = team;
  }
  closeModal();
};
</script>

<style scoped>
.eventContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  background-color: #161616;
  background-image: url("@/assets/images/LooperBG.png");
  background-size: cover;
  border-radius: 15px;
  gap: 15px;
}

.eventTeamSection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
}
.styledBorder {
  width: 100%;
  border-top: 2px dashed #211f21;
}
</style>
