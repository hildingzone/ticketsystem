<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"> 
    <FirstPage msg="Where it's @"/>
  </div>
</template>




<script>
// @ is an alias to /src
import FirstPage from '@/components/FirstPage.vue'

export default {
  name: 'home',
  components: {
    FirstPage
  }
}
</script>
