<script setup>
import Button from "./Button.vue";
import { ref } from "vue";
import PageHeader from "./decor/PageHeader.vue";
import Back from "./Back.vue";

const { number, description, code } = defineProps([
  "number",
  "description",
  "code",
]);
const state = ref(false);
</script>
<template>
  <h1 class="col-span-1">{{ number }}</h1>
  <p class="col-span-8">{{ description }}</p>
  <Button
    img="click"
    tag="button"
    class="col-span-3 w-fit mx-auto"
    @click="state ? (state = false) : (state = true)"
    >Посмотреть</Button
  >
  <div
    class="fixed bg-black/20 backdrop-blur-sm w-screen border-b border-b-gray-400 h-screen inset-0 flex items-center justify-center"
    @click="state ? (state = false) : (state = true)"
    :class="state ? 'block' : 'hidden'"
  >
    <div
      class="bg-white w-[50vw] h-[50vh] rounded-lg flex flex-col"
      @click.stop
    >
      <PageHeader class="mx-auto pr-0">Код</PageHeader>
      <img src="" alt="" />
      <div class="flex gap-4 mx-auto w-fit">
        <Button
          class="bg-black/40 w-fit mx-auto active:bg-black/50 text-white"
          img="play-code"
          >Запустить</Button
        >
        <Back
          custom="bg-black/40 hover:ring hover:ring-neutral-800/10"
          fill="#FFFFFF"
        ></Back>
      </div>
    </div>
  </div>
</template>
