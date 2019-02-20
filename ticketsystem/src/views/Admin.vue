<template>
    <main id="admin">
        <header>
            <h1>Admin</h1>
        </header>





        
        <section class="content">



        <event v-for="event in events" :key="event.id" :event="event" />




    <section class="addEvent">
      <h2>Add Event</h2>


<input type="text" name="name" placeholder="Name" class="addEvent" v-model="newEvent.name"> <br>
<input type="text" name="where" placeholder="Where" class="addEvent" v-model="newEvent.where.location"> <br>
<input type="text" name="where" placeholder="Adress" class="addEvent" v-model="newEvent.where.adress"> <br>
<input type="text" name="date" placeholder="Date" class="addEvent" v-model="newEvent.when.date"> <br>
<input type="text" name="from" placeholder="From time" class="addEvent" v-model="newEvent.when.start"> <br>
<input type="text" name="to" placeholder="To time" class="addEvent" v-model="newEvent.when.end"> <br>
<input type="number" name="price" placeholder="Price" class="addEvent" v-model="newEvent.price"> <br>

<a href="#" class="btnAdd" @click="createEvent"> Add event</a>



    </section>
        </section>
        <pager :activeStep="activeStep"/>
    </main>
</template>

<script>
import event from '@/components/Admin';
import pager from '@/components/Pager';
export default {
  name: 'admin',
    beforeMount() {
    this.$store.dispatch('getEvent');
  },
  data() {

    return {

      newEvent: {

      name: "hej",
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
      }
    }
  },

  methods: {
    async createEvent(){

     let resp = await this.$http.post("http://localhost3000/events", this.newEvent);
     console.log(resp);

// Get events
this.$store.dispatch("getEvent");

    }
  },

  components: {
    pager,
		event,
		
  },
  computed: {
    events(){
      return this.$store.state.events;
    }
  }
}


</script>
<style lang="scss">
@import '../scss/variables';


.adminHeader {
	margin-bottom: 10px;
}

</style>