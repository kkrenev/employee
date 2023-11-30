<script lang="ts" setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
})

</script>

<template>
  <img :src="props.image" alt="avatar" class="avatar">
</template>

<style lang="scss" scoped>
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
</style>
