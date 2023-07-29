<template>
  <button
    :class="`button ${typeClass} ${themeClass} ${colorClass}`"
    @click="click"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type?: "square";
  theme?: "outline";
  color?: "white" | "black";
}>();

const typeClass = props.type ? `button-${props.type}` : "";
const themeClass = props.theme ? `button-${props.theme}` : "";
const colorClass = props.color ? `button-${props.color}` : "button-primary";

const emit = defineEmits(["click"]);

const click = () => {
  emit("click");
};
</script>

<style lang="scss" scoped>
@use "@/scss/utils";

.button {
  padding: 12px 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  font-size: 20px;

  border: none;
  border-radius: 8px;

  box-shadow: 0 0 4px rgba(utils.$black, 0.25);

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  // Types
  &-square {
    padding: 12px;
    aspect-ratio: 1 / 1;
  }

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
