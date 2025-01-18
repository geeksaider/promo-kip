<script setup>
const { link, img, custom } = defineProps(["link", "img", "custom"]);
</script>
<template>
    <a
        class="bg-white flex font-cute px-5 py-1 font-bold font-xl rounded-lg items-center gap-2 hover:ring-2 hover:ring-neutral-800/10 hover:transition-all hover:ring-offset-[0.5px] hover:duration-400"
        :href="link"
        :class="custom"
        target="_blank"
    >
        <img :src="'/' + img + '.svg'" alt="" class="size-4" />
        <slot></slot>
    </a>
</template>
