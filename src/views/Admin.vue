<template>
  <main class="admin">
    <section>
      <img src="@/assets/small-logo.png">
    </section>
    <section class="active-events">
      <ul>
        <li>Namn</li>
        <li>Var</li>
        <li>Antal Platser</li>
        <li>Antal sålda biljetter</li>
      </ul>
    </section>
    <section>
      <h3>Add Event</h3>
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
.admin {
  position: relative;
  img {
    position: absolute;
    top: 32px;
    left: 32px;
  } 
}
.active-events {
  background: rgba(0, 0, 0, 0.3);
}
ul {
  color: #F56B9A;
  list-style-type: none; 
  li {
    display: inline;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 13px;
    text-transform: uppercase;
  }
}


</style>

