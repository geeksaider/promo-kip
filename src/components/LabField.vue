<script setup>
import Button from "./Button.vue";
import Back from "./Back.vue";
</script>
<template>
    <main class="font-cute">
        <section
            class="max-w-[900px] mx-auto justify-around bg-gradient-to-r from-neutral-100 to-neutral-200 rounded-xl flex py-6"
        >
            <div class="flex flex-col gap-6">
                <article class="flex flex-col gap-1">
                    <h1 class="text-2xl font-semibold">Корзина</h1>
                    <p>
                        Построение диаграммы "Вариантов использования"<br />
                        и диаграммы "Последовательности", генерация кода
                    </p>
                </article>
                <article class="flex flex-col gap-2">
                    <h2 class="text-lg font-semibold">Референсы:</h2>
                    <div class="flex gap-2 items-center">
                        <img
                            src="/ali.svg"
                            alt=""
                            class="size-10 rounded-lg hover:ring hover:ring-neutral-800/20 hover:transition-all hover:ring-offset-[0.5px] hover:duration-300"
                        />
                        <span class="text-2xl text-neutral-800/40">|</span>
                        <img
                            src="/wild.svg"
                            alt=""
                            class="size-10 rounded-lg hover:ring hover:ring-neutral-800/20 hover:transition-all hover:ring-offset-[0.5px] hover:duration-300"
                        />
                        <span class="text-2xl text-neutral-800/40">|</span>
                        <img
                            src="/ozon.svg"
                            alt=""
                            class="size-10 rounded-lg hover:ring hover:ring-neutral-800/20 hover:transition-all hover:ring-offset-[0.5px] hover:duration-300"
                        />
                    </div>
                </article>
            </div>
            <div class="flex flex-col gap-2 justify-center">
                <Button img="figma" link="/">UI Figma</Button>
                <Button img="diagram" link="/">Диаграммы</Button>
                <Button img="link" link="/">Сайт</Button>
            </div>
        </section>
        <Back></Back>
    </main>
</template>
