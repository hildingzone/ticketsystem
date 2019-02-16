<template>
    <article class="event">
        <aside>{{event.date}}</aside>
        <section class="info">
            <h2>{{event.name}}</h2>
                        <section class="location">{{event.where.adress}}, {{event.where.location}}</section>
                                    <button class="buybutton">Buy tickets</button>

            <section class="date">{{event.when.date}} </section>

         <br>   <section class="price">{{event.price}} :-</section>
        </section>
    </article>
</template>

<script>
export default {
    name: 'event',
    props: ['event'],

    
}
</script>


<style lang="scss">

.event {

background-color: black;
display: inline-block;
padding: 0px 10px 10px 10px;
width: 50%;
border: 1px solid white;
margin-bottom: 10px;
text-align: left;
}

.date {
font-size: 20px;
float: right;
margin-left: 12px;
padding-right: 52px;

}

.location {
display: inline-block;
color: #6bedfe;
font-size: 20px;

}


.price {
    display: inline-block;

}

.time {
    display: inline-block;

}

.buybutton {
float: right;
background-color: #f56b9a;
font-size: 20px;
border: 1px solid #f56b9a;
font-family: 'Sansita', sans-serif;
padding: 0px 10px 5px 10px;
color: #fff;


}

h2 {
    text-transform: uppercase;
    font-size: 20px;
    color: #f56b9a;
}


</style>
