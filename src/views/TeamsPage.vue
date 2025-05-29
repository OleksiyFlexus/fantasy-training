<template>
  <div class="teamsPageContainer">
    <TopControlPanel>
      <template #left>
        <BackBtn />
      </template>
      <template #pageName>
        <p>Teams</p>
      </template>
      <template #right>
        <CreateItemBtn @click="openModal" />
        <SearchBtn />
      </template>
    </TopControlPanel>
    <TheSections> Teams </TheSections>
    <TheTeam v-for="team in teams" :key="team.id" :team="team" />
    <EmptyData v-if="teams.length === 0"> No teams found </EmptyData>
    <Modal :isActive="isModalActive" @close="closeAndReset">
      <ModalHeader @close="closeAndReset"> Create your team </ModalHeader>
      <ModalBody>
        <CreateItemForm :form="teamForm" :fields="teamFields" v-model:photoFile="photoFile" :showTeamSelect="false" />
      </ModalBody>
      <ModalFooter>
        <SaveBtn @click="saveTeam" :disabled="!teamForm.name" />
      </ModalFooter>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "@/helpers/useModal";
import { saveTeamInDB, fetchTeams } from "@/api/team";
import { uploadImage } from "@/api/uploadImage";

const { isModalActive, openModal, closeModal } = useModal();
const teams = fetchTeams();

const teamFields = [
  {
    name: "name",
    label: "Team name",
    placeholder: "Enter team name",
    type: "text",
    required: true,
  },
];

const teamForm = ref({
  name: "",
  logo: "",
  players: [],
  games: 0,
  wins: 0,
  goals: 0,
});

const refreshTeams = () => {
  console.log("Teams data refreshed, current teams:", teams.value);
};

const photoFile = ref(null);

const closeAndReset = () => {
  closeModal();
  teamForm.value = {
    name: "",
    logo: "",
    players: [],
    games: 0,
    wins: 0,
    goals: 0,
  };
  photoFile.value = null;
  refreshTeams();
};

const saveTeam = async () => {
  if (!teamForm.value || !teamForm.value.name || teamForm.value.name.trim() === "") {
    console.warn("Form is incomplete");
    return;
  }
  try {
    let logoURL = "";
    if (photoFile.value) {
      logoURL = await uploadImage(photoFile.value, "teams");
    }

    await saveTeamInDB({
      ...teamForm.value,
      logo: logoURL,
    });
    console.log("Team saved successfully");
    closeAndReset();
  } catch (error) {
    console.error("Error saving team:", error);
  }
};
</script>

<style scoped>
.teamsPageContainer {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
