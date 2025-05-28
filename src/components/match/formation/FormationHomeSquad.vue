<template>
  <div class="homeSquad">
    <div v-for="position in positionsArray" :key="position.class">
      <div class="item" :style="getStyle(position)">
        <FormationPlayerItem :position="position.class" team="home" @click="openRadialMenu(position, 'home')" />
      </div>
    </div>
  </div>
  <RadialPlayerMenu
    v-if="showRadialMenu"
    @closeRadialMenu="showRadialMenu = false"
    @playerSelected="playerSelected"
    @removePlayer="handleRemovePlayer"
    :position="currentPosition"
    :team="currentTeam">
  </RadialPlayerMenu>
</template>

<script setup lang="ts">
import { getHomePositions, getStyle } from "@/helpers/getFormationStyle";

type Position = {
  class: string;
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
};

const props = defineProps<{ formation: string }>();

const positionsArray = computed<Position[]>(() => {
  return getHomePositions(props.formation);
});

const emit = defineEmits<{ (e: "openRadialMenu", position: string, team: string): void }>();

const currentPosition = ref<string>("");
const currentTeam = ref<string>("");
const showRadialMenu = ref<boolean>(false);

const openRadialMenu = (position: Position, team: string) => {
  currentPosition.value = position.class;
  currentTeam.value = team;
  showRadialMenu.value = true;
};

const handleRemovePlayer = () => {
  showRadialMenu.value = false;
};

const playerSelected = (player: any) => {
  console.log("Player selected:", player, "for position:", currentPosition.value, "team:", currentTeam.value);
  showRadialMenu.value = false;
};
</script>

<style scoped>
.homeSquad {
  height: 270px;
}

.item {
  position: absolute;
}
</style>
