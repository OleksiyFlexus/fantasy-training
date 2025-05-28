<template>
  <div v-if="props.isActive" class="modalOverlay">
    <div class="modalContainer">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 99999;
}

.modalContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #222232;
  padding: 15px;
  border-radius: 8px;
  max-width: 500px;
  max-height: 700px;
  overflow: auto;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease, transform 0.3s ease;
  margin: 20px;
}
</style>
