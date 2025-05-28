<template>
  <div class="sectionContent">
    <div class="sectionStyle">
      <slot> </slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.sectionContent {
  width: 100%;
  height: 25px;
  display: flex;
  border-bottom: 2px solid #c8f558;
}

.sectionStyle {
  width: 120px;
  height: 25px;
  background-color: #c8f558;
  color: #000000;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding: 6px 0 6px 10px;
}
</style>
