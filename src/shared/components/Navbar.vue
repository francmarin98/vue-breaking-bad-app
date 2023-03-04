<template>
  <nav>
    <img src="@/assets/logo.svg" alt="Vue Logo" height="25" width="25">
    <span>Breaking Bad App</span>

    <RouterLink to="/"> Home </RouterLink>
    <RouterLink to="/about"> About </RouterLink>
  </nav>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<style scoped>

</style>