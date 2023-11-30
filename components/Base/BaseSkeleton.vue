<template>
  <div class="skeleton">
    <div class="skeleton-image radius-8"></div>
    <div class="d-flex items-center gap-12 p-12">
      <div class="skeleton-avatar"></div>
      <div class="skeleton-header radius-4"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.skeleton {
  width: 100%;
  object-fit: cover;

  &-image {
    width: 100%;
    border-radius: 4px;
    background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.25) 50%,
            rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 100%;
    animation: loading 3s infinite linear;
    background-color: $secondary;
    height: 200px;
  }

  &-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: $secondary;
  }

  &-header {
    width: 100px;
    height: 12px;
    background: $secondary;
  }
}

@keyframes loading {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
