<template>
    <main id="admin">
        <header>
            <h1>Admin</h1>
        </header>
        <section class="content">
				<p class="adminHeader">	Name | Where | When </p> <br>


        <event v-for="event in events" :key="event.id" :event="event" />

    <section class="addEvent">
      <h2>Add Event</h2>

<form action="#">
<input type="text" name="name" placeholder="Name" class="addEvent"> <br>
<input type="text" name="where" placeholder="Where" class="addEvent"> <br>
<input type="text" name="date" placeholder="Date" class="addEvent"> <br>
<input type="text" name="from" placeholder="From time" class="addEvent"> <br>
<input type="text" name="to" placeholder="To time" class="addEvent"> <br>
<input type="number" name="seats" placeholder="# Seats" class="addEvent"> <br>


<input type="submit" value="Submit">
</form>


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
  data(){
    return {
      activeStep: 2,
      filter: null
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