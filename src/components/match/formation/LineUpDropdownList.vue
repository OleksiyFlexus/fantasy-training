<template>
  <div class="lineUpDropdownList">
    <label class="dropdown-label" :class="{ 'button-active': isOpen }">
      <span @click="toggleMenu">
        {{ props.selected || "5 vs 5 (default)" }}
        <BurgerMenuIcon v-if="!isOpen" />
        <XroundeCircleIcon v-if="isOpen" :class="{ 'svg-color': isOpen }" />
      </span>
      <div v-if="isOpen" class="menu-container">
        <div v-for="option in options" :key="option" class="menu-item" @click="selectOption(option)">
          {{ option }}
        </div>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { BurgerMenuIcon, XroundeCircleIcon } from "@/constants/importIcons";

const props = defineProps<{
  selected: string;
}>();

const emit = defineEmits<{ (e: "formationSelected", value: string): void }>();

const options = ref(["5 vs 5 (default)", "6 vs 6 (custom)"]);

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: string) => {
  emit("formationSelected", option);
  isOpen.value = false;
};
</script>

<style scoped>
svg {
  fill: #c8f558;
  width: 25px;
  height: 25px;
}
.lineUpDropdownList {
  position: relative;
  width: 100%;
}

.dropdown-label {
  display: block;
}

.dropdown-label span {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #161616;
  border: 1px solid #2d2d2d;
  color: #fff;
  border-radius: 12px;
  font-weight: 800;
}

.button-active span {
  background-color: #ffff;
  color: #161616;
  border: 1px solid #c8f558;
}

.menu-container {
  position: relative;
  margin-top: 5px;
  width: 100%;
  background: #fff;
  z-index: 1000;
  border-radius: 12px;
  border: 1px solid #c8f558;
}

.menu-item {
  padding: 8px;
  font-weight: 800;
}

.menu-item:hover {
  background-color: #c8f558;
  border-radius: 12px;
}

.svg-color {
  fill: red;
}
</style>
