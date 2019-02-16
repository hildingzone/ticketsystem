<template>
    <article class="event">
        <aside>{{event.date}}</aside>
        <section class="info">
            <h1>{{event.name}}</h1>
            <section class="location">{{event.where.location}}</section>
            <section class="time">{{event.when.start}} - {{event.when.end}}</section>
            <section class="price">{{event.price}} :-</section>
        </section>
    </article>
</template>

<script>
export default {
    name: 'event',
    props: ['event'],

    
}
</script>
