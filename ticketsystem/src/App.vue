<template>
  <main id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/events">Events</router-link> |
      <router-link to="/tickets">Tickets</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/verify">Verify</router-link>
    </div>
    <router-view/>
  </main>
</template>
<script>
export default {
  name: 'app',
  beforeMount() {
    this.$store.dispatch('getEvent');
  }
}
</script>
<style lang="scss">
@import '/scss/main.scss';
</style>
