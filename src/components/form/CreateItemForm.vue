<template>
  <div class="createItemForm">
    <ItemFormImgSection :photoFile="photoFile" @update:photoFile="emit('update:photoFile', $event)" />
    <ItemFormNameSection :formData="form" :fields="fields" />
    <ItemFormInputSection :fields="fields" :formData="form" />
    <ItemFormDropdownSection
      v-if="props.showTeamSelect"
      :teams="teams"
      :selectedTeam="props.selectedTeam"
      @update:selectedTeam="emit('update:selectedTeam', $event)"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  form: Record<string, any>;
  fields: { name: string; label: string; placeholder?: string; type: string }[];
  photoFile: File | null;
  teams?: string[];
  showTeamSelect: boolean;
}>();

const emit = defineEmits<{
  (e: "update:photoFile", value: File | null): void;
  (e: "update:selectedTeam", value: string): void;
}>();
const { form, fields, photoFile } = props;
const teams = ["Team1", "Team2", "Team3"];
</script>
<style scoped>
.createItemForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
</style>
