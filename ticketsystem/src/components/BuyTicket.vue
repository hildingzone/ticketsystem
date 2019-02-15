<template>
  <article class="buy">
    <section>
       <h3>You're about to score some tickets to </h3>
    </section>   
    <section>
      <h1>{{ticket.name}}</h1>
      <p>{{ticket.when.date}} 
        {{ticket.when.start}} 
        {{ticket.when.to}}
        </p>
      <p>@ {{ticket.where.location}} </p>
    </section>
    <section>
      <p>{{ticket.price}}</p>
    </section>
    <section>
      <a href="#" class="btn" @click="sendOrder()">Take my Money!</a>
    </section>
  </article>
</template>

<!-- -->
<script>
export default {
  name: 'buyTicket',
  props: ['ticket']
}
</script>

<!-- -->
<style lang="scss">
@import '../scss/components';

</style>
