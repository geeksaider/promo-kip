<script setup>
import { ref, watch } from "vue";
import { defineProps } from "vue";

const {
  name = "",
  type = "text",
  disabled = false,
} = defineProps(["name", "type", "disabled"]);

// const style = ref({
//   val: {
//     "": " inset-0 pl-4 pointer-events-none peer-focus:items-start peer-focus:-top-6 peer-focus:pl-0 peer-focus:text-black/60 ",
//     : "-top-6 pl-0 ",
//   },
//   disabled: {
//     true: "bg-white pointer-events-none",
//   },
// });

const style = ref("");
const val = ref(name);

watch(
  val,
  () => {
    val.value != ""
      ? (style.value = "-top-6 pl-0")
      : (style.value =
          "inset-0 pl-4 pointer-events-none peer-focus:items-start peer-focus:-top-6 peer-focus:pl-0 peer-focus:text-black/60");
    disabled ? (style.value += " bg-nud-200 border border-black/60 ") : "";
  },
  { immediate: true }
);
</script>
<template>
  <form class="flex relative group">
    <input
      :disabled="disabled"
      v-model="val"
      :type="type"
      :class="disabled ? ' cursor-not-allowed' : ''"
      class="border border-black/60 pl-4 py-2 bg-nud-100 focus:outline-none focus:ring-2 min-w-72 focus:ring-black/60 peer transition-all"
    />
    <div
      class="absolute text-black/60 text-xs uppercase flex items-center transition-all"
      :class="style"
    >
      <slot></slot>
    </div>
  </form>
</template>
