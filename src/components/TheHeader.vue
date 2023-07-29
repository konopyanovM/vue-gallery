<template>
  <header class="header">
    <div class="container">
      <div class="header__body">
        <router-link class="header__logo" :to="{ name: 'Main' }">
          <img src="@/assets/images/logo/logo.svg" alt="logo" />
        </router-link>
        <nav class="header__nav">
          <ul class="nav-list">
            <li class="nav-list__item">
              <router-link :to="{ name: 'Main' }">
                <app-icon icon="search-white"></app-icon>
                Поиск
              </router-link>
            </li>
            <li class="nav-list__item">
              <router-link :to="{ name: 'Main' }">
                <app-icon icon="heart-white"></app-icon>
                Избранное
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import AppButton from "./AppButton.vue";
import AppIcon from "./AppIcon.vue";
</script>

<style lang="scss" scoped>
@use "@/scss/utils";

.header {
  min-height: 80px;
  background-color: utils.$black;

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
    }
  }
}
</style>
