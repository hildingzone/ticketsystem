<template>

    <main id="buy">
              <p>Choose number of tickets</p>

        <section class="contentBuy" v-if="event">
        <h1>{{ event.name }}</h1>
        <p class="when">{{ event.when.date }} <br> {{ event.when.start }} - {{ event.when.end }}</p>
        <p class="where">{{event.where.location}}</p>
        <article class="price">{{ event.price * amount }} sek</article> <br>

        <section class="counter">
          <article class="decrease" @click=" amount-- ">
            -
          </article>
          <article class="num-tickets">{{ amount }}</article>
          <article class="increase" @click=" amount++ ">
            +
          </article>
        </section>
        <a href="#" class="btnbuy" @click="buy">Buy tickets</a>
        </section>
        <section class="content" v-if="!event">
          <p>No ticket selected.</p>
          <a href="#" class="btn" @click="$router.push('/events')">Go to events</a>
        </section>
        <pager :activeStep="activeStep"/>
    </main>
</template>

<script>
import pager from '@/components/Pager';
export default {
  name: 'buy',
  data(){
    return {
      activeStep: 2,
      amount: 1
    }
  },
  components: {
    pager
  },
  computed: {
    event(){
      return this.$store.state.event;
    }
  },
  methods: {
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
    background-color: black;
    width: 50%;
    margin: 0 auto;
    padding: 10px;

  }

  .btnbuy {
    background-color:#F56B9A;
    padding: 10px;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    margin-top: 20px;
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

</style>