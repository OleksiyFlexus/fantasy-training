<template>
  <button class="closeButton" @click="$emit('click')">
    <CloseSquareIcon />
  </button>
</template>
<script setup lang="ts">
import { CloseSquareIcon } from "@/constants/importIcons";
</script>

<style scoped>
.closeButton {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.closeButton svg {
  fill: rgba(255, 15, 15, 0.911);
}
</style>
