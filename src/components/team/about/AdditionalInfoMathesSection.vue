<template>
  <div class="lastMatchHeader">
    <h1>LAST MATCHES</h1>
    <AdditionalInfoLastMatches />
    <ViewMoreMatchesBtn />
  </div>
</template>

<script setup lang="ts">
import AdditionalInfoLastMatches from "./AdditionalInfoLastMatches.vue";
</script>

<style scoped>
.lastMatchHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
</style>
