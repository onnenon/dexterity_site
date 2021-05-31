<template>
  <div ref="container" class="copytext-container" @click="copy">
    <div class="text-gray-800" :class="style">{{ text }}</div>
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
    >
      <path
        d="M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'copyText',
  props: {
    text: { type: String, required: true },
    style: String,
    iconSize: { type: String, default: 'text-lg' },
  },
  data() {
    return { canCopy: false }
  },
  created() {
    this.canCopy = !!navigator.clipboard
  },
  methods: {
    copy() {
      if (this.canCopy) {
        navigator.clipboard.writeText(this.text)
      }
    },
  },
})
</script>

<style>
.copytext-container {
  @apply cursor-pointer flex flex-initial text-gray-400 hover:text-gray-900 py-2 items-center space-x-4;
}
</style>
