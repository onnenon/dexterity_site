<template>
  <div class="flex justify-center">
    <div class="flex flex-col max-w-screen-xl text-left p-6">
      <h1 class="heading">Recruitment</h1>
      We are looking to recruit players that love raiding just as much as we do.
      If you have the performance and attendance necessary to push for eventual
      famed slayer we would love to talk to you. If you are constantly missing
      raids, immune to constructive criticism, do no research outside of raid,
      or do not want to get focused and progress during raid time then this is
      not the mythic raid team for you. If any of this sounds appealing to you,
      you are encouraged to submit an application:

      <a
        class="button"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfge_KbrMTzClkyscDYzRs3ZKyPlMYlMh0kIwLbmLX-ut9aFQ/viewform"
        target="_blank"
        >Apply</a
      >

      <div class="text-lg pb-4">
        If you have any questions please feel free to contact us on Bnet:
      </div>
      <div>
        <div class="font-bold">Kenpewz:</div>
        <div class="copy-text" @click="copy('Kenfacto#1722')">
          Kenfacto#1722
        </div>
      </div>
      <div>
        <div class="font-bold">Kefloric:</div>
        <div class="copy-text" @click="copy('Vampizard#1310')">
          Vampizard#1310
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'recruitment',
  data() {
    return { canCopy: false }
  },
  created() {
    this.canCopy = !!navigator.clipboard
  },
  methods: {
    copy(text: string) {
      if (this.canCopy) {
        alert(`Copied ${text}`)
        navigator.clipboard.writeText(text)
      }
    },
  },
})
</script>

<style>
.button {
  @apply flex items-center font-bold font-roboto justify-center rounded-md bg-gray-800 text-white my-6 p-2 hover:bg-gray-700 lg:w-2/12;
}
.copy-text {
  @apply cursor-pointer hover:text-gray-600;
}
</style>
