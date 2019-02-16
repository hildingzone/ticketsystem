<template>
    <article class="event">
        <aside>{{event.date}}</aside>

        <section>
            <h1>{{event.name}}</h1>
            <p>{{event.where.location}}</p>
            <p>{{event.start}} - {{event.end}}</p>
        </section>
    </article>
</template>

<script>
export default {
    
}
</script>
