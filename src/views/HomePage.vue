<template>
  <div class="body_gradient">
  </div>
  <div class="backgroundLayout">
  </div>
  <div class="pageContent">
    <div class="headerSection">
      <h1>Hi Manager,</h1>
      <p>Let’s keep a note of all the kicks.</p>
    </div>
    <div class="mainSection">
      <Sections>
        Menu
      </Sections>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
.headerSection {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.headerSection h1 {
  font-size: 32px;
  line-height: 24px;
  font-weight: bold;
}

.headerSection p {
  font-size: 12px;
  line-height: 14px;
  color: #ffffffa2;
}
</style>