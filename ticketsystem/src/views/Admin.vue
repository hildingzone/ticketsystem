<template>
  <main id="admin">
    <img src="../assets/small-logo.png" class="logo" alt="logo">
    <section class="container">
      <section class="events">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Where</th>
            <th>Ticket available</th>
            <th>Ticket sold</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event._id" :event="event">
            <td>{{event.name}}</td>
            <td>{{event.where.location}}</td>
         <!--   <td>{{event.tickets}}</td>
            <td>{{event.tickets}}</td> -->
          </tr>
        </tbody>
      </table>
      </section>
       <section>
         <h1 class="addEvent">Add Event</h1>
        <side class="form">          
          <input type="text" placeholder="event name" v-model="name">
          <input type="text" placeholder="event location" v-model="where.location">
          <input type="text" placeholder="event adress" v-model="where.adress">
          <input type="text" placeholder="event start time" v-model="when.date">
          <input type="text" placeholder="event end time" v-model="when.start">
          <input type="text" placeholder="event date" v-model="when.end">
          <input type="number" placeholder="event price" v-model="price">
          <input type="number" placeholder="event tickets available" v-model="tickets.available">
          <a href="#" class="btn" @click="createEvent">Create Event!</a>
        </side>
      </section>
    </section>
  </main>
</template>

<script>
export default { 
  name: 'admin',
    beforeMount() {
    this.$store.dispatch('getEvent');
  },
  data () {
    return {
      name: '',
      price: Number,
      where: {
        location: '',
        adress: '',
      },
      when: {
        date: '',
        start: '',
        end: '',
      },
      tickets: {
        available: Number,
        sold: Number
      },
    }
  },
  method: {
    async createEvent () {
      let resp = await this.$http.post('http://localhost:3000/events', this);
      this.$store.dispatch('getEvents');
    }
  },
  computed: {
    events() {
      return this.$store.state.events;
    }
  }
}
</script>

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
  /*  display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem; */
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
    grid-template-rows: $baseline $baseline $baseline $baseline $baseline $baseline;
    grid-template-areas: 
    "name name"
    "location location"
    "date date"
    "start end"
    "price ."
    "btn btn";

    input {
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
}

</style>

