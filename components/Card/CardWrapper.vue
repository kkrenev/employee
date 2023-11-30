<script lang="ts" setup>
import type {IItem, TItemOrSkeleton, IUrls} from "~/types/data-contract";
import {useNuxtApp} from '#app';
import CardItem from "~/components/Card/CardItem.vue";

const {$isMobile} = useNuxtApp();

const props = defineProps({
  items: {
    type: Array as PropType<TItemOrSkeleton[]>,
    required: true,
  },
})

const imageFullUrls = ref<IUrls | null>(null);

const cols = computed(() => {
  const cols: IItem[][] = $isMobile.value ? [[], []] : [[], [], [], []];
  props.items.forEach((item, index) => {
    cols[index % cols.length].push(item as IItem);
  })

  return cols;
})

const handleImageFullScreen = (item: IItem) => {
  imageFullUrls.value = item.urls;
}

</script>

<template>
  <div>
    <div class="grid">
      <div v-for="(col, indexCol) in cols" :key="`${indexCol}-col`" class="grid-col">
        <div v-for="item in col" :key="`${item.id}-image`">
          <card-item :item="item" class="p-4" @click="handleImageFullScreen($event)"></card-item>
        </div>
      </div>
    </div>
    <image-full-screen
        v-if="imageFullUrls"
        :urls="imageFullUrls"
        @close="imageFullUrls = null"
    />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: flex;
  width: auto;
  color: white;

  &-col {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}


</style>
