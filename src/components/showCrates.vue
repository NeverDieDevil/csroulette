<template>
  <ul class="grid">
    <TheCase
      v-for="crate in store.crates"
      :key="crate.id"
      :crate="crate.name"
      :img="crate.image"
    ></TheCase>
  </ul>
</template>

<script setup>
  import TheCase from "../components/case/TheCase.vue";
  import { useCaseStore } from "../stores/caseStore";
  const store = useCaseStore();
  store.fetchData();
</script>

<style lang="scss" scoped>
  .grid {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
