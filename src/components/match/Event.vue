<template>
  <div class="eventContainer">
    <div class="teamNameSection">
      <h1>{{ team.home?.name || "Home" }}</h1>
      <p>VS</p>
      <h1>{{ team.away?.name || "Away" }}</h1>
    </div>
    <div class="teamSection">
      <div class="teamContainer" @click="openTeamSelection('home')">
        <img :src="team.home?.logo || DefaultTeamLogo" alt="home logo" />
        <h1>HOME</h1>
      </div>
      <div class="scoreSectionWrapp">
        <div class="scoreSection">
          <div class="score">{{ matchStore.homeScore }}</div>
          <div class="dots">:</div>
          <div class="score">{{ matchStore.awayScore }}</div>
        </div>
        <button class="timerSection" @click="openModalTimer">
          <h1>{{ formattedTime }}</h1>
        </button>
      </div>
      <div class="teamContainer" @click="openTeamSelection('away')">
        <img :src="team.away?.logo || DefaultTeamLogo" alt="away logo" />
        <h1>AWAY</h1>
      </div>
    </div>
    <div class="styledBorder"></div>
    <div class="buttonSection">
      <button class="matchBtn" @click="startTimer">
        <PlaybackStart />Start
      </button>
      <button class="matchBtn" @click="pauseTimer">
        <AnimationPause />Pause
      </button>
      <button class="matchBtn" @click="resetTimer">
        <AnimationStop />Reset
      </button>
    </div>
  </div>

  <Modal :isActive="isModalActiveTeam" @close="closeModalTeam">
    <template #modalHeader> Select team </template>
    <template #modalBody>
      <div
        v-for="team in teams"
        :key="team.id"
        class="teamOption"
        @click="selectTeam(team)"
      >
        <div class="modalTeamContainer">
          <div class="modalTeamLogo">
            <img :src="team.logo || DefaultTeamLogo" alt="team logo" />
          </div>
          <div class="modalTeamName">{{ team.name }}</div>
        </div>
      </div>
    </template>
  </Modal>

  <Modal :isActive="isModalActiveTimer" @close="closeModalTimer">
    <template #modalHeader> Timer </template>
    <template #modalBody>
      <div class="timerModalBody">
        <input
          class="minutesInput"
          type="number"
          v-model="inputMinutes"
          placeholder="min"
          min="0"
        />
        <span>:</span>
        <input
          class="secondsInput"
          type="number"
          v-model="inputSeconds"
          placeholder="sec"
          min="0"
        />
      </div>
    </template>
    <template #modalFooter>
      <button class="confirmBtn" @click="setTimer">Save</button>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { useModal } from "@/helpers/useModal";
import DefaultTeamLogo from "@/assets/images/DefaultTeamLogo.png";
import {
  AnimationStop,
  PlaybackStart,
  AnimationPause,
} from "@/constants/importIcons";
import { useTeamSelection } from "@/helpers/useTeamSelection";
import { useTimer } from "@/helpers/useTimer";
import { useMatchStore } from "@/stores/matchStore";

const { team } = useTeamSelection();

const emit = defineEmits(["update:time"]);
const matchStore = useMatchStore();

const {
  isRunning,
  timeInSeconds,
  inputMinutes,
  inputSeconds,
  formattedTime,
  startTimer,
  pauseTimer,
  resetTimer,
  setTimer,
} = useTimer(emit);

const {
  isModalActive: isModalActiveTimer,
  openModal: openModalTimer,
  closeModal: closeModalTimer,
} = useModal();

const timerValue = ref("07:00");
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

.teamNameSection {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  justify-content: center;
}

.teamSection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
}

.scoreSectionWrapp {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.scoreSection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
  font-size: 56px;
  color: #ffffff;
  font-weight: bold;
}

.timerSection {
  width: 70px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  padding: 8px 4px;
  border-radius: 40px;
  font-weight: bold;
}

.teamContainer {
  background-color: #2d2d2d;
  opacity: 0.9;
  border-radius: 25px;
  padding: 16px 16px 22px;
  min-width: 80px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.teamContainer img {
  width: 48px;
  height: 48px;
  object-position: center;
  object-fit: cover;
}

.modalTeamContainer {
  width: 100%;
  height: 60px;
  background-color: #2d2d2d;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
}

.modalTeamLogo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.modalTeamName {
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  text-transform: capitalize;
}

.timerModalBody {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  gap: 10px;
}

.buttonSection {
  display: flex;
  justify-content: space-between;
}

.matchBtn {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 90px;
  height: 30px;
  color: #c8f558;
}

.matchBtn svg {
  fill: #4f6614;
  width: 24px;
}

.styledBorder {
  width: 100%;
  border-top: 2px dashed #211f21;
}

.minutesInput {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 80px;
  text-align: center;
}

.secondsInput {
  color: #ffffff;
  width: 80px;
  text-align: center;
}

.confirmBtn {
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c8f558;
  color: #000000;
  border-radius: 7px;
  font-weight: bold;
}
</style>
