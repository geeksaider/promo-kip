<script setup>
import Wrap from "./Wrap.vue";

import NavLink from "./NavLink.vue";
import Button from "./Button.vue";
import Input from "./Input.vue";
import { ref } from "vue";

const active = ref("my-order");
</script>
<template>
    <section class="bg-nud-200/40 flex-grow">
        <Wrap class="flex gap-16 py-12 w-full">
            <nav class="flex flex-col gap-3 border-r-2 pr-8 border-black/60">
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
            <div class="flex">
                <div v-if="active == 'my-order'" class="flex flex-col gap-4">
                    <h1>У вас нет новых заказов</h1>
                    <Button> Перейти в катлог </Button>
                </div>
                <div
                    v-else-if="active == 'wait-list'"
                    class="flex flex-col gap-4"
                >
                    <h1>Интересующие вас товары в наличии</h1>
                    <Button> Перейти в катлог </Button>
                </div>
                <div
                    v-else-if="active == 'my-data'"
                    class="flex flex-col gap-4"
                >
                    <Input></Input>
                    <Input></Input>
                    <Input></Input>
                    <Button>Сохранить</Button>
                </div>
            </div>
        </Wrap>
    </section>
</template>
