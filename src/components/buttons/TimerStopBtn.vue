<template>
    <button class="timerStopBtn"><AnimationStop />Stop</button>
  </template>
  
  <script setup lang="ts">
  import { AnimationStop } from "@/constants/importIcons";
  </script>
  
  <style scoped>
  .timerStopBtn {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 90px;
    height: 30px;
    color: #c8f558;
  }
  
  .timerStopBtn svg {
    width: 30px;
    height: 30px;
  }
  </style>
  