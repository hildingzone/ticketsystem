<template>
  <main id="admin">
    <section class="container">
      <img src="../assets/small-logo.png">
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
      <aside class="form">
        <h1>Add Event</h1>
        <input type="text" placeholder="event name" v-model="name">
        <input type="text" placeholder="event location" v-model="where.location">
        <input type="text" placeholder="event adress" v-model="where.adress">
        <input type="text" placeholder="event start time" v-model="when.date">
        <input type="text" placeholder="event end time" v-model="when.start">
        <input type="text" placeholder="event date" v-model="when.end">
        <input type="number" placeholder="event price" v-model="price">
        <input type="number" placeholder="event tickets available" v-model="tickets.available">
        <input type="number" placeholder="event tickets sold" v-model="tickets.sold">
        <a href="#" class="btn" @click="createEvent">Create Event!</a>
      </aside>
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

#admin {
  display: flex;
  justify-content: center;

  .logo {
    position: fixed;
    margin: 1rem;
    width: 2rem;
    left: 0;
  }
  
  .container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    max-width: 1000px;
    width:100%; 

    table {
      background: rgba($color: #000000, $alpha: 1.0);
      padding: 1rem;
      display: grid;
      justify-content: space-evenly;

      thead {
        
        tr {

          th {
            color: #F56B9A;
            text-align: left;
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
         }
         &:nth-child(2n) {
           background:rgba($color: #fff, $alpha: .05);
         }
      }
    }
    .form {
      display: grid;
      grid-area: form;
      background: rgba($color: #000000, $alpha: 1.0);
      padding: 1rem;

      input {
        width: 100%;
        background: none;
        border: 1px solid rgba($color: #fff, $alpha: 0.8);
        border-radius: 3px;
        padding: .25rem;
        font-size: 1.2rem;
        color: white;
        margin: 0 0 1rem;
      }
    }
  }
}

</style>

