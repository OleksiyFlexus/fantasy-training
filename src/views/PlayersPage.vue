<template>
  <div class="playersPageContainer">
    <TopControlPanel>
      <template #left>
        <BackBtn />
      </template>
      <template #pageName>
        <p>Players</p>
      </template>
      <template #right>
        <CreateItemBtn @click="openModal" />
        <SearchBtn />
      </template>
    </TopControlPanel>

    <TheSections> Players </TheSections>
    <ThePlayer v-for="player in players" :key="player.id" :player="player" />
    <EmptyData v-if="players.length === 0"> No players found </EmptyData>

    <Modal :isActive="isModalActive" @click.self="closeAndReset">
      <ModalHeader @close="closeModal"> Create your player </ModalHeader>
      <ModalBody>
        <CreateItemForm
          :form="playerForm"
          :fields="playerFields"
          :teams="teams"
          v-model:photoFile="photoFile"
          v-model:selectedTeam="selectedTeam"
          :showTeamSelect="true" />
      </ModalBody>
      <ModalFooter>
        <SaveBtn @click="savePlayer" />
      </ModalFooter>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "@/helpers/useModal";
import { savePlayerInDB, fetchPlayers } from "@/api/player";
import { uploadImage } from "@/api/uploadImage";

const { isModalActive, openModal, closeModal } = useModal();
const players = fetchPlayers();

const playerForm = ref({ name: "", surname: "", games: 0, goals: 0, assists: 0 });
const photoFile = ref<File | null>(null);
const selectedTeam = ref("");
const teams = ref(["Team1", "Team2", "Team3"]);

const playerFields = [
  { name: "name", label: "Name", placeholder: "Enter name", type: "text" },
  { name: "surname", label: "Surname", placeholder: "Enter surname", type: "text" },
];

const savePlayer = async () => {
  if (!playerForm.value.name.trim() || !playerForm.value.surname.trim()) {
    console.warn("Форма неполная");
    return;
  }
  try {
    let photoURL = "";
    if (photoFile.value) {
      photoURL = await uploadImage(photoFile.value);
    }
    await savePlayerInDB({
      ...playerForm.value,
      photo: photoURL,
      team: selectedTeam.value,
    });

    console.log("Player saved");
    closeAndReset();
  } catch (error) {
    console.error("Ошибка при сохранении игрока:", error);
  }
};

const closeAndReset = () => {
  isModalActive.value = false;
  playerForm.value = { name: "", surname: "", games: 0, goals: 0, assists: 0 };
  selectedTeam.value = "";
  photoFile.value = null;
};
</script>

<style scoped>
.playersPageContainer {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
