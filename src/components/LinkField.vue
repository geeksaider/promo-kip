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
                        link: '',
                    },
                    {
                        title: 'Работа 3',
                        link: '',
                    },
                ]"
            />
            <Accordion
                title="Доработки"
                :links="[
                    {
                        title: 'Работа 1',
                        link: '',
                    },
                    {
                        title: 'Работа 2',
                        link: 'https://www.google.com/imgres?q=%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0&imgurl=https%3A%2F%2Fcdnn21.img.ria.ru%2Fimages%2F07e5%2F05%2F11%2F1732647541_0%3A200%3A1920%3A1280_1920x0_80_0_0_dd4c418518310b9d20c8d8029948008a.jpg&imgrefurl=https%3A%2F%2Fria.ru%2F20210801%2Fsobaki-1743819444.html&docid=Ym0YDqlJQKqSgM&tbnid=ClTZeK4ctHHIQM&vet=12ahUKEwji0cXx4fOKAxU_JhAIHSt1MPIQM3oECGMQAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwji0cXx4fOKAxU_JhAIHSt1MPIQM3oECGMQAA',
                    },
                    {
                        title: 'Работа 3',
                        link: 'https://www.google.com/imgres?q=%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0&imgurl=https%3A%2F%2Fcdnn21.img.ria.ru%2Fimages%2F07e5%2F05%2F11%2F1732647541_0%3A200%3A1920%3A1280_1920x0_80_0_0_dd4c418518310b9d20c8d8029948008a.jpg&imgrefurl=https%3A%2F%2Fria.ru%2F20210801%2Fsobaki-1743819444.html&docid=Ym0YDqlJQKqSgM&tbnid=ClTZeK4ctHHIQM&vet=12ahUKEwji0cXx4fOKAxU_JhAIHSt1MPIQM3oECGMQAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwji0cXx4fOKAxU_JhAIHSt1MPIQM3oECGMQAA',
                    },
                ]"
            />
            <Accordion
                title="Учебная практика"
                :links="[
                    {
                        title: 'Работа 1',
                        link: 'https://www.google.com/imgres?q=%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0&imgurl=https%3A%2F%2Fcdnn21.img.ria.ru%2Fimages%2F07e5%2F05%2F11%2F1732647541_0%3A200%3A1920%3A1280_1920x0_80_0_0_dd4c418518310b9d20c8d8029948008a.jpg&imgrefurl=https%3A%2F%2Fria.ru%2F20210801%2Fsobaki-1743819444.html&docid=Ym0YDqlJQKqSgM&tbnid=ClTZeK4ctHHIQM&vet=12ahUKEwji0cXx4fOKAxU_JhAIHSt1MPIQM3oECGMQAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwji0cXx4fOKAxU_JhAIHSt1MPIQM3oECGMQAA',
                    },
                    {
                        title: 'Работа 2',
                        link: 'https://www.google.com/imgres?q=%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0&imgurl=https%3A%2F%2Fcdnn21.img.ria.ru%2Fimages%2F07e5%2F05%2F11%2F1732647541_0%3A200%3A1920%3A1280_1920x0_80_0_0_dd4c418518310b9d20c8d8029948008a.jpg&imgrefurl=https%3A%2F%2Fria.ru%2F20210801%2Fsobaki-1743819444.html&docid=Ym0YDqlJQKqSgM&tbnid=ClTZeK4ctHHIQM&vet=12ahUKEwji0cXx4fOKAxU_JhAIHSt1MPIQM3oECGMQAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwji0cXx4fOKAxU_JhAIHSt1MPIQM3oECGMQAA',
                    },
                    {
                        title: 'Работа 3',
                        link: 'https://www.google.com/imgres?q=%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0&imgurl=https%3A%2F%2Fcdnn21.img.ria.ru%2Fimages%2F07e5%2F05%2F11%2F1732647541_0%3A200%3A1920%3A1280_1920x0_80_0_0_dd4c418518310b9d20c8d8029948008a.jpg&imgrefurl=https%3A%2F%2Fria.ru%2F20210801%2Fsobaki-1743819444.html&docid=Ym0YDqlJQKqSgM&tbnid=ClTZeK4ctHHIQM&vet=12ahUKEwji0cXx4fOKAxU_JhAIHSt1MPIQM3oECGMQAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwji0cXx4fOKAxU_JhAIHSt1MPIQM3oECGMQAA',
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
