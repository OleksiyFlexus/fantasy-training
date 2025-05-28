<template>
  <div class="allMatchesPage">
    <div class="allMatchesPageContainer">
      <TopControlPanel>
        <template #left>
          <BackBtn />
        </template>
        <template #pageName>
          <p>All Matches</p>
        </template>
      </TopControlPanel>
      <PreviousMatch />
    </div>
  </div>
</template>

<script setup lang="ts">
import PreviousMatch from "@/components/match/history/PreviousMatch.vue";
</script>

<style scoped>
.allMatchesPage {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("@/assets/images/Vector.png") center / contain no-repeat;
  background-color: #1a2017c0;
}

.allMatchesPageContainer {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
