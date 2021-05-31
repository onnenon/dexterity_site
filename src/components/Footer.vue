<template>
  <div
    class="
      flex flex-auto
      items-center
      justify-center
      p-16
      mt-20
      bg-gray-100
      text-gray-400
    "
  >
    <div class="flex flex-wrap flex-auto flex-row max-w-screen-xl">
      <div class="foot-third"></div>
      <div class="foot-third"></div>
      <div class="foot-third">
        <div class="text-gray-900 font-semibold pb-4 text-xs text-roboto">
          LINKS
        </div>
        <a
          class="foot-text foot-link"
          href="https://worldofwarcraft.com/en-us/guild/us/moon-guard/dexterity"
          alt="Armory Link"
          target="_blank"
          >Armory</a
        >
        <a
          class="foot-text foot-link"
          href="https://www.wowprogress.com/guild/us/moon-guard/Dexterity"
          alt="WoWProgress Link"
          target="_blank"
          >WoWProgress</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'foot',
})
</script>

<style>
.foot-text {
  @apply flex flex-auto font-medium text-sm pb-4 font-roboto;
}
.foot-link {
  @apply hover:text-gray-900;
}
.foot-third {
  @apply flex flex-auto flex-col md:w-1/3 justify-center px-10;
}
</style>
