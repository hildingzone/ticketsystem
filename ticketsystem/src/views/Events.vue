<template>
  <main id="events">
    <section class="container">
      <section class="events">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Where</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- Here we import our Events we have added on our DB -->
          <tr v-for="event in events" :key="event._id" :event="event">
            <td>{{event.name}}</td>
            <td>{{event.where.location}}, {{event.where.adress}}</td>
            <td>{{event.when.date}}</td>
            <td><button class="buybutton" @click="selectEvent(event)">Buy tickets</button></td>
          </tr>
        </tbody>
      </table>
      </section>
    </section>
  </main>
</template>

<!-- Functions -->
<script>
export default { 
  name: 'events',
  computed: {
    events() {
      return this.$store.state.events;
    }
  },
  methods: {
    /* When event is picked, it pushes customer to our buy site */
    selectEvent(event){
        this.$store.commit("selectEvent", event);
        this.$router.push("/buy");
    }
  },
}
</script>

<!-- Styling -->
<style lang="scss">
@import '../scss/_variables';
$baseline: 2.5rem;
#events {
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
           font-size: 1.1rem;
           
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
      .buybutton {
        background-color: #f56b9a;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        font-family: 'Sansita', sans-serif;
        padding: 0px 10px 5px 10px;
        color: #fff;
        cursor: pointer;
      }
      .buybutton:hover {
        background-color: rgb(135, 0, 169);
      }
    }
  }
}
</style>
