<template>
  <div class="picture-info" v-if="data !== null">
    <div class="container">
      <div class="picture-info-header">
        <div class="picture-info-header__user-info">
          <div class="picture-info-header__avatar">
            <img :src="data.user.profile_image.medium" alt="" />
          </div>
          <div class="picture-info-header__text-block">
            <p class="picture-info-header__title">{{ data.user.name }}</p>
            <small class="picture-info-header__subtitle"
              >@{{ data.user.instagram_username }}</small
            >
          </div>
        </div>
        <div class="picture-info-header__button-group">
          <app-button
            type="square"
            color="white"
            class="picture-info-header__button"
          >
            <app-icon icon="heart"></app-icon>
          </app-button>
          <app-button
            @click="downloadPhoto"
            class="picture-info-header__button"
          >
            <app-icon icon="download"></app-icon
            ><span class="picture-info-header__button-text">Download</span>
          </app-button>
        </div>
      </div>
      <div class="picture-info-body">
        <div class="picture-info-body__img-wrapper">
          <img :src="data.urls.regular" :alt="data.alt_description" />
        </div>
      </div>
    </div>
    <div class="picture-info__background">
      <img :src="data.urls.regular" :alt="data.alt_description" />
    </div>
  </div>
  <div class="loader-wrapper" v-else>
    <app-loader></app-loader>
  </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";
import AppIcon from "@/components/AppIcon.vue";
import AppLoader from "@/components/AppLoader.vue";
import { PhotoData } from "@/services/types";
import { onMounted, Ref, ref } from "vue";
import { useRoute } from "vue-router";
import { UnsplashService } from "../services/unspalsh.service";

const route = useRoute();

const photoId = route.params.id as string;
const data: Ref<PhotoData | null> = ref(null);

const downloadPhoto = (): void => {
  UnsplashService.downloadPhoto(
    data.value?.id as string,
    data.value?.alt_description
  );
};

onMounted(() => {
  UnsplashService.getPhotoById(photoId).then((res) => {
    data.value = res.data;
  });
});
</script>

<style lang="scss" scoped>
@use "../scss/utils";

.picture-info {
  position: relative;
  margin-bottom: 40px;
  overflow: hidden;

  &-header {
    padding: 40px 0;
    display: flex;
    justify-content: space-between;

    gap: 10px;

    flex-wrap: wrap;

    &__user-info {
      display: flex;
      gap: 10px;
      color: utils.$white;

      @include utils.breakpoint(sm) {
        gap: 5px;
      }
    }

    &__avatar {
      max-width: 55px;
      max-height: 55px;
      border-radius: 8px;
      border: 1px solid utils.$white;
      overflow: hidden;
    }
    &__title {
      font-size: 30px;

      @include utils.breakpoint(sm) {
        font-size: 20px;
      }
    }
    &__subtitle {
      font-size: 18px;

      @include utils.breakpoint(sm) {
        font-size: 14px;
      }
    }

    &__button-group {
      display: flex;
      gap: 20px;

      @include utils.breakpoint(sm) {
        gap: 10px;
      }
    }

    @include utils.breakpoint(sm) {
      &__button {
        width: 55px;
        padding: 0;
        aspect-ratio: 1/1;
        &-text {
          display: none;
        }
      }
    }
  }
  &-body {
    display: flex;
    justify-content: center;
    &__img-wrapper {
      border-radius: 8px;
      overflow: hidden;

      box-shadow: 0 4px 50px rgba(utils.$black, 0.5);

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  &__background {
    position: absolute;
    top: -75%;
    left: -10px;
    right: -10px;
    z-index: -1;

    filter: blur(4px) grayscale(90%);

    @include utils.breakpoint(md) {
      top: -60%;
    }
    @include utils.breakpoint(sm) {
      top: -50%;
    }

    img {
      width: 100%;
    }
  }
}

.loader-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
