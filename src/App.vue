<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/events">Events</router-link> |
      <router-link to="/buy">Buy</router-link> |
      <router-link to="/tickets">Tickets</router-link> |
      <router-link to="/staff">Staff</router-link> |
      <router-link to="/admin">Admin</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '/scss/main.scss';


</style>
