<template>
  <button
    :class="`button ${typeClass} ${themeClass} ${colorClass}`"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from "vue";

const props = defineProps<{
  type?: "square";
  theme?: "outline";
  color?: "white" | "black" | "pink";
}>();

const typeClass = props.type ? `button-${props.type}` : "";
const themeClass = props.theme ? `button-${props.theme}` : "";
const colorClass: Ref<string> = ref(
  props.color ? `button-${props.color}` : "button-primary"
);

watch(
  () => props.color,
  () => {
    if (props.color) colorClass.value = `button-${props.color}`;
  }
);

const emit = defineEmits(["click"]);

const onClick = (): void => {
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

  transition: background-color ease 0.15s;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  // Types
  &-square {
    width: 55px;
    padding: 0;
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
  &-pink {
    background-color: utils.$pink;
  }
}
</style>
