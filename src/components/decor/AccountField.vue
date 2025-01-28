<script setup>
import Wrap from "./Wrap.vue";
import PageHeader from "./PageHeader.vue";
import NavLink from "./NavLink.vue";
import Button from "../Button.vue";
import { ref } from "vue";

const active = ref("my-order");
</script>
<template>
    <Wrap>
        <PageHeader>Личный кабинет</PageHeader>
    </Wrap>

    <section class="bg-orange-50/50">
        <Wrap class="flex gap-16 py-12">
            <nav class="flex flex-col gap-3">
                <NavLink
                    :active="active == 'my-order' ? true : false"
                    @click="active = 'my-order'"
                    >Мои заказы</NavLink
                >
                <NavLink
                    :active="active == 'wait-list' ? true : false"
                    @click="active = 'wait-list'"
                    >Лист ожидания</NavLink
                >
                <NavLink
                    :active="active == 'my-data' ? true : false"
                    @click="active = 'my-data'"
                    >Мои данные</NavLink
                >
            </nav>
            <div class="bg-black h-full w-0.5"></div>
            <div class="flex">
                <div v-if="active == 'my-order'" class="flex flex-col gap-4">
                    <h1>У вас нет новых заказов</h1>
                    <button
                        class="px-6 py-2 w-fit border-stone-600 border-2 transition-all hover:bg-stone-600/10"
                    >
                        Перейти в катлог
                    </button>
                </div>
                <div
                    v-else-if="active == 'wait-list'"
                    class="flex flex-col gap-4"
                >
                    <h1>Интересующие вас товары в наличии</h1>
                    <button
                        class="px-6 py-2 w-fit border-stone-600 border-2 transition-all hover:bg-stone-600/10"
                    >
                        Перейти в катлог
                    </button>
                </div>
            </div>
        </Wrap>
    </section>
</template>
