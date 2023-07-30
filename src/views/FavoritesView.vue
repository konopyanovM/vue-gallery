<template>
  <div class="favorites">
    <div class="container">
      <div class="favorites-wrapper">
        <h1 class="favorites__title">Favorites</h1>
        <image-list :images="images" v-if="images.length" />
        <div v-else-if="isEmpty" class="favorites__empty">
          <h2>You don't have favorite pictures</h2>
        </div>
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
import { FavoritesService } from "@/services/favorites.service";
import { PhotoData } from "@/services/types";
import { UnsplashService } from "@/services/unspalsh.service";
import { onMounted, ref, Ref } from "vue";

const images: Ref<PhotoData[]> = ref([]);
let isEmpty: Ref<boolean> = ref(false);

const getImages = () => {
  const favorites = FavoritesService.get();

  if (favorites.length)
    favorites.forEach((item) => {
      UnsplashService.getPhotoById(item).then((res) => {
        images.value.push(res.data);
      });
    });
  else isEmpty.value = true;
};

onMounted(() => {
  getImages();
});
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

  &__empty {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.loader-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
