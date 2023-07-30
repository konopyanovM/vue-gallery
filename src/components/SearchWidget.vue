<template>
  <div class="search">
    <div class="container">
      <div class="search__body">
        <app-input-group placeholder="Search">
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
</script>

<style lang="scss" scoped>
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
