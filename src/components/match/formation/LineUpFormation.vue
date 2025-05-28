<template>
  <div class="formationBg">
    <div class="formation">
      <FormationHomeSquad :formation="props.formation" />
      <FormationAwaySquad :formation="props.formation" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ formation: string }>();
</script>

<style scoped>
.formationBg {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background-image: url("@/assets/images/LineUpField.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 345px;
  height: 540px;
}

.formation {
  position: relative;
  width: 100%;
  height: 540px;
}

.awaySquad {
  height: 270px;
}
</style>
