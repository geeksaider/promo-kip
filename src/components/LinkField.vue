<script setup>
import Accordion from "@/components/Accordion.vue";
</script>

<template>
    <section
        class="flex justify-around max-w-[900px] mx-auto gap-4 max-sm:flex-wrap"
    >
        <img
            src="/assets/myface.jpeg"
            alt=""
            class="max-h-[60vh] object-contain rounded-lg max-sm:hidden"
        />
        <div class="flex flex-col gap-4 max-sm:gap-4 max-sm:mb-12">
            <Accordion
                title="Лабораторные работы"
                name="first"
                :links="[
                    {
                        title: 'Практическая 1 (16.01.2025) ',
                        link: '/firstLab',
                    },
                    {
                        title: 'Работа 2',
                        link: '#',
                    },
                    {
                        title: 'Работа 3',
                        link: '#',
                    },
                ]"
            />
            <Accordion
                title="Доработки"
                :links="[
                    {
                        title: 'Работа 1',
                        link: '#',
                    },
                    {
                        title: 'Работа 2',
                        link: '#',
                    },
                    {
                        title: 'Работа 3',
                        link: '#',
                    },
                ]"
            />
            <Accordion
                title="Учебная практика"
                :links="[
                    {
                        title: 'Работа 1',
                        link: '#',
                    },
                    {
                        title: 'Работа 2',
                        link: '#',
                    },
                    {
                        title: 'Работа 3',
                        link: '#',
                    },
                ]"
            />
            <a
                href=""
                class="text-2xl flex flex-col gap-1 w-fit mx-auto uppercase group font-semibold"
            >
                Ссылка на сайт
                <div
                    class="w-0 h-0.5 transition-all bg-black rounded-3xl group-hover:w-full"
                ></div
            ></a>
        </div>
    </section>
</template>
