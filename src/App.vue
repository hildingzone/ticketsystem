<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/events">Events</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #231f42;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    &.router-link-exact-active {
      color: rgb(108, 238, 255);
    }
  }
}
</style>
