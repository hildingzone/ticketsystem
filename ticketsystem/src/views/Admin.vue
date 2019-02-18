<template>
  <main class="admin">
    <section>
    </section>
    <section class="active-events">

<h1>Admin</h1>

<table class="container">
	<thead>
		<tr>
			<th><h1>Namn</h1></th>
			<th><h1>Var</h1></th>
			<th><h1>Antal platser</h1></th>
			<th><h1>Sålda biljetter</h1></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Robyn</td>
			<td>Göteborg</td>
			<td>100</td>
			<td>0</td>
		</tr>
		<tr>
			<td>Rymdreglage</td>
			<td>Stockholm</td>
			<td>100</td>
			<td>0</td>
		</tr>
		<tr>
			<td>Alice in Videoland</td>
			<td>Göteborg</td>
			<td>100</td>
			<td>0</td>
		</tr>
    <tr>
			<td>Slagsmålsklubben</td>
			<td>Göteborg</td>
			<td>100</td>
			<td>0</td>
		</tr>
  
	</tbody>
</table>


    </section>



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

  </main>
</template>




<!-- -->
<script>
export default {
  name: 'admin'
}
</script>

<!-- -->
<style lang="scss">


.addEvent {
	  width: 50%;
	  margin: 0 auto;
background: black;
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



@import url('https://fonts.googleapis.com/css?family=Sansita:400,700i,800i');


body {
font-family: 'Sansita', sans-serif;
  line-height: 1.42em;
}

h1 {
  font-size:2em; 
  font-weight: 300;
  line-height:1em;
  text-align: center;
}

h2 {
  margin-top: 20px;
  padding-top: 10px;
}

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


.admin {
  position: relative;
  img {
    position: absolute;
    top: 32px;
    left: 32px;
  } 
}



</style>

