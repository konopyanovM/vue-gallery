<template>
  <i :class="`icon icon-${props.icon}`"></i>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string;
}>();
</script>

<style lang="scss" scoped>
.icon {
  width: 24px;
  height: 24px;

  display: block;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  // Black icons
  &-download {
    background-image: url("@/assets/images/icons/download.svg");
  }
  &-search {
    background-image: url("@/assets/images/icons/search.svg");
  }

  // White icons
  &-heart-white {
    background-image: url("@/assets/images/icons/heart-white.svg");
  }

  &-search-white {
    background-image: url("@/assets/images/icons/search-white.svg");
  }
}
</style>
