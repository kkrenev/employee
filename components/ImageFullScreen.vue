<script lang="ts" setup>
import type {IUrls} from "~/types/data-contract";

const props = defineProps({
  urls: {
    type: Object as PropType<IUrls>,
    required: true
  },
});

const isLoading = ref(true);

const emit = defineEmits({
  close: () => true
});

const closeFullScreen = () => {
  emit('close');
}

const handleImageLoad = () => {
  isLoading.value = false;
};
const urls = computed(() => props.urls);
</script>


<template>
  <div class="fullscreen-container cursor-pointer" @click="closeFullScreen">
    <base-loader v-if="isLoading"></base-loader>
    <picture v-show="!isLoading">
      <source :srcset="urls.full" media="(min-width: 1080px)">
      <source :srcset="urls.regular" media="(min-width: 400px)">
      <img
          :src="urls.small"
          alt="Fullscreen image"
          class="fullscreen-image radius-8"
          @load="handleImageLoad"
      />
    </picture>
  </div>
</template>

<style scoped>
.fullscreen-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

.fullscreen-image {
  max-width: calc(100vw - 64px);
  max-height: calc(100vh - 64px);
}
</style>
