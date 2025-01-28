<script setup>
import DecorHeader from "@/components/decor/DecorHeader.vue";
import AccountField from "@/components/decor/AccountField.vue";
import PageHeader from "@/components/decor/PageHeader.vue";
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <DecorHeader></DecorHeader>
        <div class="bg-nud-100 flex-grow flex flex-col w-full">
            <Wrap>
                <PageHeader>Личный кабинет</PageHeader>
            </Wrap>
            <AccountField class="flex-grow"></AccountField>
        </div>
    </div>
</template>
