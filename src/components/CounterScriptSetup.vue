<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);

const increment = () => {
  counter.value += 1;
};

</script>

<template>
  <div class="wrapper">
    <h1> Counter: {{counter}}</h1>
    <button @click="increment">+1</button>
  </div>
</template>

<style scoped>

</style>
