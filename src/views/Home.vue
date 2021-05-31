<template>
  <div class="flex justify-center bg-gray-900">
    <div class="max-w-screen-xl text-left px-6 pb-6">
      <h1 class="heading">Mission</h1>
      With a lack of Alliance guilds that value both efficient endgame
      progression, and a respectful tight-knit atmosphere, Dexterity was
      created. With fewer guilds choosing to focus on the holistic attributes of
      raiding, and players vocal dissatisfaction of the games trend in recent
      years, Dexterity will be a fresh opportunity for some, and for others it
      will be a community they've been searching for.

      <h1 class="heading">About Us</h1>
      Dexterity is a guild that aims to be one of the most competitive raiding
      guilds on a light schedule, all while fostering an inclusive and
      supportive community of people who are excited to login everyday and enjoy
      playing with each other. Our leadership team has had very successful
      raiding careers from a rankings perspective consistently competing in "top
      50 US" guilds and higher most recently as BFA-Nathria, but from a
      community and guild longevity standpoint has been something we've been
      searching for throughout the years, and are fully committed to make the
      most of our raid week while maintaining an atmosphere that few guilds have
      proven to offer. While we are a new guild make no mistake, we are a
      progression oriented guild and understand the dedication that is required
      to constantly improve every tier. That being said, we have clear goals and
      expectations of all of our members. Our players always look through logs,
      improve each other's play, and help with strategy. We require each player
      to not only understand but contribute and find every other piece of
      information available to them to be prepared for the fights. We will not
      compromise the raid by trialing those who are skilled at their class, but
      don't put in the effort outside of that. Everyone is expected to pull more
      than their own weight here.

      <br />
      <br />
      <div class="font-bold text-4xl py-2">Progression Raid Schedule (EST)</div>
      <div class="font-robotoMono">
        Tues......10:00 pm - 1:00 am<br />
        Wed.......10:00 pm - 1:00 am<br />
        Thurs.....10:00 pm - 1:00 am<br />
      </div>

      <br />
      This is a strict 9-hour per week schedule. We do not add extra time or
      days, and all of our raid activity is publicly logged. We also do not run
      split groups and thus do not require an alt.
      <br />

      <h1 class="heading">Shadowlands Goals</h1>
      <ul>
        <li class="goals-li">
          <font-awesome-icon
            class="check-icon"
            :icon="['fas', 'check-square']"
          />
          Form the guild with a solid foundation of experienced leadership and
          raiders.
        </li>
        <li class="goals-li">
          <font-awesome-icon
            class="check-icon"
            :icon="['fas', 'check-square']"
          />
          Recruit like minded players and start building synergy among each
          other.️
        </li>
        <li class="goals-li">
          <font-awesome-icon
            class="check-icon"
            :icon="['fas', 'check-square']"
          />
          Farm Heroic Nathria every week as a guild for people re-rolling next
          tier. (gearing).
        </li>
        <li class="goals-li">
          <font-awesome-icon class="check-icon" :icon="['far', 'square']" />
          Clear Mythic Nathria starting June 1st to finish out the tier strong.
        </li>
        <li class="goals-li">
          <font-awesome-icon class="check-icon" :icon="['far', 'square']" />
          Sales to become even richer
        </li>
        <li class="goals-li">
          <font-awesome-icon class="check-icon" :icon="['far', 'square']" />
          Fine tune our roster for 9.1, and continue to improve our play even
          further for the rest of the expansion.
        </li>
      </ul>

      <h1 class="heading">Apply If</h1>
      <ul>
        <li class="goals-li">
          <font-awesome-icon class="dot-icon" :icon="['fas', 'dot-circle']" />
          You want to be apart of something from its inception.
        </li>
        <li class="goals-li">
          <font-awesome-icon class="dot-icon" :icon="['fas', 'dot-circle']" />
          You want to enjoy the people you raid with.
        </li>
        <li class="goals-li">
          <font-awesome-icon class="dot-icon" :icon="['fas', 'dot-circle']" />
          You don't enjoy condescending raid leaders and toxic environments.
        </li>
        <li class="goals-li">
          <font-awesome-icon class="dot-icon" :icon="['fas', 'dot-circle']" />
          You enjoy putting in hours outside of raid learning fights and
          watching videos.
        </li>
        <li class="goals-li">
          <font-awesome-icon class="dot-icon" :icon="['fas', 'dot-circle']" />
          You want to be surrounded by players who put in high effort.
        </li>
        <li class="goals-li">
          <font-awesome-icon class="dot-icon" :icon="['fas', 'dot-circle']" />
          You are internally motivated to actively improve your play.
        </li>
        <li class="goals-li">
          <font-awesome-icon class="dot-icon" :icon="['fas', 'dot-circle']" />
          You're tired of raiders who don't share the same passion for the game
          as you do.
        </li>
        <li class="goals-li">
          <font-awesome-icon class="dot-icon" :icon="['fas', 'dot-circle']" />
          You are fully present and focused when it comes raid time.
        </li>
        <li class="goals-li">
          <font-awesome-icon class="dot-icon" :icon="['fas', 'dot-circle']" />
          You understand that your dps/hps output matters less than mechanical
          skill & consistency.
        </li>
        <li class="goals-li">
          <font-awesome-icon class="dot-icon" :icon="['fas', 'dot-circle']" />
          You enjoy raiding and are able to make raids with near perfect
          attendance.
        </li>
      </ul>

      <h1 class="heading">What We Can Offer</h1>
      A raiding atmosphere like none other where your enthusiasm and passion to
      be at the top is shared by everyone and a chance to build a foundation in
      our guild, allowing you to experience new content with some of the most
      talented and dedicated individuals playing this game. Dexterity is unique
      amidst a sea of poorly managed guilds that lack focus, cohesiveness, and
      integrity. If you're looking for a new home where you can grow and feel
      valued as part of a team with a reliable schedule: we want to hear from
      you.

      <h1 class="heading">Attendance</h1>
      The best ability is availability. We do not recruit for bench positions,
      we expect all raiders to be able to maintain as close to 100% attendance
      as possible during progression. That being said, we understand real life
      happens and expect our raiders to call out as far in advance as possible.
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'home',
})
</script>

<style>
.heading {
  @apply text-4xl sm:text-5xl font-black py-4 font-roboto;
}
.check-icon {
  @apply text-xl mr-4 text-gray-900 dark:text-gray-400;
}
.dot-icon {
  @apply text-sm mr-4 text-gray-900 dark:text-gray-400;
}
.goals-li {
  @apply flex items-center p-2;
}
</style>
