<template>
  <main class="events">
    <SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" />
    <h1>Events</h1>
    <Event v-for="event in events" :key="event" />
  </main>
</template>

<!-- -->
<script>
import Event from '@/components/Event.vue';

export default {
  name: 'events',
  components: {
    Event
  },
  computed: {
    events () {
      return this.$state.store.events;
    }
  }
}
</script>

<!-- -->
<style lang="scss">

</style>
