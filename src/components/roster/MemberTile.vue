<template>
  <div class="tile">
    <img class="flex w-20 h-20 mx-4" :src="iconPath" />
    <div class="flex flex-col px-4">
      <div class="text" :style="{ color: classColor }">{{ name }}</div>
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
    class_: { type: String, required: true },
  },
  computed: {
    iconPath(): string {
      return getImagePathForClass(this.class_)
    },
    classColor(): string {
      return getColorForClass(this.class_)
    },
  },
})
</script>

<style>
.tile {
  @apply flex md:w-5/12 flex-auto md:flex-initial bg-gray-800 rounded-lg mx-4 mb-4 h-32 py-4;
}
.text {
  @apply flex text-gray-50 text-2xl font-bold break-all;
}
</style>
