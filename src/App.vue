<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderNavigation from '@/shared/components/HeaderNavigation.vue';
import { linkRoutes } from './router/link-routes';


</script>

<template>
  <HeaderNavigation 
    title="Breaking Bad App"
    :links="linkRoutes"
  />

  <main class="main-content">
    <RouterView />
  </main>

  <footer>
    <!-- Footer -->
  </footer>

</template>

<style scoped>

</style>
