<template>
   <button class="viewMoreBtn" @click="() => { router.push('/all-matches') }">View All</button>
</template>

<script setup lang="ts">
import router from '@/router';
</script>

<style scoped>
.viewMoreBtn {
    color: #C8F558;
}
</style>
