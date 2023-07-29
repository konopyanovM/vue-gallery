<template>
  <button :class="`button ${themeClass} ${colorClass}`">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  theme?: "outline";
  color?: "white" | "black";
}>();

const themeClass = props.theme ? `button-${props.theme}` : "";
const colorClass = props.color ? `button-${props.color}` : "button-primary";
</script>

<style lang="scss" scoped>
@use "@/scss/utils";

.button {
  padding: 12px 24px;

  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 20px;

  border: none;
  border-radius: 8px;

  // Colors
  &-white {
    background-color: utils.$white;
  }
  &-black {
    color: utils.$white;
    background-color: utils.$black;
  }
  &-primary {
    background-color: utils.$primary;
  }
}
</style>
