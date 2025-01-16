<script setup>
import { ref } from "vue";
const { title, links } = defineProps(["title", "links"]);

const active = ref(false);
</script>

<template>
  <section class="rounded-lg">
    <div
      class="pr-8 pl-4 py-2 font-semibold text-xl rounded-lg cursor-pointer bg-stone-200 flex items-center gap-4"
      :class="active ? '' : ''"
      @click="active = !active"
    >
      <img
        src="/arrow.svg"
        alt=""
        class="bg-white p-1.5 rounded-full duration-300 transition-transform"
        :class="active ? '-rotate-180' : ''"
      />
      <p>{{ title }}</p>
    </div>
    <div
      class="flex flex-col pt-8 -mt-4 overflow-hidden rounded-b-xl max-h-0 gap-3 pl-8 transition-all duration-200"
      :class="
        active
          ? 'pb-32 py-4 ease-in bg-stone-200/10 '
          : 'ease-out opacity-0 pointer-events-none  '
      "
    >
      <a
        :href="item.link"
        v-for="item in links"
        target="_blank"
        class="text-lg font-[550] hover:text-stone-600 w-[90%]"
        >{{ item.title }}</a
      >
    </div>
  </section>
</template>
