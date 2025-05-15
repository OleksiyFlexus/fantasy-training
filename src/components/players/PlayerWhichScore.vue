<template>
  <div class="playerInfo">
    <div class="playerPhoto">
      <img :src="player.photo || DefaultPlayerPhoto" alt="Player Photo" />
    </div>
    <div class="playerName">
      <h1>{{ player.name }} {{ player.surname }}</h1>
      <h2>{{ player.team?.name || "Без команды" }}</h2>
    </div>
    <div class="playerScore">
      <!-- Отображение голов, если они есть -->
      <div v-if="player.goals > 0" class="goals">
        <GoalsIcon />
        x{{ player.goals }}
      </div>

      <!-- Отображение ассистов, если они есть -->
      <div v-if="player.assists > 0" class="assists">
        <AssistsIcon />
        x{{ player.assists }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultPlayerPhoto from "@/assets/images/DefaultPlayerLogo.png";
import { AssistsIcon, GoalsIcon } from "@/constants/importIcons";

interface Player {
  id: number;
  name: string;
  surname: string;
  photo: string;
  team?: {
    id: string;
    name: string;
    [key: string]: any;
  } | null;
  goals?: number;
  assists?: number;
}

interface Props {
  player: Player;
}

const props = defineProps<Props>();
</script>

<style scoped>
.playerInfo {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.playerPhoto {
  width: 48px;
  height: 48px;
  background-color: #6d9c9b33;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.playerPhoto img {
  width: 48px;
  object-fit: contain;
  object-position: center;
}

.playerName {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.playerName h2 {
  font-size: 12px;
  line-height: 14px;
  font-weight: normal;
  color: #ffffff8e;
}

.playerName h1 {
  font-size: 16px;
  font-weight: bold;
}

.playerScore {
  display: flex;
  align-items: center;
  gap: 20px;
}

.playerScore svg {
  width: 35px;
  height: 35px;
  fill: #ffffff;
}

.goals,
.assists {
  color: #ffffff;
  font-weight: 800;
}
</style>
