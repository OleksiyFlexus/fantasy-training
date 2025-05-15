<template>
  <div class="teamСontainer" ref="dropdown">
    <div class="dropdownListWrapp">
      <div class="dropdownList" @click="toggleDropdown">
        <p>{{ selectedTeam || "Choose your team (optional)" }}</p>
        <button class="openListBtn">
          <ArrowLeftCircle :class="{ rotated: isOpen }" />
        </button>
      </div>
      <ul v-if="isOpen" class="teamList">
        <li v-for="option in teams" :key="option" @click="selectTeam(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ArrowLeftCircle } from "@/constants/importIcons";

const isOpen = ref(false);
const teams = ref(["Team 1", "Team 2", "Team 3"]);
const selectedTeam = ref("");

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectTeam = (team: string) => {
  selectedTeam.value = team;
  isOpen.value = false;
};
</script>

<style scoped>
.teamСontainer {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}

.dropdownListWrapp {
  width: 100%;
  position: relative;
}

.dropdownList {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid #ccc;
  padding: 10px;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
}

.teamList {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
  color: #000000;
  width: 100%;
  max-height: 90px;
  overflow-y: auto;
  background-color: #ffffff;
  padding: 10px;
  font-weight: 700;
}

.openListBtn {
  display: flex;
  transform: rotate(180deg);
}
.rotated {
  transform: rotate(90deg);
  transition: transform 0.3s ease;
}
</style>
