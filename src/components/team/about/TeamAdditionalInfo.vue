<template>
  <div class="teamDetails">
    <div class="teamDetailsHeader">
      <h1>TEAM STATISTIC</h1>
    </div>
    <AdditionalInfoMathesSection />
    <AdditionalInfoItems />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.teamDetails {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
