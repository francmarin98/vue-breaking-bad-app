<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from '@/shared/components/Navbar.vue';


</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <!-- Footer -->
  </footer>

</template>

<style scoped>

</style>
