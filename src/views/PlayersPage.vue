<template>
    <div class="pageContent">
        <TopControlPanel>
            <template #pageName>Players</template>
            <SearchButton />
            <CreatePlayerBtn />
        </TopControlPanel>
        <Sections>
            Players
        </Sections>
        <DataEmpty v-if="players.length === 0">
            No players created!
        </DataEmpty>
        <Player v-else :players="players" />
    </div>
</template>

<script setup lang="ts">
import { db } from '@/firebase';
import { onValue, ref as dbRef } from 'firebase/database';

const players = ref([]);

onMounted(() => {
    const playersRef = dbRef(db, 'players');
    onValue(playersRef, (snapshot) => {
        const data = snapshot.val();
        players.value = data
            ? Object.entries(data).map(([id, player]) => ({ id, ...player }))
            : [];
    });
});
</script>

<style scoped></style>