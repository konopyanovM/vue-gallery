<template>
  <div class="container">
    <ul class="image-list">
      <li
        v-for="imageItem of props.images"
        :key="imageItem.id"
        class="image-list__item"
      >
        <img :src="imageItem.urls.regular" :alt="imageItem.alt_description" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PhotoData } from "@/services/types";

const props = defineProps<{
  images: PhotoData[];
}>();
</script>

<style lang="scss" scoped>
.image-list {
  max-width: 100%;
  display: grid;
  gap: 30px;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  &__item {
    position: relative;
    overflow: hidden;

    border-radius: 8px;

    // Make block square
    aspect-ratio: 1 / 1;

    img {
      position: absolute;

      width: 100%;
      height: 100%;
    }
  }
}
</style>
