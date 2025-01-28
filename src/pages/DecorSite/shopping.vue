<script setup>
import DecorHeader from "@/components/decor/DecorHeader.vue";
import ShoppingField from "@/components/decor/ShoppingField.vue";
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <DecorHeader></DecorHeader>
        <div class="bg-nud-100 flex-grow">
            <ShoppingField></ShoppingField>
        </div>
    </div>
</template>
