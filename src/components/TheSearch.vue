<template>
  <div class="search">
    <div class="container">
      <div class="search__body">
        <div class="input-group">
          <input type="text" />
          <div class="input-group-suff">
            <app-icon icon="search-black"></app-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppIcon from "./AppIcon.vue";
</script>

<style lang="scss" scoped>
.search {
  height: 250px;
}
</style>
