<script setup>
const { title, links } = defineProps(["title", "links"]);
</script>

<template>
    <details
        class="bg-stone-100 rounded-b-md group transition-all duration-500"
    >
        <summary
            class="bg-stone-200 px-8 py-2 font-semibold text-xl rounded-md cursor-pointer list-none flex items-center gap-4 mb-0 transition-all duration-300 group-open:mb-4 ease-out"
        >
            <img
                src="/arrow.svg"
                alt=""
                class="bg-white p-1.5 rounded-full group-open:-rotate-180 duration-300 transition-transform ease-out"
            />
            <p>{{ title }}</p>
        </summary>
        <div
            class="flex flex-col px-8 gap-2 -mb-16 group-open:mb-0 transition-all ease-out duration-300"
        >
            <a
                :href="item.link"
                v-for="item in links"
                target="_blank"
                class="last:mb-4"
                >{{ item.title }}</a
            >
        </div>
    </details>
</template>
