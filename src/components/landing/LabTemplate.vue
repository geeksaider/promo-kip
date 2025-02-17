<script setup>
import Button from "@/components/landing/Button.vue";
import Back from "@/components/landing/Back.vue";
import { ref } from "vue";

const { buttons } = defineProps(["buttons"]);
</script>
<template>
    <main>
        <section
            class="max-w-[900px] mx-auto max-sm:items-center justify-beetwen bg-gradient-to-r max-sm:flex-col max-sm:text-center max-sm:gap-10 from-neutral-100 to-neutral-200 rounded-xl gap-10 flex py-6 px-12"
        >
            <article class="flex flex-col gap-6 basis-[80%]">
                <h1 class="text-2xl font-semibold">
                    <slot name="title"></slot>
                </h1>
                <p>
                    <slot name="description"></slot>
                </p>
            </article>

            <div class="flex flex-col gap-2 justify-center max-sm:w-fit">
                <Button
                    v-for="button in buttons"
                    :img="button.ico"
                    :tag="button.type"
                    :link="button.link"
                    >{{ button.title }}</Button
                >
            </div>
        </section>
        <Back class="mt-4"></Back>
    </main>
</template>
