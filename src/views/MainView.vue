<template>
  <search-widget @search="onSearch"></search-widget>
  <div class="image-list-wrapper" v-if="images.length">
    <image-list :images="images"></image-list>
  </div>
  <app-error
    v-else-if="error"
    :title="error.title"
    :subtitle="error.subtitle"
  ></app-error>
  <div class="loader-wrapper" v-else>
    <app-loader></app-loader>
  </div>
</template>

<script setup lang="ts">
import SearchWidget from "../components/SearchWidget.vue";
import ImageList from "@/components/ImageList.vue";
import AppLoader from "@/components/AppLoader.vue";
import { UnsplashService } from "../services/unspalsh.service";
import { onMounted, Ref, ref } from "vue";
import { ErrorResponse, PhotoData } from "@/services/types";
import AppError from "@/components/AppError.vue";

const images: Ref<PhotoData[]> = ref([]);
const error: Ref<ErrorResponse | null> = ref(null);

const onSearch = (searchTerms: string) => {
  UnsplashService.searchPhotos({
    query: searchTerms,
    per_page: 9,
  }).then((res) => {
    images.value = [];
    images.value = res.data.results;
  });
};

onMounted(() => {
  UnsplashService.getRandomPhotos()
    .then((res) => {
      images.value = res.data;
    })
    .catch((err) => (error.value = err));
});
</script>

<style lang="scss" scoped>
.image-list-wrapper {
  margin: 110px 0;
}

.loader-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
