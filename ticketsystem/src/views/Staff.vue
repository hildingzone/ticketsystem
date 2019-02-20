<template>
  <main class="Staff">
    <h1>Staff</h1>


<form action="#">
<input type="text" name="name" placeholder="TICKET CODE" class="staffTicket"> <br>

<input type="submit" class="btnAdd" value="Verify ticket">
</form>



  </main>
</template>

<!-- -->
<script>
export default {
  name: 'staff',
  
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

.btnAdd {
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
text-decoration: none;
cursor: pointer;
}


</style>