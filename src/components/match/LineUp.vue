<template>
  <div class="lineUpContainer">
    <div class="dropdown">
      <label class="dropdown-label" :class="{ 'button-active': isOpen }">
        <span @click="toggleMenu">
          {{ selected || "Choose game formation" }}
          <BurgerMenuIcon v-if="!isOpen" />
          <XroundeCircleIcon v-if="isOpen" :class="{ 'svg-color': isOpen }" />
        </span>
        <div v-if="isOpen" class="menu-container">
          <div
            v-for="option in options"
            :key="option"
            class="menu-item"
            @click="selectOption(option)"
          >
            {{ option }}
          </div>
        </div>
      </label>
    </div>
    <div class="lineUpBg">
      <div class="defaultFormation" v-if="selected == ''">
        <div class="lineUpLogo">
          <img :src="DefaultTeamLogo" alt="" />
        </div>
        <div class="tipSection">
          First you need to select a formation to add players to the squads
        </div>
      </div>
      <div class="homeSquad">
        <button
          class="goalkipperHome"
          v-if="selected !== ''"
          @click="openMenu(selectedPlayers['goalkipperHome'], 'goalkipperHome')"
        >
          <LineUpItem :player="selectedPlayers['goalkipperHome']" />
        </button>
        <button
          class="defender1"
          v-if="selected !== ''"
          @click="openMenu(selectedPlayers['defender1'], 'defender1')"
        >
          <LineUpItem :player="selectedPlayers['defender1']" />
        </button>
        <button
          class="defender2"
          v-if="selected !== ''"
          :class="{ defenderFormation2: selected === '5 vs 5 (default)' }"
          @click="openMenu(selectedPlayers['defender2'], 'defender2')"
        >
          <LineUpItem :player="selectedPlayers['defender2']" />
        </button>
        <button
          class="defender3"
          v-if="selected !== ''"
          :class="{ defenderFormation3: selected === '5 vs 5 (default)' }"
          @click="openMenu(selectedPlayers['defender3'], 'defender3')"
        >
          <LineUpItem :player="selectedPlayers['defender3']" />
        </button>
        <button
          class="striker1"
          v-if="selected === '6 vs 6 (custom)'"
          @click="openMenu(selectedPlayers['striker1'], 'striker1')"
        >
          <LineUpItem :player="selectedPlayers['striker1']" />
        </button>
        <button
          class="striker2"
          v-if="selected !== ''"
          :class="{ strikerFormation2: selected === '5 vs 5 (default)' }"
          @click="openMenu(selectedPlayers['striker2'], 'striker2')"
        >
          <LineUpItem :player="selectedPlayers['striker2']" />
        </button>
      </div>
      <div class="awaySquad">
        <button
          class="goalkipperAway"
          v-if="selected !== ''"
          @click="openMenu(selectedPlayers['goalkipperAway'], 'goalkipperAway')"
        >
          <LineUpItem :player="selectedPlayers['goalkipperAway']" />
        </button>
        <button
          class="defender4"
          v-if="selected !== ''"
          @click="openMenu(selectedPlayers['defender4'], 'defender4')"
        >
          <LineUpItem :player="selectedPlayers['defender4']" />
        </button>
        <button
          class="defender5"
          v-if="selected !== ''"
          :class="{ defenderFormation5: selected === '5 vs 5 (default)' }"
          @click="openMenu(selectedPlayers['defender5'], 'defender5')"
        >
          <LineUpItem :player="selectedPlayers['defender5']" />
        </button>
        <button
          class="defender6"
          v-if="selected !== ''"
          :class="{ defenderFormation6: selected === '5 vs 5 (default)' }"
          @click="openMenu(selectedPlayers['defender6'], 'defender6')"
        >
          <LineUpItem :player="selectedPlayers['defender6']" />
        </button>
        <button
          class="striker3"
          v-if="selected === '6 vs 6 (custom)'"
          @click="openMenu(selectedPlayers['striker3'], 'striker3')"
        >
          <LineUpItem :player="selectedPlayers['striker3']" />
        </button>
        <button
          class="striker4"
          v-if="selected !== ''"
          :class="{ strikerFormation4: selected === '5 vs 5 (default)' }"
          @click="openMenu(selectedPlayers['striker4'], 'striker4')"
        >
          <LineUpItem :player="selectedPlayers['striker4']" />
        </button>
      </div>
      <div v-if="showMenu" class="overlay" @click="closeMenu">
        <div class="radial-menu" @click.stop>
          <div class="player-logo" v-if="!currentPlayer">
            <img :src="DefaultPlayerLogo" alt="DefaultPlayerLogo" />
          </div>
          <div class="player-logo" v-else>
            <img :src="currentPlayer.photo || DefaultPlayerLogo" />
          </div>
          <button class="option-a option" @click="addPlayer">
            <AddPlayerIcon />
          </button>
          <button class="option-e option" @click="removePlayer">
            <RemovePlayerIcon />
          </button>
          <button class="option-b option" @click="substitutePlayer">
            <SubstitutePlayerIcon />
          </button>
          <button class="option-c option" @click="playerAssist">
            <AssistsIcon />
          </button>
          <button class="option-d option" @click="playerScore">
            <GoalsIcon />
          </button>
        </div>
      </div>
      <Modal :isActive="isModalActive" @close="closeModal">
        <template #modalHeader> Select players </template>
        <template #modalBody>
          <div
            v-for="player in availablePlayers"
            :key="player.id"
            @click="selectPlayer(player)"
          >
            <div class="modalPlayersContainer">
              <div class="modalPlayerPhoto">
                <img
                  :src="player.photo || DefaultPlayerLogo"
                  alt="player logo"
                />
              </div>
              <div class="modalPlayerName">
                {{ player.name }} {{ player.surname }}
              </div>
            </div>
          </div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultTeamLogo from "@/assets/images/DefaultTeamLogo.png";
import DefaultPlayerLogo from "@/assets/images/DefaultPlayerLogo.png";
import {
  BurgerMenuIcon,
  XroundeCircleIcon,
  AddPlayerIcon,
  RemovePlayerIcon,
  SubstitutePlayerIcon,
  GoalsIcon,
  AssistsIcon,
} from "@/constants/importIcons";
import LineUpItem from "./LineUpItem.vue";
import { useModal } from "@/helpers/useModal";
import { useMatchStore } from "@/stores/matchStore";
import { fetchPlayers } from "@/api/player";

const { isModalActive, openModal, closeModal } = useModal();
const matchStore = useMatchStore();

const players = ref<Player[]>([]);
const currentPlayer = ref<Player | null>(null);
const selectedPlayers = ref<{ [key: string]: Player }>({});
const currentPosition = ref<string | null>(null);
const isOpen = ref(false);
const selected = ref("");
const options = ref(["5 vs 5 (default)", "6 vs 6 (custom)"]);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selected.value = option;
  isOpen.value = false;
};

const showMenu = ref(false);

const positions = [
  "goalkipperHome",
  "defender1",
  "defender2",
  "defender3",
  "striker1",
  "striker2",
  "goalkipperAway",
  "defender4",
  "defender5",
  "defender6",
  "striker3",
  "striker4",
];

const openMenu = (player: Player | null, position?: string) => {
  currentPlayer.value = player;
  currentPosition.value =
    position ||
    (player
      ? positions.find((pos) => selectedPlayers.value[pos]?.id === player.id)
      : null);
  showMenu.value = true;
};

const closeMenu = () => {
  showMenu.value = false;
};

const selectPlayer = (player: Player) => {
  if (Object.values(selectedPlayers.value).some((p) => p?.id === player.id)) {
    alert("Этот игрок уже выбран!");
    return;
  }

  if (currentPosition.value) {
    selectedPlayers.value[currentPosition.value] = player;
  } else {
    const availablePosition = positions.find(
      (pos) => !selectedPlayers.value[pos]
    );
    if (availablePosition) {
      selectedPlayers.value[availablePosition] = player;
    } else {
      alert("Все позиции заняты!");
      return;
    }
  }

  localStorage.setItem(
    "selectedPlayers",
    JSON.stringify(selectedPlayers.value)
  );
  closeModal();
};

const addPlayer = () => {
  openModal();
  closeMenu();
};

const availablePlayers = computed(() => {
  return players.value.filter(
    (p) => !Object.values(selectedPlayers.value).some((sp) => sp?.id === p.id)
  );
});

const removePlayer = () => {
  if (currentPosition.value) {
    delete selectedPlayers.value[currentPosition.value];
    localStorage.setItem(
      "selectedPlayers",
      JSON.stringify(selectedPlayers.value)
    );
  }

  closeMenu();
};

const substitutePlayer = () => {
  console.log("Substitute player");
  closeMenu();
};

const playerScore = () => {
  if (currentPlayer.value && currentPosition.value) {
    const team = currentPosition.value.includes("Home") ? "home" : "away";
    matchStore.scoreGoal(currentPlayer.value, team);
    closeMenu();
  }
};


const playerAssist = () => {
  console.log("Player Assist");
  closeMenu();
};

onMounted(() => {
  fetchPlayers((fetchedPlayers) => {
    players.value = fetchedPlayers;
    const storedPlayers = localStorage.getItem("selectedPlayers");
    if (storedPlayers) {
      selectedPlayers.value = JSON.parse(storedPlayers);
    }
  });
});
</script>

<style scoped>
svg {
  fill: #c8f558;
  width: 25px;
  height: 25px;
}

.svg-color {
  fill: red;
}

.lineUpContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
}

.lineUpBg {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background-image: url("@/assets/images/LineUpField.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 345px;
  height: 540px;
}

.lineUpLogo {
  left: 65px;
  top: 170px;
  position: absolute;
  display: flex;
  opacity: 0.5;
}

.tipSection {
  width: 320px;
  position: absolute;
  left: 10px;
  top: 70px;
  font-size: 28px;
  font-weight: 800;
  text-align: center;
  color: #050101c7;
}

.homeSquad {
  width: 100%;
  height: 270px;
  display: flex;
  position: relative;
  z-index: 2;
}

.goalkipperHome {
  position: absolute;
  top: 25px;
  left: 130px;
}

.defender1 {
  position: absolute;
  top: 108px;
  left: 130px;
}

.defender2 {
  position: absolute;
  top: 100px;
  left: 20px;
}

.defenderFormation2 {
  top: 130px;
  left: 30px;
}

.defender3 {
  position: absolute;
  top: 100px;
  right: 20px;
}

.defenderFormation3 {
  top: 130px;
  right: 30px;
}

.striker1 {
  position: absolute;
  top: 180px;
  right: 70px;
}

.striker2 {
  position: absolute;
  top: 180px;
  left: 70px;
}

.strikerFormation2 {
  top: 190px;
  left: 130px;
}

.striker2Formation {
  position: absolute;
  top: 180px;
  left: 70px;
}

.awaySquad {
  width: 100%;
  height: 270px;
  display: flex;
  position: relative;
  z-index: 2;
}

.goalkipperAway {
  position: absolute;
  bottom: 25px;
  left: 130px;
}

.defender4 {
  position: absolute;
  bottom: 108px;
  left: 130px;
}

.defender5 {
  position: absolute;
  bottom: 100px;
  left: 20px;
}

.defenderFormation5 {
  bottom: 120px;
  left: 30px;
}

.defender6 {
  position: absolute;
  bottom: 100px;
  right: 20px;
}

.defenderFormation6 {
  bottom: 120px;
  right: 30px;
}

.striker3 {
  position: absolute;
  bottom: 180px;
  right: 70px;
}

.striker4 {
  position: absolute;
  bottom: 180px;
  left: 70px;
}

.strikerFormation4 {
  bottom: 190px;
  left: 130px;
}

/* Drop down Menu */
.dropdown {
  position: relative;
  width: 100%;
}

.dropdown-label {
  display: block;
}

.dropdown-label span {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #161616;
  border: 1px solid #2d2d2d;
  color: #fff;
  border-radius: 12px;
  font-weight: 800;
}

.button-active span {
  background-color: #ffff;
  color: #161616;
  border: 1px solid #c8f558;
}

.menu-container {
  position: relative;
  margin-top: 5px;
  width: 100%;
  background: #fff;
  z-index: 1000;
  border-radius: 12px;
  border: 1px solid #c8f558;
}

.menu-item {
  padding: 8px;
  font-weight: 800;
}

.menu-item:hover {
  background-color: #c8f558;
  border-radius: 12px;
}

.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.856);
  z-index: 150;
  display: flex;
  justify-content: center;
  align-items: center;
}

.radial-menu {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.player-logo {
  border-radius: 50%;
  overflow: hidden;
}

.player-logo img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  object-position: center;
  background: transparent;
}

.option {
  position: absolute;
  background-color: #1e1e1e;
  border: 2px solid #ffdd00;
  color: #ffff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option svg {
  width: 25px;
  height: 25px;
  fill: white;
  stroke: white;
}

.option-a {
  transition-delay: 0.1s;
  top: -80px;
  left: 40px;
}

.option-b {
  transition-delay: 0.2s;
  right: -75px;
  bottom: 55px;
}

.option-c {
  transition-delay: 0.3s;
  left: -75px;
  bottom: 55px;
}

.option-d {
  transition-delay: 0.4s;
  top: -50px;
  left: -40px;
}

.option-e {
  transition-delay: 0.4s;
  top: -50px;
  right: -40px;
}

.option:hover {
  opacity: 0.8;
}

.modalPlayersContainer {
  width: 100%;
  height: 60px;
  background-color: #2d2d2d;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
}

.modalPlayerPhoto img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
}

.modalPlayerName {
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  text-transform: capitalize;
}
</style>
