<template>
    <div class="createTeamBtnContainer">
        <button class="createTeam" @click="createTeam">
            <CreateIcon />
        </button>
    </div>
    <Modal :isActive="isModalActive" @close="closeModal">
        <template #modalHeader>Create Team Menu</template>
        <template #modalBody>
            <div class="infoTeamSection">
                <div class="logoSection">
                    <div class="teamPreviewLogo">
                        <img v-if="localLogoUrl" :src="localLogoUrl" alt="team logo" />
                        <img v-else :src="DefaultTeamLogo" alt="default team logo">
                    </div>
                    <label class="editLogoLabel">
                        <input class="editLogo" type="file" @change="onLogoChange">
                        <EditIcon />
                    </label>

                </div>
                <div class="teamName">
                    {{ teamName }}
                </div>
            </div>
            <div class="teamData">
                <div class="input-container">
                    <input placeholder="Write your team name" class="input-field" type="text" v-model="teamName">
                    <label for="input-field" class="input-label">Team name</label>
                    <span class="input-highlight"></span>
                </div>
            </div>
        </template>
        <template #modalFooter>
            <div class="confirmationBtn">
                <button class="confirmBtn" @click="saveTeamHandler">Save</button>
            </div>
            <InfoNotification v-if="showInfo" :message="infoMessage" @close="showInfo = false" />
            <SuccessNotification v-if="showSuccess" @close="showSuccess = false" />
        </template>
    </Modal>
</template>

<script setup lang="ts">
import { CreateIcon, EditIcon } from '@/constants/importIcons';
import DefaultTeamLogo from '@/assets/images/DefaultTeamLogo.png'

import { useModal } from '@/helpers/useModal';
import { saveTeam } from '@/api/team';

const { isModalActive, openModal, closeModal } = useModal();

const createTeam = () => openModal();

const onModalClose = () => {
    clearForm();
    closeModal();
};

const teamName = ref('');
const localFile = ref<File | null>(null);
const localLogoUrl = ref<string | null>(null);

const onLogoChange = (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0] || null;
    localFile.value = file;
    localLogoUrl.value = file ? URL.createObjectURL(file) : null;
};

const showSuccess = ref(false);
const showInfo = ref(false);
const infoMessage = ref('');

const clearForm = () => {
    teamName.value = '';
    localFile.value = null;
    localLogoUrl.value = null;
    showInfo.value = false;
    showSuccess.value = false;
};

const saveTeamHandler = async () => {
    if (!teamName.value.trim()) {
        infoMessage.value = 'Please enter your team name!';
        showInfo.value = false;
        await nextTick();
        showInfo.value = true;
        setTimeout(() => {
            showInfo.value = false;
        }, 2000);
        await nextTick();
        return;
    }

    await saveTeam(
        {
            name: teamName.value.trim(),
            file: localFile.value,
        },
        async () => {
            showSuccess.value = true;
            await nextTick();
            setTimeout(() => {
                showSuccess.value = false;
                onModalClose();
            }, 2000);
        }
    );
};

</script>

<style scoped>
.createTeamBtnContainer {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #161616;
    display: flex;
    align-items: center;
    justify-content: center;
}

.createTeam {
    width: 24px;
    height: 24px;
    border-radius: 50%;
}

.infoTeamSection {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.logoSection {
    position: relative;
}

.teamPreviewLogo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
}

.editLogoLabel {
    background-color: #C8F558;
    border: 2px solid #fff;
    position: absolute;
    bottom: 10px;
    right: -10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.editLogo {
    display: none;
}

.editLogoLabel svg {
    width: 20px;
    height: 20px;
}

.teamLogo img {
    object-fit: contain;
    object-position: center;
}

.teamName {
    display: block;
    text-transform: capitalize;
    font-size: 24px;
    color: #FFFF;
    text-overflow: ellipsis;
    max-width: 275px;
    overflow: hidden;
}

.teamData {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.confirmationBtn {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.confirmBtn {
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C8F558;
    color: #000000;
    border-radius: 7px;
    font-weight: bold;
}

.team-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
}

/* Input container */
.input-container {
    width: 100%;
    height: 100%;
    margin-top: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

/* Input field */
.input-field {
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
.input-label {
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
.input-highlight {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background-color: #C8F558;
    transition: all 0.3s ease;
}

/* Input field:focus styles */
.input-field:focus+.input-label {
    top: -20px;
    font-size: 14px;
    font-weight: 800;
    color: #C8F558;
}

.input-field:focus+.input-label+.input-highlight {
    width: 100%;
}
</style>