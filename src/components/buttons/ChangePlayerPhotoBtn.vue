<template>
  <label>
    <slot />
    <input class="editPhoto" type="file" accept="image/*" @change="onPhotoSelected" />
  </label>
</template>

<script setup lang="ts">
import { usePlayerForm } from "@/composables/usePlayerForm";

const { photoUrl, photoFile } = usePlayerForm();

function onPhotoSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    photoFile.value = file;
    photoUrl.value = URL.createObjectURL(file);
  }
}
</script>

<style scoped>
.editPhoto {
  display: none;
}
</style>
