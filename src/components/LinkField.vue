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
        <div class="flex flex-col gap-4 max-sm:mb-12">
            <Accordion
                title="Лабораторные работы"
                name="first"
                :links="[
                    {
                        title: 'Практическая 1 (16.01.2025) ',
                        link: '/Labs/first',
                    },
                ]"
            />
            <Accordion
                title="Отработки"
                :links="[
                    {
                        title: 'Личный кабинет',
                        link: '#',
                    },
                ]"
            />
            <Accordion
                title="Учебная практика"
                :links="[
                    {
                        title: 'Пока пусто',
                        link: '#',
                    },
                ]"
            />
            <Accordion
                title="ПиРВП и ТИС"
                :links="[
                    {
                        title: 'Практическая 1 (14.01)',
                        link: '/PRIWP/pr1',
                    },
                    {
                        title: 'Тест (17.01)',
                        link: '/PRIWP/test1701',
                    },
                    {
                        title: 'Лабораторная 1 (21.01)',
                        link: '/PRIWP/lab1',
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
