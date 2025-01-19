<script setup>
import Button from "./Button.vue";
import Back from "./Back.vue";
import { ref } from "vue";

const photo = ref(" ");
const open = ref("hidden");
const full = ref({
    state: "inactive",
    button: "block",
    screen: "max-w-[900px]",
    image: "founded-lg",
    close: "hidden",
    figma: "hidden",
});
function changeModal(name) {
    photo.value = name;
    open.value == "hidden" ? (open.value = "block") : (open.value = "hidden");
}
function reSize() {
    if (full.value.state == "inactive") {
        full.value = {
            state: "active",
            button: "hidden",
            screen: "max-w-screen",
            image: "h-screen px-2 py-8",
            close: "block",
            figma: "hidden",
        };
    } else {
        full.value = {
            state: "inactive",
            button: "block",
            screen: "max-w-[900px]",
            image: "",
            close: "hidden",
            figma: "hidden",
        };
    }
}
</script>
<template>
    <main>
        <section
            class="absolute inset-0 min-h-full min-w-full transition-all bg-black/30 backdrop-blur-sm"
            :class="open"
        >
            <div
                class="mx-auto overflow-visible h-screen flex items-center justify-center flex-col gap-4"
                :class="full.screen"
            >
                <img
                    :src="'/firstLab/' + photo + '_ref.jpg'"
                    alt=""
                    class="rounded-lg"
                    :class="full.image"
                />
                <button
                    class="absolute top-1 right-9 font-bold text-xl bg-red-400 p-4 px-6 rounded-full hover:text-2xl"
                    :class="full.close"
                    @click="reSize()"
                >
                    X
                </button>
                <div class="flex items-center justify-center gap-4">
                    <button
                        class="bg-white p-2 rounded-full hover:-translate-y-[1px] transition-all"
                        :class="full.button"
                        @click="reSize()"
                    >
                        <img src="/full-arrow.svg" alt="" />
                    </button>
                    <Button
                        img="link"
                        tag="a"
                        link="https://www.figma.com/design/W8VpoC2aF7K0eKitm6JMhX/Untitled?node-id=2-206&t=E1rjvrmZi5dwEJDG-1"
                        :class="photo == 'figma' ? 'block' : 'hidden'"
                        >Figma</Button
                    >
                    <Back
                        custom="bg-white"
                        link="#"
                        :class="full.button"
                        @click="changeModal()"
                    ></Back>
                </div>
            </div>
        </section>
        <section
            class="max-w-[900px] mx-auto max-sm:items-center justify-around bg-gradient-to-r max-sm:flex-col max-sm:text-center max-sm:gap-10 from-neutral-100 to-neutral-200 rounded-xl flex py-6"
        >
            <div class="flex flex-col gap-6">
                <article class="flex flex-col gap-1">
                    <h1 class="text-2xl font-semibold">Корзина</h1>
                    <p>
                        Построение диаграммы "Вариантов использования"<br />
                        и диаграммы "Последовательности",<br />
                        генерация кода
                    </p>
                </article>
                <article class="flex flex-col gap-2">
                    <h2 class="text-lg font-semibold">Референсы:</h2>
                    <div class="flex gap-2 items-center max-sm:justify-center">
                        <img
                            src="/ali.svg"
                            @click="changeModal('ali')"
                            alt=""
                            class="size-10 rounded-lg hover:ring hover:ring-neutral-800/20 hover:transition-all hover:ring-offset-[0.5px] hover:duration-300"
                        />
                        <span class="text-2xl text-neutral-800/40">|</span>
                        <img
                            @click="changeModal('wb')"
                            src="/wild.svg"
                            alt=""
                            class="size-10 rounded-lg hover:ring hover:ring-neutral-800/20 hover:transition-all hover:ring-offset-[0.5px] hover:duration-300"
                        />
                        <span class="text-2xl text-neutral-800/40">|</span>
                        <img
                            @click="changeModal('ozon')"
                            src="/ozon.svg"
                            alt=""
                            class="size-10 rounded-lg hover:ring hover:ring-neutral-800/20 hover:transition-all hover:ring-offset-[0.5px] hover:duration-300"
                        />
                    </div>
                </article>
            </div>
            <div class="flex flex-col gap-2 justify-center max-sm:w-fit">
                <Button
                    @click="changeModal('figma')"
                    img="figma"
                    tag="button"
                    link=""
                    >UI Figma</Button
                >
                <Button img="diagram" tag="button" link="/">Диаграммы</Button>
                <Button img="link" tag="RouterLink" link="#">Сайт</Button>
                <Button img="word" link="/firstLab/pr1.pdf">Отчет</Button>
            </div>
        </section>
        <Back class="mt-4"></Back>
    </main>
</template>
