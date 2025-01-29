<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const {
  name = "",
  type = "text",
  disabled = false,
} = defineProps(["name", "type", "disabled"]);

const val = ref(name);
</script>
<template>
  <form class="flex relative group">
    <input
      :disabled="disabled"
      v-model="val"
      :type="type"
      class="border border-black/60 pl-4 py-2 bg-nud-100 focus:outline-none focus:ring-2 min-w-72 focus:ring-black/60 peer transition-all"
    />
    <div
      :class="
        val != ''
          ? '-top-6 pl-0 '
          : ' inset-0 pl-4 pointer-events-none peer-focus:items-start peer-focus:-top-6 peer-focus:pl-0 peer-focus:text-black/60 '
      "
      class="absolute text-black/60 text-xs uppercase flex items-center transition-all"
    >
      <slot></slot>
    </div>
  </form>
</template>
