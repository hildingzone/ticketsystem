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
         <tr> 
            <td>{{event.name}}</td>
            <td>{{event.where.location}}, {{event.where.adress}} </td>
            <td>{{event.when.date}}, {{event.when.start}}, {{event.when.end}}</td>
            <td><button class="buybutton" @click="selectEvent(event)">Buy tickets</button></td>
          </tr>
        </tbody>
      </table>
      </section>

    </section>
  </main>
</template>

<script>
export default {
  name: 'events',
    beforeMount() {
    this.$store.dispatch('getEvent');
  },
  computed: {
    events(){
      return this.$store.state.events;
    }
  },
  methods: {
    selectEvent(event){
        this.$store.commit("selectEvent", event);
        this.$router.push("/buy");
    }
  },
}
</script>
