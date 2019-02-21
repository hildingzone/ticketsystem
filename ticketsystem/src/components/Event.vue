<template>
  <main id="admin">
    <section class="container">
      <section class="events">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Where</th>
            <th>Time</th>
            <th>Tickets</th>
          </tr>
        </thead>
        <tbody>
         <tr v-for="event in events" :key="event._id" :event="event"> 
            <td>{{event.name}}</td>
            <td>{{event.where.location}}, {{event.where.adress}} </td>
            <td>{{event.when.date}}, {{event.when.start}}, {{event.when.end}}</td>
            <td> <button class="buybutton" @click="selectEvent(event)">Buy tickets</button>
</td>
          </tr>
        </tbody>
      </table>
      </section>

    </section>
  </main>
</template>

<script>

export default { 
  name: 'event',
  methods: {
    selectEvent(event){
        this.$store.commit("selectEvent", event);
        this.$router.push("/buy");
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
           font-size: 1rem;
           
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
  }
  .buybutton {
        margin: 4px 0;
        display: inline-block;
        border: none;
        border-radius: 4px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #fff;
        font-size: 1rem;
        font-family: 'Sansita', sans-serif;
        background: #f56b9a;
        text-decoration: none;
        cursor: pointer;

  }
  .buybutton:hover {
    background-color: rgb(128, 27, 179);
  }
}
</style>
