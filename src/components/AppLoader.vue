<template>
  <div class="loader">
    <img src="@/assets/images/icons/loader.svg" alt="loader" />
  </div>
</template>

<style lang="scss" scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  width: 32px;
  height: 32px;

  img {
    height: 100%;
    width: 100%;

    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}
</style>
