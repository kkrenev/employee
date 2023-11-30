<template>
  <p class="card-header fw-bold fz-12">
    <slot name="default"></slot>
  </p>
</template>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.card-header {
  color: $primary;
}
</style>
