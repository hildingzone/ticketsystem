<template>



<div class="container">


            <h2>{{event.name}}</h2>
            <section class="location">{{event.where.adress}}</section>
            <section class="date"> </section><br>
            <section class="price">{{event.when.date}}</section>

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

.location {
display: inline-block;
color: #6bedfe;
font-size: 20px;

}


.container {
text-align: left;
overflow: hidden;
width: 48%;
margin: 0 auto;
padding: 0px 0px 11px 32px;
background: black;
border-bottom: 1px solid white;

}


h2 {
    text-transform: uppercase;
    font-size: 20px;
    color: #f56b9a;
    margin-bottom: -2px;
}

.addEvent,input[type=number],  select {
width: 50%;
padding: 8px 10px;
margin: 18px 0px 0px 0px;
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
