<template>
  <div class="input-group search__input-group">
    <input
      type="text"
      :placeholder="props.placeholder"
      v-model="searchTerm"
      @keyup.enter="onClick"
    />
    <button class="input-group__suff" @click="onClick">
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

const props = defineProps<{
  placeholder?: string;
}>();

const emit = defineEmits(["click"]);
const searchTerm: Ref<string> = ref("");

const onClick = (): void => {
  emit("click", searchTerm.value);
};
</script>

<style lang="scss" scoped>
@use "@/scss/utils";

.input-group {
  display: flex;

  background-color: utils.$white;

  transition: transform ease 0.25s;

  &:focus-within {
    transform: translateY(-5px);
  }

  input {
    padding: 20px 40px;

    flex-grow: 1;

    font-size: 24px;

    border: none;

    background-color: transparent;

    &:focus-visible {
      outline: none;
    }

    @include utils.breakpoint(md) {
      padding: 14px 20px;
      font-size: 20px;
    }
    @include utils.breakpoint(sm) {
      width: 100%;
      font-size: 16px;
    }
  }

  .input-group__suff {
    padding: 20px 34px;
    background-color: transparent;
    border: none;

    @include utils.breakpoint(lg) {
      padding: 14px 20px;
    }
    @include utils.breakpoint(sm) {
      padding: 6px 10px;
    }

    cursor: pointer;
    &:focus-visible {
      outline: none;
      background-color: utils.$grey-1;
    }
    &:hover {
      background-color: utils.$grey-1;
    }
    &:active {
      background-color: utils.$grey-2;
    }
  }
}
</style>
