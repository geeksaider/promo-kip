<script setup>
import LineTable from "@/components/landing/LineTable.vue";
import Back from "@/components/landing/Back.vue";
</script>
<template>
    <div
        class="bg-gradient-to-r mx-auto font-cute from-neutral-100 border-b border-b-gray-500 to-neutral-200 max-w-[1000px] font-semibold text-center max-sm:gap-4 rounded-t-xl grid grid-cols-12 py-4 px-20 mt-12"
    >
        <h1 class="col-span-1 text-left">Номер</h1>
        <h1 class="col-span-8">Условие</h1>
        <h1 class="col-span-3">Результат</h1>
    </div>
    <div
        class="bg-neutral-200/30 mx-auto font-cute max-w-[1000px] text-left max-sm:gap-4 rounded-b-xl grid grid-cols-12 py-4 px-20"
    >
        <LineTable></LineTable>
    </div>

    <Back class="w-fit mt-4 mx-auto" fill="white"></Back>
</template>
