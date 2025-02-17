<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import Undo from "@/components/icons/Undo.vue";
const {
    custom = "bg-gradient-to-r from-neutral-200/70 to-neutral-200",
    link = "/",
    fill = "white",
} = defineProps(["custom", "link", "fill"]);
</script>
<template>
    <RouterLink :to="link" class="flex justify-center">
        <Undo
            class="p-2 rounded-full size-10 flex hover:-translate-y-[1px] transition-all"
            :class="custom"
        ></Undo>
    </RouterLink>
</template>
