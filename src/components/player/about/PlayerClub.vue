<template>
  <div class="clubLogo" :class="{ border: expanded }">
    <img :src="DefaultTeamLogo" alt="DefaultTeamLogo" />
  </div>
</template>

<script setup lang="ts">
import DefaultTeamLogo from "@/assets/images/DefaultTeamLogo.png";

const props = defineProps<{
  expanded: boolean;
}>();
</script>

<style scoped>
.clubLogo {
  min-width: 120px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/images/ClubBackground.png");
  background-size: cover;
  border-bottom-left-radius: 12px;
}

.clubLogo img {
  width: 90px;
  height: 90px;
  object-position: center;
  object-fit: cover;
}

.border {
  border-bottom-left-radius: 0;
}
</style>
