<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CounterComposition',
  setup() {
    const counter = ref(0);

    const increment = () => {
      counter.value += 1;
    };

    return {
      counter,
      increment,
    };
  },
})
</script>

<template>
  <div class="wrapper">
    <h1> Counter: {{counter}}</h1>
    <button @click="increment">+1</button>
  </div>
</template>

<style scoped>

</style>
