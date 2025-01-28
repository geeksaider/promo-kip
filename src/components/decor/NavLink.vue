<script setup>
import { defineProps } from "vue";
const { active = false } = defineProps(["active"]);
</script>
<template>
    <article class="group w-fit">
        <h3 class="text-lg text-black/70"><slot></slot></h3>
        <div
            class="w-0 h-0.5 transition-all duration-300 bg-black rounded-3xl group-hover:w-full"
            :class="active ? 'w-full' : ''"
        ></div>
    </article>
</template>
