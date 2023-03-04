<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderNavigation from '@/shared/components/HeaderNavigation.vue';


</script>

<template>
  <HeaderNavigation />

  <main class="main-content">
    <RouterView />
  </main>

  <footer>
    <!-- Footer -->
  </footer>

</template>

<style scoped>

</style>
