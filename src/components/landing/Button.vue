<script setup>
const {
    link,
    img,
    custom = "bg-white",
    tag = "a",
} = defineProps(["link", "img", "custom", "tag"]);
</script>
<template>
    <component
        class="flex px-5 py-1 font-bold font-xl rounded-lg items-center gap-2 hover:ring-2 hover:ring-neutral-800/10 hover:transition-all hover:ring-offset-[0.5px] hover:duration-400"
        :is="tag"
        :href="link"
        :to="link"
        :class="custom"
        target="_blank"
    >
        <img :src="'/' + img + '.svg'" alt="" class="size-4" />
        <slot></slot>
    </component>
</template>
