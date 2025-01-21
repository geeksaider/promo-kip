<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const { title, links } = defineProps(["title", "links"]);

const active = ref(false);
</script>

<template>
    <section class="rounded-lg" :class="active ? 'mb-2' : ''">
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
            class="flex flex-col overflow-hidden rounded-b-xl max-h-0 gap-3 pl-8 transition-all duration-200"
            :style="active ? 'padding-bottom:' + 42 * links.length + 'px' : ''"
            :class="
                active
                    ? 'py-4 pt-8 -mt-4 ease-in bg-stone-200/30 '
                    : 'ease-out opacity-0 pointer-events-none  '
            "
        >
            <RouterLink
                :to="item.link"
                v-for="item in links"
                class="text-lg font-[550] hover:text-stone-600 w-[90%]"
                >{{ item.title }}</RouterLink
            >
        </div>
    </section>
</template>
