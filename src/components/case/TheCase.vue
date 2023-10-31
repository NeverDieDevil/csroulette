<template>
  <li class="crate">
    <h5>{{ props.crate }}</h5>
    <img :src="props.img" />
  </li>
</template>

<script setup>
  import { defineProps } from "vue";
  const props = defineProps(["crate", "img"]);
</script>

<style lang="scss" scoped>
  img {
    max-width: 200px;
  }
  .crate {
    display: flex;
    flex-direction: column;
    flex: 1 0 21%;
    margin: 5px;
    padding: 5px;
    height: 250px;
    background-color: blue;
    align-items: center;
  }
</style>
