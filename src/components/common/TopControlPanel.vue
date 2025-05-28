<template>
  <div class="controlPanelContainer">
    <div class="leftSection">
      <slot name="left"></slot>
      <div class="pageName">
        <slot name="pageName"></slot>
        <p>Live Matches</p>
      </div>
    </div>
    <div class="rightSection">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.controlPanelContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.leftSection {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.rightSection {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.pageName {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 32px;
  line-height: 24px;
  font-weight: bold;
  color: #ffffff;
}

.pageName p {
  font-size: 12px;
}
</style>
