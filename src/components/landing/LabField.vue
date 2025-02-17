<script setup>
import Button from "@/components/landing/Button.vue";
import Back from "@/components/landing/Back.vue";
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
            class="fixed inset-0 min-h-full min-w-full transition-all bg-black/30 backdrop-blur-sm"
            :class="open"
            @click="changeModal()"
        >
            <div
                class="mx-auto overflow-visible max-w-[900px] h-screen flex items-center justify-center flex-col gap-4"
                @click.stop
                @click="changeModal()"
            >
                <img
                    :src="'/firstLab/' + photo + '_ref.jpg'"
                    alt=""
                    class="rounded-lg"
                    @click.stop
                />

                <div class="flex justify-center items-center gap-4" @click.stop>
                    <a
                        :href="'/firstLab/' + photo + '_ref.jpg'"
                        class="p-2 rounded-full size-10 flex hover:-translate-y-[1px] transition-all bg-white"
                        target="_blanc"
                    >
                        <img src="/open-full.svg" alt="" />
                    </a>
                    <Button
                        :class="photo == 'figma' ? 'block' : 'hidden'"
                        img="link"
                        link="https://www.figma.com/design/W8VpoC2aF7K0eKitm6JMhX/Untitled?node-id=2-206&t=E1rjvrmZi5dwEJDG-1"
                        tag="a"
                    >
                        Figma
                    </Button>
                    <Back
                        custom="bg-white"
                        link="#"
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
