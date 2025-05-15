<template>
  <div class="playerPreviewCotainer">
    <div class="playerPreviewPhoto">
      <img v-if="photoUrl" :src="photoUrl" alt="Player Photo" />
      <img v-else :src="DefaultPlayerLogo" alt="Default Player Photo" />
    </div>
    <div class="editPhotoContainer">
      <ChangePlayerPhotoBtn>
        <EditIcon />
      </ChangePlayerPhotoBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultPlayerLogo from "@/assets/images/DefaultPlayerLogo.png";
import { EditIcon } from "@/constants/importIcons";
import { usePlayerForm } from "@/composables/usePlayerForm";

const { photoUrl } = usePlayerForm();
</script>

<style scoped>
.playerPreviewCotainer {
  position: relative;
}

.playerPreviewCotainer img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: top;
}
.playerPreviewPhoto {
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
}

.editPhotoContainer {
  position: absolute;
  top: 70px;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #c8f558;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.editPhotoContainer svg {
  width: 20px;
  height: 20px;
}
</style>
