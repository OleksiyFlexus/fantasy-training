<template>
  <button class="detailsBtn">
    <ArrowLeftCircle />
  </button>
</template>

<script setup lang="ts">
import { ArrowLeftCircle } from "@/constants/importIcons";
</script>

<style scoped>
.detailsBtn {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(180deg);
}
.detailsBtn svg {
  width: 24px;
  height: 24px;
}
</style>
