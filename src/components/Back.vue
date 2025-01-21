<script setup>
import { RouterLink } from "vue-router";

const {
    custom = "bg-gradient-to-r from-neutral-200/70 to-neutral-200",
    link = "/",
} = defineProps(["custom", "link"]);
</script>
<template>
    <RouterLink :to="link" class="flex justify-center">
        <img
            src="/undo.svg"
            alt=""
            class="p-2 rounded-full size-10 flex hover:-translate-y-[1px] transition-all"
            :class="custom"
        />
    </RouterLink>
</template>
