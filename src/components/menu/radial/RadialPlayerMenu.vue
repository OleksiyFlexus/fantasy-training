<template>
  <div class="overlay" @click="closeRadialMenu">
    <div class="radialMenu" @click.stop>
      <RadialMenuCenterItem :playerPhoto="selectedPlayer?.photo" />
      <div v-for="option in menuItems" :key="option.id">
        <RadialMenuBtn :style="getRadialStyle(option)" @click="option.onClick">
          <component :is="option.icon" />
        </RadialMenuBtn>
      </div>
    </div>
    <Modal :isActive="isModalActive">
      <ModalHeader @close="closeModal">{{ title }}</ModalHeader>
      <ModalBody @click.stop>
        <EmptyData v-if="players.length === 0"> No players found </EmptyData>
        <ThePlayer v-for="player in players" :key="player.id" :player="player" @click="handlePlayerSelected(player)" />
      </ModalBody>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { AddPlayerIcon, RemovePlayerIcon, SubstitutePlayerIcon, AssistsIcon, GoalsIcon } from "@/constants/importIcons";
import { useModal } from "@/helpers/useModal";
import { fetchPlayers } from "@/api/player";
import { addPlayerToPosition, removePlayerFromPosition, substitutePlayer, homePlayersByPosition, awayPlayersByPosition } from "@/stores/playerStore";
import { addPlayerGoal, addPlayerAssist } from "@/stores/playerScoreStore";
import { getRadialStyle } from "@/helpers/getRadialMenuStyle";

const props = defineProps<{
  position: Position;
  team: string;
  selectedPlayer?: any;
}>();

const title = ref("");

const emit = defineEmits(["closeRadialMenu", "playerSelected", "removePlayer"]);

const { isModalActive, openModal, closeModal } = useModal();

const players = fetchPlayers();

const actionMode = ref<"add" | "substitute">("add");

const handleRemovePlayer = () => {
  if (props.position && props.team) {
    removePlayerFromPosition(props.team, props.position);
    emit("removePlayer");
    emit("closeRadialMenu");
  }
};

const handleSubstitution = () => {
  title.value = "Select player for substitute";
  openModal();
};

const handlePlayerSelected = (player: any) => {
  if (props.position && props.team && player) {
    if (actionMode.value === "add") {
      addPlayerToPosition(player, props.position, props.team);
    } else if (actionMode.value === "substitute") {
      substitutePlayer(player, props.position, props.team);
    }
  }
  emit("playerSelected", player);
  closeModal();
  emit("closeRadialMenu");
  actionMode.value = "add";
};

const addPlayer = () => {
  title.value = "Select player for add to squad";
  openModal();
};

const removePlayer = () => {
  handleRemovePlayer();
};

const playerAssist = () => {
  const playersByTeam = props.team === "home" ? homePlayersByPosition.value : awayPlayersByPosition.value;
  const player = playersByTeam[props.position];

  if (player) {
    addPlayerAssist(player, props.position, props.team);
    console.log(`Added assist for ${player.name} at position ${props.position} in ${props.team} team`);
  } else {
    console.warn(`No player at position ${props.position} in ${props.team} team to add assist`);
  }

  emit("closeRadialMenu");
};

const playerGoals = () => {
  const playersByTeam = props.team === "home" ? homePlayersByPosition.value : awayPlayersByPosition.value;
  const player = playersByTeam[props.position];

  if (player) {
    addPlayerGoal(player, props.position, props.team);
    console.log(`Added goal for ${player.name} at position ${props.position} in ${props.team} team`);
  } else {
    console.warn(`No player at position ${props.position} in ${props.team} team to add goal`);
  }

  emit("closeRadialMenu");
};

const menuItems = [
  { id: "addPlayer", icon: AddPlayerIcon, top: -80, left: 40, onClick: addPlayer },
  { id: "removePlayer", icon: RemovePlayerIcon, right: -75, bottom: 55, onClick: removePlayer },
  { id: "substitutePlayer", icon: SubstitutePlayerIcon, left: -75, bottom: 55, onClick: handleSubstitution },
  { id: "playerAssist", icon: AssistsIcon, top: -50, left: -40, onClick: playerAssist },
  { id: "playerGoals", icon: GoalsIcon, top: -50, right: -40, onClick: playerGoals },
];

const closeRadialMenu = () => {
  emit("closeRadialMenu");
};
</script>

<style scoped>
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

.radialMenu {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.radialMenu svg {
  width: 25px;
  height: 25px;
  fill: #ffff;
}
</style>
