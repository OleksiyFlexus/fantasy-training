<template>
    <div class="pageContent">
        <TopControlPanel>
            <template #pageName>Teams</template>
            <SearchButton />
            <CreateTeamBtn />
        </TopControlPanel>
        <Sections>
            Teams
        </Sections>
        <DataEmpty v-if="teams.length === 0">
            No teams created!
        </DataEmpty>
        <Team v-else :teams="teams" />
    </div>
</template>

<script setup lang="ts">
import { db } from '@/firebase';
import { onValue, ref as dbRef } from 'firebase/database';

const teams = ref([]);

onMounted(() => {
    const teamsRef = dbRef(db, 'teams');
    onValue(teamsRef, (snapshot) => {
        const data = snapshot.val();
        teams.value = data
            ? Object.entries(data).map(([id, team]) => ({ id, ...team }))
            : [];
    });
});
</script>

<style scoped></style>