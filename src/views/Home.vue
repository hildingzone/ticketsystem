<template>
  <main class="home">
    <img alt="Vue logo" src="../assets/logo.png"> 
    <FirstPage msg="Where it's @"/>
  </main>
</template>

<!-- -->
<script>
import FirstPage from '@/components/FirstPage.vue'

export default {
  name: 'home',
  components: {
    FirstPage
  }
}
</script>

<!-- -->
<style lang="scss">

</style>
