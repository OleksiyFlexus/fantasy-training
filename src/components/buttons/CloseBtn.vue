<template>
  <button class="closeBtn" @click="$emit('click')">
    <CloseSquareIcon />
  </button>
</template>
<script setup lang="ts">
import { CloseSquareIcon } from "@/constants/importIcons";
const emit = defineEmits(["click"]);
</script>

<style scoped>
.closeBtn {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.closeBtn svg {
  fill: rgba(255, 15, 15, 0.911);
}
</style>
