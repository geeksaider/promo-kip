<script setup>
import Header from "@/components/Header.vue";
import LabTemplate from "@/components/LabTemplate.vue";
</script>

<template>
    <main class="font-cute px-4">
        <Header></Header>
        <LabTemplate
            :buttons="[
                {
                    ico: 'link',
                    type: 'a',
                    title: 'Результаты',
                    link: '/PRIWP/test1701.jpg',
                },
            ]"
        >
            <template #title
                >Тема: Организация тестирования в команде
                разработчиков</template
            >
            <template #description
                >Ознакомился с материалом представленным на сайте и прошел тест.
            </template>
        </LabTemplate>
    </main>
</template>
