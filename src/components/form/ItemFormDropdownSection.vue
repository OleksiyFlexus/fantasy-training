<template>
  <div class="teamContainer">
    <div class="dropdownListWrapp">
      <div class="dropdownList">
        <p>{{ selectedTeam || "Choose your team (optional)" }}</p>
        <DetailsBtn @click="toggleDropdown" :class="{ rotated: isOpen }" />
      </div>
      <ul v-if="isOpen" class="teamList">
        <li v-for="option in teams" :key="option" @click="selectTeam(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ teams: string[]; selectedTeam: string }>();
const emit = defineEmits<{ (e: "update:selectedTeam", team: string): void }>();

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    dropdown.value?.classList.add("open");
  } else {
    dropdown.value?.classList.remove("open");
  }
};

const dropdown = ref<HTMLDivElement | null>(null);

const selectTeam = (team: string) => {
  emit("update:selectedTeam", team);
  isOpen.value = false;
};
</script>

<style scoped>
.teamContainer {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}

.dropdownListWrapp {
  width: 100%;
  position: relative;
}

.dropdownList {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid #ccc;
  padding: 10px;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
}

.teamList {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
  color: #000000;
  width: 100%;
  max-height: 90px;
  overflow-y: auto;
  background-color: #ffffff;
  padding: 10px;
  font-weight: 700;
}
.rotated {
  transform: rotate(280deg);
  transition: transform 0.3s ease;
}
</style>
