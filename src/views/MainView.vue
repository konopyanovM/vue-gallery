<template>
  <search-widget></search-widget>
  <div class="image-list-wrapper" v-if="images.length">
    <image-list :images="images"></image-list>
  </div>
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
import { PhotoData } from "@/services/types";

const images: Ref<PhotoData[]> = ref([]);

onMounted(() => {
  UnsplashService.getRandomPhotos().then((res) => {
    images.value = res.data;
    console.log(res);
  });
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
