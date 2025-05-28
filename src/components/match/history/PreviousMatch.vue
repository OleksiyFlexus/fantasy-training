<template>
  <div class="previousMatches">
    <PreviousMatchTeams />
    <TeamShowdownSection>
      <PreviousMatchInfo />
      <PreviousMatchInfoDate />
    </TeamShowdownSection>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.previousMatches {
  display: flex;
  flex-direction: row;
  padding: 8px;
  width: 100%;
  height: 70px;
  background-color: #161616;
  border-radius: 12px;
  align-items: center;
  gap: 20px;
}
</style>
