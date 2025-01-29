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
      <nav
        class="flex flex-col gap-3 min-w-52 border-r-2 pr-8 transition-all border-black/60"
      >
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

      <div v-if="active == 'my-order'" class="flex flex-col w-full gap-4">
        <h1>У вас нет новых заказов</h1>
        <Button> Перейти в катлог </Button>
      </div>
      <div v-else-if="active == 'wait-list'" class="flex flex-col w-full gap-4">
        <h1>Интересующие вас товары в наличии</h1>
        <Button> Перейти в катлог </Button>
      </div>
      <div v-else-if="active == 'my-data'" class="flex flex-col w-full gap-8">
        <div class="flex justify-between w-[80%] flex-grow pt-4">
          <div class="flex flex-col gap-8">
            <Input name="Никита">Имя</Input>
            <Input type="password">Новый пароль</Input>
            <Input type="password">Подтверждение нового пароля</Input>
            <div class="flex gap-2 items-center">
              <input type="checkbox" class="border-black/60 size-4" />
              <span>Согласен на получение рассылки</span>
            </div>
          </div>
          <div>
            <Input type="email" :disabled="true">E-mail</Input>
          </div>
        </div>
        <Button>Сохранить</Button>
      </div>
    </Wrap>
  </section>
</template>
