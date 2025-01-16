<script setup>
import { ref } from "vue";
const { title, links } = defineProps(["title", "links"]);

const active = ref(false);

function updateState() {
  active.value == false ? (active.value = true) : (active.value = false);
  console.log(active.value);
}
</script>

<template>
  <section
    class="rounded-lg group transition-all duration-500"
    :class="active ? '' : ''"
  >
    <div
      class="bg-stone-200 pr-8 pl-4 py-2 font-semibold text-xl rounded-lg cursor-pointer flex items-center gap-4 mb-0 transition-all duration-300 ease-out"
      @click="updateState()"
    >
      <img
        src="/arrow.svg"
        alt=""
        class="bg-white p-1.5 rounded-full duration-300 transition-transform ease-out"
        :class="active ? '-rotate-180' : ''"
      />
      <p>{{ title }}</p>
    </div>
    <div
      class="h-0 flex flex-col pl-4 overflow-hidden gap-2 transition-all ease-out duration-[1000ms]"
      :class="active ? 'h-full  py-4 bg-stone-100' : ''"
    >
      <a
        :href="item.link"
        v-for="item in links"
        target="_blank"
        class="hover:text-stone-600"
        >{{ item.title }}</a
      >
    </div>
  </section>
</template>
