<script lang="ts" setup>
import {ref, onMounted, onUnmounted, watch} from 'vue';
import CardWrapper from "~/components/Card/CardWrapper.vue";
import type {TItemOrSkeleton} from "~/types/data-contract";

const {$apiService} = useNuxtApp();

definePageMeta({
  layout: "default"
})

const skeletonCount = 60;

const items = ref<TItemOrSkeleton[]>([]);
const loader = ref(null);
const currentPage = ref(1);
const pageIsLoad = ref(false);
const isLoading = ref(false);
let observer: IntersectionObserver;


onMounted(async () => {
  await fetchItems();
  pageIsLoad.value = true;
});

const isShowLoader = computed(() => {
  return pageIsLoad.value && items.value.length > 0;
})

const fetchItems = async () => {
  isLoading.value = true;
  // заполняем скелетонами, добавляем статус loaded
  items.value = [...items.value, ...Array.from({length: skeletonCount}, () => ({skeleton: true, loaded: false}))];
  const newItems = await $apiService.fetchItems(currentPage.value);
  currentPage.value += 1;
  items.value = [...items.value, ...newItems].filter(el => !el.skeleton);
  isLoading.value = false;
}


const initIntersectionObserver = (newLoader: HTMLElement) => {
  observer = new IntersectionObserver((entries) => {
    if (entries.some(entry => entry.isIntersecting)) {
      if (!isLoading.value) {
        fetchItems();
      }
    }
  });
  observer.observe(newLoader);
}

watch(() => loader.value, (newLoader) => {
  if (newLoader) {
    initIntersectionObserver(newLoader);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

</script>

<template>
  <card-wrapper v-if="items.length" :items="items" class="p-8"/>
  <div v-if="isShowLoader" ref="loader" class="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
  height: 100px;
}
</style>
