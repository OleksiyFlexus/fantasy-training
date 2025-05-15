<template>
  <div class="createPlayerBtnContainer">
    <button @click="createPlayer" class="createPlayerBtn">
      <CreateIcon />
    </button>
  </div>
  <Modal :isActive="isModalActive" @close="onModalClose">
    <ModalHeader @close="isModalActive = false"> Create Player </ModalHeader>
    <ModalBody>
      <CreatePlayer>
        <CreatePlayerPhotoSection :photoUrl="photoUrl" />
        <CreatePlayerNameSection :firstName="firstName" :lastName="lastName" />
        <CreatPlayerInputSection />
        <CreatePlayerDropdownSection />
      </CreatePlayer>
    </ModalBody>
    <ModalFooter></ModalFooter>
  </Modal>
</template>

<script setup lang="ts">
import { CreateIcon } from "@/constants/importIcons";
import { useModal } from "@/helpers/useModal";
import { usePlayerForm } from "@/composables/usePlayerForm";

const { firstName, lastName, photoUrl } = usePlayerForm();

const { isModalActive, openModal, closeModal } = useModal();
const createPlayer = () => openModal();
const onModalClose = () => {
  closeModal();
};
</script>

<style scoped>
.createPlayerBtnContainer {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #161616;
  display: flex;
  align-items: center;
  justify-content: center;
}

.createPlayerBtn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
</style>
