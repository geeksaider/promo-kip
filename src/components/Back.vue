<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import Undo from "./icons/Undo.vue";
console.log(fill.value);
const {
  custom = "bg-gradient-to-r from-neutral-200/70 to-neutral-200",
  link = "/",
  fill = "black",
} = defineProps(["custom", "link", "fill"]);
</script>
<template>
  <RouterLink :to="link" class="flex justify-center">
    <Undo
      class="p-2 rounded-full size-10 flex hover:-translate-y-[1px] transition-all"
      :class="custom"
      :fill="fill.value"
    ></Undo>
  </RouterLink>
</template>
