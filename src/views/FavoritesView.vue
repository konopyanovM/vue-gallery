<template>
  <div class="favorites">
    <div class="container">
      <div class="favorites-wrapper">
        <h1 class="favorites__title">Favorites</h1>
        <image-list :images="images" v-if="images.length"></image-list>
        <div class="loader-wrapper" v-else>
          <app-loader></app-loader>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppLoader from "@/components/AppLoader.vue";
import ImageList from "@/components/ImageList.vue";
import { PhotoData } from "@/services/types";
import { ref, Ref } from "vue";

const images: Ref<PhotoData[]> = ref([]);
</script>

<style lang="scss" scoped>
.favorites {
  height: 100%;

  &__title {
    margin: 100px 0;

    font-size: 72px;
    font-weight: 700;
    text-align: center;
  }

  &-wrapper {
    height: inherit;
    display: flex;
    flex-direction: column;
  }
}

.loader-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
