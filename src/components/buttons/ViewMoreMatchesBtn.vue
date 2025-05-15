<template>
    <div>
        <button class="viewMoreBtn" @click="() => { router.push('/match-history') }">View All</button>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
</script>

<style scoped>
.viewMoreBtn {
    color: #C8F558;
}
</style>