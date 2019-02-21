<template>
  <main id="admin">
    <section class="container">
      <section class="events">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Where</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <!-- Here we import our Events we have added on our DB -->
        <tbody> 
          <tr v-for="event in events" :key="event._id" :event="event">
            <td>{{event.name}}</td>
            <td>{{event.where.location}}, {{event.where.adress}} </td>
            <td>{{event.when.date}}</td>
            <td>{{event.when.start}} - {{event.when.end}}</td>
          </tr>
        </tbody>
      </table>
      </section>
       <section>
         <!-- This is for making a new Event and send it to our DB -->
         <h1 class="addEvent">Add Event</h1>
        <footer  class="form">          
          <input type="text" placeholder="Name" v-model="newEvent.name">
          <input type="text" placeholder="Location" v-model="newEvent.where.location">
          <input type="text" placeholder="Address" v-model="newEvent.where.adress">
          <input type="text" placeholder="Date" v-model="newEvent.when.date">
          <input type="text" placeholder="Start time" v-model="newEvent.when.start">
          <input type="text" placeholder="End time" v-model="newEvent.when.end">
          <input type="number" placeholder="Price" v-model="newEvent.price">
          <input type="text" placeholder="Type of spot" v-model="newEvent.spot">
          <a href="#" class="btnAddEvent" @click="createEvent">Add event!</a>
        </footer>
      </section>
    </section>
  </main>
</template>

<!-- Functions -->
<script>
export default { 
  name: 'admin',
    beforeMount() {
    this.$store.dispatch('getEvent');
  },
  data() {
    /* Our schema from our DB */
    return {
      newEvent: {
        code: '',
        name: "",
        where: {
          location: "",
          adress: "",
        },
        when: {
          date: "",
          start: "",
          end: "",
        },
        price: "",
        spot: "",
      }
    }
  },
  /* This runs 2 functions in our store.js: One is getEvent where we get our existing 
  * Events. Second function it runs is createEvent where it posts upcoming events. */
  methods: {
    async createEvent(){
      this.$store.dispatch('createEvent', this.newEvent);
      this.$store.dispatch("getEvent");
    }
  },
  computed: {
    events() {
      return this.$store.state.events;
    }
  }
}
</script>

<!-- Styling -->
<style lang="scss">
@import '../scss/_variables';
$baseline: 2.5rem;
#admin {
  @extend %center;
  .logo {
    position: fixed;
    width: 4rem;
    left: 2rem;
    top:2rem;
  }

  .container {
    max-width: 1000px;
    width:100%;
    
    .events {
      background: rgba($color: #000, $alpha: .4);
      border-radius: 3px;
      padding: 1rem;
      
    table {
      width: 100%;

      thead {
        tr {
          color: #F56B9A;
          text-transform: uppercase;

          th {
            border-bottom: 1px solid #fff;
            padding: 0.5rem 0;
          }
        }
      }
    }
    tbody {
      tr {
         td {
           color: rgba($color: #fff, $alpha: 0.8);
           padding: 1rem 0;
           font-size: .9rem;
           
           &:first-child {
              font-weight: 700;
              color: white;
              }
           }
         &:nth-child(2n) {
           background:rgba($color: #fff, $alpha: .05);
         }
      }
    }
  }
  .form {
   
    display: grid;
    background: rgba($color: #000, $alpha: .4);
    padding: 1rem;
    grid-gap: .5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: $baseline $baseline $baseline $baseline;
    grid-template-areas: 
    "name name"
    "location location"
    "date date"
    "start end"
    "price ."
    "btn btn";

    input {
          max-width: 42vw;
      font-family: 'Sansita', sans-serif;
      background: none;
      border: 1px solid rgba($color: #fff, $alpha: 0.4);
      border-radius: 3px;
      padding: .25rem;
      font-size: 1.2rem;
      color: white;
      &.name {grid-area: name}
      &.location {grid-area: location}
      &.adress {grid-area: date}
      &.start {grid-area: start}
      &.end {grid-area: end}
      &.price {grid-area: price}
      &.available {grid-area: available}
      &.addEvent {grid-area: addEvent}
      }
    }
  }
  .btnAddEvent {

        width: 202%;
        padding: 12px 0px 16px 0px;
        margin: 4px 0;
        margin-top: 1rem;
        display: inline-block;
        border: none;
        border-radius: 4px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #fff;
        font-size: 21px;
        font-family: 'Sansita', sans-serif;
        background: #f56b9a;
        text-decoration: none;
        cursor: pointer;

  }
  .btnAddEvent:hover {
    background-color: rgb(128, 27, 179);
  }
}
</style>
