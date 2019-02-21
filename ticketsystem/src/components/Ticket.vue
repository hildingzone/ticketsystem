<!-- This is imported in our tickets Vue -->
<template>
  <article class="ticket">
    <section class="what">
        <p class="what"></p>
        <h1>{{ticket.event.name}}</h1>
    </section>
    <section class="where">
        <h3>{{ticket.event.where.location}}</h3>
        <p>{{ticket.event.where.adress}}</p>
    </section>
    <section class="when">
        <p class="when">When</p>
        <h3>{{ticket.event.when.date}}</h3>
    </section>
    <section class="from">
        <p class="from">From</p>
        <h3>{{ticket.event.when.start}}</h3>
    </section>
    <section class="to">
        <p class="to">To</p>
        <h3>{{ticket.event.when.end}}</h3>
    </section>
    <section class="code">
        <p class="spot">{{ticket.event.spot}}</p>
        <h1 class="barcode">{{ ticket.code }}</h1>
        <p class="utfcode">#{{ ticket.code }}</p>
    </section>
  </article>
</template>

<!-- Functions -->
<script>
export default {
  name: 'ticket',
  props: ['ticket']
}
</script>

<!-- Styling -->
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Libre+Barcode+128');
@import '../scss/_variables';
$baseline: 18px;

.ticket {
    padding-bottom: 15px;
    margin: 1rem auto;
    font-family: 'Sansita', sans-serif;
    max-width: 19rem;
    background: white;
    box-shadow: 0 0 3rem rgba($color: #000000, $alpha: .15);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 30px;
    grid-template-rows: $baseline*5 $baseline*6 $baseline*4 $baseline*6;
    border-radius: .25rem;
    grid-template-areas: 
    "what what what"
    "where where where"
    "when from to"
    "code code code";

    h3 {
        margin: 0;
        font-size: 1rem;
        color:#F56B9A;
    }
    p {
        padding: .25rem 1rem;
        margin: 0;
        color: black;
    }
    .what {
        grid-area: what;
        background: white;

        h1 {
            color: #F56B9A;
            margin: 0;
            padding: 1rem 0 0 1rem;
            font-size: 2rem;
        }
    }
    .where {
        grid-area: where;
        background:white;
        border-bottom: 1px dotted rgb(249, 248, 248);
        padding-bottom: 1rem;
        color: #F56B9A;
        font-size: 1.4rem;
    }
    .when {
        grid-area: when;
        background:#eaeaea;
        
    }
    .from {
        grid-area: from;
        background: #eaeaea;
        border-left: 1px dotted white;
        border-right: 1px dotted white;
    }
    .to {
        grid-area: to;
        background: #eaeaea;
        color: black;
    }

    .code {
        grid-area: code;
        background: white;
        @extend %center;
        flex-direction: column;
        justify-content: center;
        padding-top: 28px;

        .barcode {
            font-family: 'Libre Barcode 128', cursive;
            margin: 1rem 0 0 0;
            padding: 0;
            font-size: 5rem;
            font-weight: 100;
            color: black;
        }
        .spot {
            margin: 1px 1px 1px 1px;
            padding: 0;
            font-size: 1rem;
            font-weight: 100;
            color: black;
        }
        .utfcode {
            margin: -1.5rem 0 1rem 0;
            padding: 0;
            color: rgba(0, 0, 0, .6);
            letter-spacing: .25rem;
        }
    }
}
</style>