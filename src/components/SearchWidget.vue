<template>
  <div class="search">
    <div class="container">
      <div class="search__body">
        <app-input-group placeholder="Search" @click="searchImages">
          <app-icon icon="search"></app-icon>
        </app-input-group>
      </div>
    </div>
    <div class="search__background-image"></div>
  </div>
</template>

<script setup lang="ts">
import AppIcon from "./AppIcon.vue";
import AppInputGroup from "./AppInputGroup.vue";

const emit = defineEmits(["search"]);

const searchImages = (terms: string) => {
  emit("search", terms);
};
</script>

<style lang="scss" scoped>
@use "@/scss/utils";

.search {
  position: relative;
  height: 250px;

  &__body {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__input-group {
    min-width: 866px;

    @include utils.breakpoint(lg) {
      min-width: 700px;
    }
    @include utils.breakpoint(md) {
      min-width: 500px;
    }
    @include utils.breakpoint(sm) {
      min-width: 100%;
    }
  }

  &__background-image {
    position: absolute;
    z-index: -1;
    inset: 0;

    background-image: url("@/assets/images/common/search-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    // Make image darker
    filter: brightness(50%);
  }
}
</style>
