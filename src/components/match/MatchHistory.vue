<template>
    <div class="matchHistoryContainer">
        <div class="headerSection">
            <h1>MATCH HISTORY</h1>
            <ViewMoreMatchesBtn />
        </div>
        <slot>
        </slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.matchHistoryContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.headerSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

</style>