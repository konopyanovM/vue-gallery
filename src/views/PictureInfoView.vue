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
          <app-button type="square" color="white">
            <app-icon icon="heart"></app-icon>
          </app-button>
          <app-button @click="downloadPhoto">
            <app-icon icon="download"></app-icon>Download
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
  console.log();
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

    &__user-info {
      display: flex;
      gap: 10px;
      color: utils.$white;
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
    }
    &__subtitle {
      font-size: 18px;
    }

    &__button-group {
      display: flex;
      gap: 20px;
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
