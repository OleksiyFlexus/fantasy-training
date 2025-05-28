<template>
  <div class="teamsInfoSection">
    <div class="teamSection">
      <TeamInfoLogo :team="team" />
      <TeamInfoName :team="team" />
    </div>
    <DetailsBtn @click="toggleTeamDetails" :class="{ rotated: expanded }" />
  </div>
  <TeamAdditionalInfo v-if="expanded" :team="team" />
</template>

<script setup lang="ts">
const props = defineProps<{
  team: Team;
}>();

const expanded = ref(false);

const toggleTeamDetails = () => {
  expanded.value = !expanded.value;
};
</script>

<style scoped>
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

.rotated {
  transform: rotate(270deg);
}
</style>
