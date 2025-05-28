<template>
  <div v-for="field in fields" :key="field.name" class="inputContainer">
    <input :type="field.type" :placeholder="field.placeholder" v-model="formData[field.name]" class="inputField" :maxlength="25" required />
    <label class="inputLabel">{{ field.label }} </label>
    <span class="inputHighlight"></span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  fields: {
    name: string;
    label: string;
    placeholder: string;
    type: string;
  }[];
  formData: Record<string, string>;
}>();
</script>

<style scoped>
.inputContainer {
  width: 100%;
  height: 100%;
  margin-top: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Input field */
.inputField {
  display: flex;
  width: 100%;
  padding: 10px;
  font-size: 18px;
  font-weight: 800;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  background-color: transparent;
  color: #ffff;
}

/* Input label */
.inputLabel {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 22px;
  font-weight: 800;
  color: rgba(204, 204, 204, 0);
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Input highlight */
.inputHighlight {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #c8f558;
  transition: all 0.3s ease;
}

/* Input field:focus styles */
.inputField:focus + .inputLabel {
  top: -20px;
  font-size: 14px;
  font-weight: 800;
  color: #c8f558;
}

.inputField:focus + .inputLabel + .inputHighlight {
  width: 100%;
}

.inputField:invalid + .inputHighlight {
  border-color: #cf1f1f;
}
</style>
