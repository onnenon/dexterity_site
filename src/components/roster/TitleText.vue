<template>
  <div class="flex flex-row">
    <font-awesome-icon
      v-if="isGM"
      class="crown-icon"
      :icon="['fas', 'crown']"
    />
    <div class="title-text">{{ titleText }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RankEnum } from '../../common/types'

export default defineComponent({
  name: 'title-text',
  props: {
    rank: String,
  },
  computed: {
    titleText(): string {
      if (this.rank == RankEnum.GM) {
        return 'GUILD MASTER'
      }
      if (this.rank == RankEnum.OFFICER) {
        return 'OFFICER'
      }
      return ''
    },
    isGM(): boolean {
      return this.rank === RankEnum.GM
    },
  },
})
</script>

<style>
.title-text {
  @apply flex font-robotoMono text-sm text-gray-400;
}
.crown-icon {
  @apply text-yellow-500 mr-2;
}
</style>
