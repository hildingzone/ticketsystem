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
  }
}
</script>

<!-- -->
<style lang="sass">

</style>
