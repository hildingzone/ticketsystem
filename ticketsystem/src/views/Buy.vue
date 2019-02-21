<template>
  <main id="buy">
    <p>Choose number of tickets</p>
    <section class="contentBuy" v-if="event">
      <h1>{{ event.name }}</h1>
      <p class="when">{{ event.when.date }} <br> {{ event.when.start }} - {{ event.when.end }}</p>
      <p class="where">{{event.where.location}}</p>
      <p class="where">{{event.spot}}</p>
      <article class="price">{{ event.price * amount }} sek</article> <br>
      <section class="counter">
        <article class="decrease" @click=" amount--" v-show="amount > 1" > - </article> <!-- Minus button -->
        <article class="num-tickets">{{ amount }}</article>
        <article class="increase" @click=" amount++ " > + </article> <!-- Plus button -->
      </section>
      <a href="#" class="btnbuy" @click="buy">Buy tickets</a>
    </section>
    <section class="content" v-if="!event">
      <p>No ticket selected.</p>
      <a href="#" class="btn" @click="$router.push('/events')">Go to events</a>
    </section>
  </main>
</template>

<script>

export default {
  name: 'buy',
  data(){
    return {
      activeStep: 2,
      amount: 1,
    }
  },
  computed: {
    event(){
      return this.$store.state.event;
    }
  },
  methods: {
    /* After our Customer have picked an amount of tickets and payed for them, send them to our
    * our ticket side where they can watcch their newly bought tickets. */
    buy(){
      this.$store.dispatch('buy', { event: this.event._id, amount: this.amount });
      this.$router.push('/tickets');
    },    
  }
}
</script>

<!-- -->
<style lang="scss">
@import '../scss/components';

  .contentBuy {
    @extend %center;
    flex-direction: column;
    background-color: #13142b;
    width: 50%;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid white;
    font-size: 1.3rem;
  }

  .btnbuy {
    background-color:#F56B9A;
    padding: 5px 16px 10px 16px;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    margin-top: 20px;
    border-radius: 5px;
  }

  .counter {
    padding: 10px;
    font-size: 1.6rem;
  }
    
 .decrease {
    display: inline-block;
    padding: 10px;
    color: rgb(245, 87, 87);
    cursor: pointer;
 }   

  .increase {
   display: inline-block;
   padding: 10px;
   color: rgb(98, 255, 119);
  cursor: pointer;
 }   

 .num-tickets {
   display: inline-block;
 }

 @media only screen and (max-width: 400px) {
    .contentBuy {
    width: 80%;
    } 
 }

</style>