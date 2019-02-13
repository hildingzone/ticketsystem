<template>
  <main class="buy">
    <buyTicket v-for="(buyTicket, index) in buyTickets" :key="index" :ticket="ticket" />
  </main>
</template>

<!-- -->
<script>
import buyTicket from '@/components/BuyTicket.vue'
export default {
  name: 'buy',
  components: {
    buyTicket
  },
  computed: {
    buyTickets () {
      return this.$store.state.ticket;
    }
  }
}
</script>

<!-- -->
<style lang="scss">
@import '../scss/components';

</style>

