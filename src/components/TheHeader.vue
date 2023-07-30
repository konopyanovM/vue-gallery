<template>
  <header class="header">
    <div class="container">
      <div class="header__body">
        <router-link class="header__logo" :to="{ name: 'Main' }">
          <img src="@/assets/images/logo/logo.svg" alt="logo" />
        </router-link>
        <nav class="header__nav">
          <ul class="nav-list">
            <li class="nav-list__item" v-if="route.path !== '/'">
              <router-link :to="{ name: 'Main' }">
                <app-icon icon="search-white"></app-icon>
                <span class="nav-list__item-text"> Поиск </span>
              </router-link>
            </li>
            <li class="nav-list__item">
              <router-link :to="{ name: 'Favorites' }">
                <app-icon icon="heart-white"></app-icon>
                <span class="nav-list__item-text"> Избранное </span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import AppIcon from "./AppIcon.vue";

const route = useRoute();
</script>

<style lang="scss" scoped>
@use "@/scss/utils";

.header {
  min-height: 140px;
  background-color: utils.$black;

  @include utils.breakpoint(lg) {
    min-height: 120px;
  }
  @include utils.breakpoint(md) {
    min-height: 100px;
  }
  @include utils.breakpoint(sm) {
    min-height: 80px;
  }

  &__logo {
    display: block;
    img {
      width: 100%;
    }
    @include utils.breakpoint(md) {
      max-width: 100px;
    }
    @include utils.breakpoint(sm) {
      max-width: 84px;
    }
  }

  &__body {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-list {
    display: flex;
    gap: 30px;
    &__item {
      font-size: 20px;

      a {
        display: flex;
        gap: 8px;

        color: utils.$white;
      }

      &:hover {
        opacity: 0.8;
      }

      &-text {
        @include utils.breakpoint(md) {
          display: none;
        }
      }
    }
  }
}
</style>
