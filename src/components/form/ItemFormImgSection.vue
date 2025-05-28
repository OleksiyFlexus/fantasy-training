<template>
  <div class="itemPreviewCotainer">
    <div class="itemPreviewImg">
      <img :src="previewImg || defaultImg" alt="Entity Photo" />
    </div>
    <div class="editImgContainer">
      <EditImgBtn :previewImg="previewImg" @update:previewImg="previewImg = $event" @update:photoFile="emit('update:photoFile', $event)" />
    </div>
  </div>
</template>
<script setup lang="ts">
import DefaultPlayerLogo from "@/assets/images/DefaultPlayerLogo.png";
import DefaultTeamLogo from "@/assets/images/DefaultTeamLogo.png";

const route = useRoute();

const previewImg = ref<string | null>(null);

const defaultImg = computed(() => (route.path.startsWith("/teams") ? DefaultTeamLogo : DefaultPlayerLogo));

const emit = defineEmits(["update:photoFile"]);
</script>
<style scoped>
.itemPreviewCotainer {
  position: relative;
}

.itemPreviewImg {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}
.itemPreviewImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.editImgContainer {
  width: 40px;
  height: 40px;
  position: absolute;
  background-color: #c8f558;
  border: 2px solid #fff;
  bottom: 10px;
  right: -10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
