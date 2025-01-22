<script setup>
const { link, image } = defineProps(["link", "image"]);
</script>
<template>
  <RouterLink :to="link">
    <img src="`/decor/${{ image }}`.svg" alt="" />
  </RouterLink>
</template>
