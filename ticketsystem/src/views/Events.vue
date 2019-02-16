<template>
  <main class="events">
    <h1>Events</h1>
    <section class="">
      <event v-for="event in events" :key="event.id" :event="event"/>
    </section>
  </main>
</template>

<!-- -->
<script>
import event from '@/components/Event.vue'

export default {
  name: 'events',
  components: {
    event
  },
  computed: {
    events () {
      return this.$store.state.events;
    }
  }
}
</script>

<!-- -->
<style lang="scss">

</style>
