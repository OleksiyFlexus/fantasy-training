<template>
  <label class="editImgLabel">
    <EditIcon />
    <input
      type="file"
      ref="fileInput"
      accept="image/*"
      @change="handleImageChange"
      class="editImg"
    />
  </label>
</template>

<script setup lang="ts">
import { EditIcon } from "@/constants/importIcons";

const emit = defineEmits(["update:previewImg", "update:photoFile"]);

const fileInput = ref<HTMLInputElement | null>(null);

const handleImageChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      emit("update:previewImg", result);
      emit("update:photoFile", file);
    };
    reader.readAsDataURL(file);
  }
};
</script>

<style scoped>
.editImg {
  display: none;
}

.editImgLabel svg {
  width: 20px;
  height: 20px;
}
</style>
