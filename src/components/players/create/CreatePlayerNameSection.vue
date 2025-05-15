<template>
  <div class="playerName"> {{ firstName }} {{ lastName }} </div>
</template>

<script setup lang="ts">
import { usePlayerForm } from "@/composables/usePlayerForm";

const { firstName, lastName } = usePlayerForm();
</script>

<style scoped>
.playerName {
  display: -webkit-box;
  text-transform: capitalize;
  font-size: 24px;
  color: #ffff;
  text-overflow: ellipsis;
  max-width: 310px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
