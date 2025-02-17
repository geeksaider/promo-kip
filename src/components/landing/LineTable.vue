<script setup>
import Button from "@/components/landing/Button.vue";
import { ref } from "vue";
import Back from "@/components/landing/Back.vue";

const { number, description, code } = defineProps([
    "number",
    "description",
    "code",
]);
const state = ref(false);

function checkingState() {
    return state.value ? (state.value = false) : (state.value = true);
}
</script>
<template>
    <h1 class="col-span-1">{{ number }}</h1>
    <p class="col-span-8">{{ description }}</p>
    <Button
        img="click"
        tag="button"
        class="col-span-3 w-fit mx-auto"
        @click="checkingState()"
        >Посмотреть</Button
    >
    <div
        class="fixed bg-black/20 backdrop-blur-sm w-screen border-b border-b-gray-400 h-screen inset-0 flex items-center justify-center"
        @click="checkingState()"
        :class="state ? 'block' : 'hidden'"
    >
        <div
            class="bg-white w-[50vw] h-[50vh] rounded-lg flex flex-col"
            @click.stop
        >
            <h1 class="text-5xl py-12 mx-auto p-0">Код</h1>
            <img src="" alt="" />
            <div class="flex gap-4 mx-auto w-fit">
                <Button
                    class="bg-black w-fit mx-auto active:bg-black/50 text-white"
                    custom="bg-black/40"
                    img="play-code"
                    >Запустить</Button
                >
                <Back
                    custom="bg-black/40 hover:ring hover:ring-neutral-800/10 fill-white"
                    to="/Table"
                    @click="checkingState()"
                ></Back>
            </div>
        </div>
    </div>
</template>
