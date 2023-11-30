<script lang="ts" setup>
import type {IItem, TItemOrSkeleton} from "~/types/data-contract";

const props = defineProps({
  item: {
    type: Object as PropType<TItemOrSkeleton>,
    required: true,
  },
})

const emit = defineEmits({
  click: (item: IItem) => true,
})

const item = computed(() => props.item)
const wrapperClasses = computed(() => {
  if (mouseEnter.value) return ['opacity-50'];
  return [];
});

const mouseEnter = ref(false);

const handleClick = () => {
  emit('click', item.value as IItem);
}
</script>

<template>
  <div
      :class="wrapperClasses"
      class="cursor-pointer"
      @click="handleClick"
      @mouseenter="mouseEnter = true"
      @mouseleave="mouseEnter = false"
  >
    <base-skeleton v-if="item.skeleton && !item.loaded"/>
    <div v-else class="w-100">
      <picture>
        <source :srcset="item.urls.regular" media="(min-width: 1200px)">
        <img
            :src="item.urls.small"
            alt="image"
            class="w-100 radius-8"
            loading="lazy"
            @load="item.loaded = true"
        />
      </picture>
      <div class="d-flex items-center gap-12 p-12">
        <base-avatar :image="item.user.profile_image.small"></base-avatar>
        <card-header>{{ item.user.username }}</card-header>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image {
  min-height: 150px;
}
</style>
