<template>
  <div class="flex flex-auto tile py-4 min-w-min">
    <img class="flex w-20 h-20 mx-4" :src="iconPath" />
    <div class="flex flex-col px-4">
      <div class="text" :style="{ color: classColor }">{{ this.name }}</div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getColorForClass } from '../../common/utils'
import { getImagePathForClass } from '../../common/images'

export default defineComponent({
  name: 'member-tile',
  props: {
    name: { type: String, required: true },
    class: { type: String, required: true },
  },
  data() {
    return { logo: '../../assets/wow.svg' }
  },
  computed: {
    iconPath(): string {
      return getImagePathForClass(this.class)
    },
    classColor(): string {
      return getColorForClass(this.class)
    },
  },
})
</script>

<style>
.tile {
  @apply flex lg:w-5/12 md:w-5/12 bg-gray-800 rounded-lg mx-4 mb-4 h-32;
}
.text {
  @apply flex text-gray-50 text-2xl font-bold overflow-ellipsis;
}
</style>
