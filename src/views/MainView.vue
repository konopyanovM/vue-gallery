<template>
  <search-widget @search="onSearch"></search-widget>
  <div class="image-list-wrapper" v-if="images.length">
    <image-list :images="images" />
  </div>
  <div v-else-if="isSearchEmpty" class="nothing-found">
    <h2>Nothing found</h2>
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
const isSearchEmpty: Ref<boolean> = ref(false);

const onSearch = (searchTerms: string) => {
  UnsplashService.searchPhotos({
    query: searchTerms,
    per_page: 9,
  })
    .then((res) => {
      images.value = [];

      if (res.data.results.length) images.value = res.data.results;
      else isSearchEmpty.value = true;
    })
    .catch((err) => (error.value = err));
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

.loader-wrapper,
.nothing-found {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
