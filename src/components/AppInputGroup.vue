<template>
  <div class="input-group search__input-group">
    <input type="text" :placeholder="props.placeholder" />
    <button class="input-group__suff">
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  placeholder?: string;
}>();
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
  }

  .input-group__suff {
    padding: 20px 34px;
    background-color: transparent;
    border: none;

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
