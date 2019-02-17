<template>
  <main class="tickets">
    <ticket v-for="(ticket, index) in tickets" :key="index" :ticket="ticket" />
  </main>
</template>

<!-- -->
<script>
import ticket from '@/components/Ticket.vue'
export default {
  name: 'tickets',
  components: {
    ticket
  },
  computed: {
    tickets () {
      return this.$store.state.ticket;
    }
  }
}
</script>

<!-- -->
<style lang="scss">

</style>
