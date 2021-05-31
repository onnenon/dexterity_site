<template>
  <div class="flex justify-center">
    <div class="flex flex-col max-w-screen-xl text-left p-6">
      <h1 class="text-6xl font-black py-4 font-roboto">Recruitment</h1>
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
        <div class="font-bold pr-2">Kenpewz:</div>
        <CopyText text="Kenfacto#1722" />
        <div class="font-bold pr-2">Kefloric:</div>
        <CopyText text="Vampizard#1310" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CopyText from '../components/CopyText.vue'

export default defineComponent({
  name: 'recruitment',
  components: { CopyText },
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
