<template>
  <main class="events">
    <h1>Events</h1>
  </main>
</template>

<!-- -->
<script>
export default {
  name: 'events',
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
