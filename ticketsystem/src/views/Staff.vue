<template>
  <main class="Staff">
    <h1>Staff</h1>


<form action="#">
<input type="text" name="name" placeholder="TICKET CODE" class="staffTicket"> <br>

<input type="submit" value="Verify ticket">
</form>



  </main>
</template>

<!-- -->
<script>
export default {
  name: 'staff'
}
</script>

<!-- -->
<style>

.staffTicket {
width: 30%;
padding: 8px 10px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
-webkit-box-sizing: border-box;
box-sizing: border-box;
color: #f56b9a;
font-size: 25px;
font-family: 'Sansita', sans-serif;
background: black;
text-align: center;

}

input[type=submit] {
  width: 20%;

}

</style>