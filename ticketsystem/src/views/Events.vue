<template>
    <main id="events">
        <header>
            <h1>Events</h1>
        </header>
        <section class="content">
        <event v-for="event in events" :key="event.id" :event="event" />


        </section>
        <pager :activeStep="activeStep"/>
    </main>
</template>

<script>
import event from '@/components/Event';
import pager from '@/components/Pager';
export default {
  name: 'events',
    beforeMount() {
    this.$store.dispatch('getEvent');
  },
  data(){
    return {
      activeStep: 2,
      filter: null
    }
  },
  components: {
    pager,
    event
  },
  computed: {
    events(){
      return this.$store.state.events;
    }
  }
}
</script>
<style lang="scss">
@import '../scss/variables';

</style>