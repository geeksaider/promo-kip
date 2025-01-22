<script setup>
import { ref } from "vue";
const amount = ref(1);
const { price = "1000", product = "" } = defineProps(["price", "product"]);
const add = (count) => (amount.value = Math.max(1, amount.value + count));
</script>
<template>
  <section
    class="bg-white py-8 items-center px-14 border-2 flex justify-between max-w-[900px] border-black/10"
  >
    <div class="flex gap-14">
      <div>
        <img :src="product" alt="" class="size-52 aspect-squre" />
      </div>
      <div class="flex-col gap-10 flex text-left justify-center">
        <article class="text-left flex flex-col">
          <h1 class="text-2xl"><slot name="title"></slot></h1>
          <span class="text-black/60"><slot name="index"></slot></span>
        </article>
        <div class="flex gap-4 items-center">
          <img
            src="/minus.svg"
            alt=""
            class="hover:scale-105 size-4"
            @click="add(-1)"
          />
          <p class="text-2xl font-lora">{{ amount }}</p>
          <img
            src="/plus.svg"
            alt=""
            class="hover:scale-105 size-4"
            @click="add(1)"
          />
        </div>
      </div>
    </div>
    <h1 class="font-lora text-black/60 self-end text-right text-2xl my-auto">
      {{ price * amount }} ₽
    </h1>
  </section>
</template>
