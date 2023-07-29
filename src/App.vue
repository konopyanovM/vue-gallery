<template>
  <the-header></the-header>
  <router-view />
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
</style>
