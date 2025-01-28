<script setup>
import PageHeader from "./PageHeader.vue";
import ProductCard from "./ProductCard.vue";
import Wrap from "./Wrap.vue";
</script>
<template>
    <Wrap>
        <PageHeader>Корзина</PageHeader>
        <div class="flex justify-between gap-4">
            <div class="basis-2/3">
                <ProductCard>
                    <template #title>Товар 1</template>
                    <template #index>Индекс</template>
                </ProductCard>
            </div>
            <div
                class="flex flex-col bg-white py-8 font-medium items-center px-8 border-2 basis-[28%] max-w-[500px] border-black/10"
            >
                <article class="w-full mb-4">
                    <h1 class="flex justify-between text-2xl">
                        Итого <span>20 000 ₽</span>
                    </h1>
                    <h4 class="flex justify-between text-stone-600">
                        Всего товаров<span>2 шт.</span>
                    </h4>
                </article>
                <h4 class="flex justify-between w-full text-stone-600">
                    Доставка <span class="text-black">Бесплатно</span>
                </h4>
                <div class="bg-black/30 h-[1px] w-full my-4"></div>
                <article class="w-full text-right">
                    <h3 class="text-stone-600">
                        Скидка: <span>-10 000 ₽</span>
                    </h3>
                    <h3 class="">К оплате: <span>20 000 ₽</span></h3>
                </article>
                <div class="w-full relative my-5">
                    <input
                        type="text"
                        placeholder="Промокод"
                        class="py-1.5 px-3 w-full border border-black placeholder:text-sm focus:outline-none transition-colors focus:bg-stone-50"
                    />
                    <img
                        src="/decor/arrow-right.svg"
                        alt=""
                        class="absolute top-2 right-2 hover:translate-x-[1px] transition-all"
                    />
                </div>
                <div class="bg-black/30 h-[1px] w-full my-4"></div>
                <button
                    class="py-3 w-[80%] text-center border-4 border-stone-500 hover:bg-stone-50 active:bg-stone-100"
                >
                    Оплатить
                </button>
            </div>
        </div>
    </Wrap>
</template>
