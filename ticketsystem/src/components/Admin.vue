<template>



<div class="lista">

    <article class="events">


<table class="container">
	<tbody>
		<tr>
			<td>{{event.name}}</td>
			<td>{{event.where.location}}</td>
			<td>{{event.when.date}}</td>
		</tr>
			</tbody>
</table>

    </article>
</div>
    
</template>

<script>
export default {
    name: 'events',
    props: ['event'],

methods: {
    selectEvent(event){
        console.log(event);
        this.$store.commit("selectEvent", event);
        this.$router.push("/events");
    }
}
    
}
</script>


<style lang="scss">

.container th h1 {
    font-weight: bold;
    text-transform: uppercase;
	  font-size: 1em;
  text-align: left;
  color: #6ceeff;
  
}

.container {
	  text-align: left;
	  overflow: hidden;
	  width: 50%;
	  margin: 0 auto;
  padding: 17px;
background: black;

}

.container td, .container th {
padding: 1%;
border-bottom: 1px solid white;
}

.container td:first-child { color: #F56B9A; }

.lista {
    background-color: black;
    width: 50%;
    margin: 0 auto;


}

.date {
font-size: 20px;
float: right;
margin-left: 12px;
padding-right: 52px;

}

.buybutton {
float: right;
background-color: #f56b9a;
font-size: 20px;
border: 1px solid #f56b9a;
font-family: 'Sansita', sans-serif;
padding: 0px 10px 5px 10px;
color: #fff;
cursor: pointer;


}

h2 {
    text-transform: uppercase;
    font-size: 20px;
    color: #f56b9a;
}

.addEvent,input[type=number],  select {
width: 50%;
padding: 8px 10px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
-webkit-box-sizing: border-box;
box-sizing: border-box;
color: #f56b9a;
font-size: 15px;
font-family: 'Sansita', sans-serif;
background: black;

}

input[type=submit] {
width: 30%;
padding: 1px 0px 6px 0px;
margin: 8px 0;
display: inline-block;
border: none;
border-radius: 4px;
-webkit-box-sizing: border-box;
box-sizing: border-box;
color: #fff;
font-size: 21px;
font-family: 'Sansita', sans-serif;
background: #f56b9a;
}



</style>
