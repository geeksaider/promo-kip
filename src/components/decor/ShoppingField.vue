<script setup>
import ProductCard from "./ProductCard.vue";
</script>
<template>
  <section class="max-w-[1200px] mx-auto font-inter">
    <h1 class="text-3xl font-light py-12 text-center pr-11">Корзина</h1>
    <div>
      <ProductCard>
        <template #title>Товар 1</template>
        <template #index>Индекс</template>
      </ProductCard>
    </div>
  </section>
</template>
