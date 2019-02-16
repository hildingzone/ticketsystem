<template>
  <article class="ticket">
    <section class="what">
        <p class="what">What</p>
        <h1>{{ticket.name}}</h1>
    </section>
    <section class="where">
        <p class="where">Where</p>
        <h3>{{ticket.where.location}}</h3>
        <p>{{ticket.where.adress}}</p>
    </section>
    <section class="when">
        <p class="when">When</p>
        <h3>{{ticket.when.date}}</h3>
    </section>
    <section class="from">
        <p class="from">From</p>
        <h3>{{ticket.when.start}}</h3>
    </section>
    <section class="to">
        <p class="to">To</p>
        <h3>{{ticket.when.to}}</h3>
    </section>
    <section class="info">
        <p class="info">Info</p>
        <p>{{ticket.info}}</p>
    </section>
    <section class="code">
        <h1 class="barcode">{{ ticket.code }}</h1>
        <p class="utfcode">#{{ ticket.code }}</p>
    </section>
  </article>
</template>

<!-- -->
<script>
export default {
  name: 'ticket',
  props: ['ticket']
}

</script>

<!-- -->
<style lang="scss">
@import '../scss/_variables';
$baseline: 18px;
.ticket {
    position: absolute;
    max-width: 19rem;
    background: white;
    box-shadow: 0 0 3rem rgba($color: #000000, $alpha: .15);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 30px;
    grid-template-rows: $baseline*5 $baseline*6 $baseline*4 $baseline*5 $baseline*6;
    border-radius: .25rem;
    grid-template-areas: 
    "what what what"
    "where where where"
    "when from to"
    "info info info"
    "code code code";
    h2 {
        margin: 0;
        font-size: 1.4rem;
        padding: .125rem 1rem;
        font-weight: 500;
        color: white;
    }
    p {
        padding: .25rem 1rem;
        margin: 0;
        color: white;
    }
    .what {
        grid-area: what;
        border-bottom: 1px dotted red;
        background: white;
        h1 {
            color: #F56B9A;
            margin: 0;
            padding: 0 0 0 1rem;
            font-size: 2rem;
        }
    }
    .where {
        grid-area: where;
        background: green;
        border-bottom: 1px dotted red;
    }
    .when {
        grid-area: when;
        background: red;
    }
    .from {
        grid-area: from;
        background: grey;
        border-left: 1px dotted red;
        border-right: 1px dotted red;
    }
    .to {
        grid-area: to;
        background: greenyellow;
    }
    .info {
        grid-area: info;
        background: yellowgreen;
        border-top: 1px dotted red;
        border-bottom: 1px dotted red;
    }
    .code {
        grid-area: code;
        background: blue;
        @extend %center;
        flex-direction: column;
        justify-content: center;
        .barcode {
            font-family: 'Libre Barcode 128', cursive;
            margin: 1rem 0 0 0;
            padding: 0;
            font-size: 5rem;
            font-weight: 100;
        }
        .utfcode {
            margin: -1.5rem 0 0 0;
            padding: 0;
            color: rgba(0, 0, 0, .6);
            letter-spacing: .25rem;
        }
    }
}
</style>