<template>
  <div class="itemNameSection">
    {{ displayText }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  formData: Record<string, string>;
  fields: { name: string; label: string; placeholder?: string; type: string }[];
}>();

const displayText = computed(() => {
  if (!props.fields || !Array.isArray(props.fields)) return "";
  return props.fields.map((field) => props.formData[field.name] || "").join(" ");
});
</script>

<style scoped>
.itemNameSection {
  display: -webkit-box;
  text-transform: capitalize;
  font-size: 24px;
  color: #ffff;
  text-overflow: ellipsis;
  max-width: 310px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
