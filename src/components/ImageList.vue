<template>
  <div class="container">
    <ul class="image-list">
      <li
        v-for="imageItem of props.images"
        :key="imageItem.id"
        class="image-list__item"
      >
        <router-link
          :to="{ name: 'Picture Info', params: { id: imageItem.id } }"
        >
          <img :src="imageItem.urls.regular" :alt="imageItem.alt_description" />
        </router-link>
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
@use "@/scss/utils";

.image-list {
  max-width: 100%;
  display: grid;
  gap: 30px;

  grid-template-columns: repeat(3, 1fr);

  @include utils.breakpoint(md) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include utils.breakpoint(sm) {
    grid-template-columns: 1fr;
  }

  &__item {
    position: relative;
    overflow: hidden;

    border-radius: 8px;

    // Make block square
    aspect-ratio: 1 / 1;

    transition: transform ease 0.25s;

    &:hover {
      transform: scale(1.025);
    }

    img {
      position: absolute;
      object-fit: cover;

      width: 100%;
      height: 100%;
    }
  }
}
</style>
