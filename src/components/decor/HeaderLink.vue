<script setup>
const { link = "#", image } = defineProps(["link", "image"]);
console.log(image);
</script>
<template>
  <RouterLink :to="link">
    <img
      :src="`/decor/${image}.svg`"
      alt=""
      class="size-7 hover:scale-105 transition-all"
    />
  </RouterLink>
</template>
