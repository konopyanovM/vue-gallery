<template>
  <div class="error">
    <p class="error__title">{{ props.title }}</p>
    <p class="error__subtitle">{{ props.subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { ErrorResponse } from "@/services/types";

const props = defineProps<ErrorResponse>();
</script>

<style lang="scss" scoped>
@use "@/scss/utils";
.error {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  color: utils.$error;

  &__title {
    font-size: 40px;
  }

  &__subtitle {
    font-size: 20px;
  }
}
</style>
