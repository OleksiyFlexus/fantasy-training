<template>
  <button class="controlButton" :class="{ 'button-active': activeTab === title }" @click="changeTab(title)">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  activeTab: string;
}>();

const emit = defineEmits<{ changeTab: [tab: string] }>();

const changeTab = (tab: string) => {
  emit("changeTab", tab);
};
</script>

<style scoped>
.controlButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 80px;
  color: #ffffff;
  background-color: #161616;
  border: 1px solid #2d2d2d;
  font-weight: bold;
}

.button-active {
  background-color: #ffffff;
  border: 1px solid #c8f558;
  color: #000000;
  font-weight: bold;
}
</style>
