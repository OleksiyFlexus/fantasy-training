<template>
  <div class="lineUpPlayerName" v-if="player">
    {{ player.surname }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  player?: Object | null;
}>();
</script>

<style scoped>
.lineUpPlayerName {
  display: block;
  background-color: #02020271;
  max-width: 100px;
  padding: 3px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
