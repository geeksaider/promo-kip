<script setup>
import Header from "@/components/landing/Header.vue";
import LabTemplate from "@/components/landing/LabTemplate.vue";
</script>

<template>
    <main class="font-cute px-4">
        <Header></Header>
        <LabTemplate
            :buttons="[
                {
                    ico: 'word',
                    type: 'a',
                    title: 'Отчет',
                    link: '/PRIWP/PRIWP1.pdf',
                },
                {
                    ico: 'powerpoint',
                    type: 'a',
                    title: 'Презентация',
                    link: '/PRIWP/PRIWP1.pdf',
                },
            ]"
        >
            <template #title>Тема: «Интернет и WWW»</template>
            <template #description
                >Цель работы – изучить структуру и функционирование Интернета,
                его технологии и сервисы. Задачи: рассмотреть историю развития
                Интернета, изучить его основные компоненты, исследовать
                интернет-сервисы (электронная почта, соцсети, поисковые системы)
                и вопросы безопасности в сети. Работа включает: историческую
                справку (обзор ключевых событий, таких как ARPANET, TCP/IP,
                WWW), схему структуры Интернета (клиенты, серверы, протоколы),
                анализ сервисов (принципы работы, примеры) и исследование
                безопасности (угрозы, правила, выводы). Оформление – текстовый
                редактор, стандартный шрифт, титульный лист, список источников.
                Для защиты – презентация из 10 слайдов с графиками и схемами.
            </template>
        </LabTemplate>
    </main>
</template>
