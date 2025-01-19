<script setup>
import Button from "./Button.vue";
import Back from "./Back.vue";
import { ref } from "vue";

const photo = ref(" ");
const open = ref("hidden");
function changeModal(name) {
    photo.value = name;
    open.value == "hidden" ? (open.value = "block") : (open.value = "hidden");
}
</script>
<template>
    <main>
        <section
            class="absolute inset-0 min-h-screen min-w-screen bg-black/30 backdrop-blur-sm"
            @click="changeModal()"
            :class="open"
        >
            <div
                class="max-w-[900px] mx-auto h-screen flex items-center justify-center flex-col gap-4"
            >
                <img
                    :src="'/firstLab/' + photo + '_ref.jpg'"
                    alt=""
                    class="rounded-lg"
                />
                <Button
                    img="link"
                    tag="a"
                    link="https://www.figma.com/design/W8VpoC2aF7K0eKitm6JMhX/Untitled?node-id=2-206&t=E1rjvrmZi5dwEJDG-1"
                    :class="photo == 'figma' ? 'block' : 'hidden'"
                    >Figma</Button
                >
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
        <Back></Back>
    </main>
</template>
