<template>
  <the-header></the-header>
  <main class="main">
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<!-- Global styles -->
<style lang="scss">
// Normalize styles
@import "normalize-scss";
@include normalize();
// Import global styles
@import "@/scss";

.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
