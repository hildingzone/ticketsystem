<template>
  <article class="buy">
    <section>
       <h3>You're about to score some tickets to </h3>
    </section>   
    <section>
      <h1>{{event.name}}</h1>
      <p>{{event.when.date}} 
        {{event.when.start}} -
        {{event.when.to}}
        </p>
      <p>@ {{event.where.location}} </p>
    </section>
    <section>
      <p>{{event.price}}</p>
    </section>
    <section>
      <a href="#" class="btn" @click="sendOrder()">Take my Money!</a>
    </section>
  </article>
</template>

<!-- -->
<script>
export default {
  name: 'event',
  props: ['ticket'],
    computed: {
      event () {
        return this.$store.state.event;
    }
  }
}
</script>

<!-- -->
<style lang="scss">
@import '../scss/components';

</style>
