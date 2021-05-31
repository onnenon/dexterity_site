<template>
  <div class="flex flex-row items-center">
    <div class="{{style}}">{{ this.text }}</div>
    <font-awesome-icon
      @click="this.copy"
      class="text-gray-600 mx-2 cursor-pointer hover:text-gray-400"
      :class="this.iconSize"
      :icon="['far', 'copy']"
    />
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

<style></style>
