<script setup>
import HeaderLink from "./HeaderLink.vue";
import ProductCard from "./ProductCard.vue";
</script>
<template>
  <section
    class="font-inter max-w-[1200px] mx-auto py-8 flex justify-between items-center"
  >
    <div class="flex gap-2 items-center">
      <img src="/decor/geo.svg" alt="Гео метка" class="size-8" />
      <p class="text-xl font-light">Moscow</p>
    </div>
    <h1 class="uppercase text-3xl font-lora text-center font-bold">vélo.</h1>
    <div class="flex gap-4 w-fit">
      <HeaderLink image="search"></HeaderLink>
      <HeaderLink image="lovely"></HeaderLink>
      <HeaderLink image="backet"></HeaderLink>
      <HeaderLink image="user"></HeaderLink>
    </div>
  </section>
  <div class="bg-black/10 h-[1px] w-screen"></div>
</template>
