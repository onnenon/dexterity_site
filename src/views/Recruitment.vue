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
        >Apply</a
      >

      If you have any questions please feel free to contact us on Bnet:<br />
      <b>Kenpewz:</b> Kenfacto#1722<br />
      <b>Kefloric:</b> Vampizard#1310
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'recruitment',
})
</script>

<style>
.button {
  @apply flex items-center justify-center rounded-md bg-gray-800 text-white my-4 p-2 hover:bg-gray-700 lg:w-2/12;
}
</style>
