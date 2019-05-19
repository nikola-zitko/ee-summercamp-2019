<template>
  <div id="app">
    <navBar/>
    <router-view/>
  </div>
</template>


<script>
// @ is an alias to /src
import navBar from '@/components/navBar.vue'


export default {
  name: 'home',
  components: {
    navBar
  }
}
</script>


<style>
body{
  margin: auto;
}
#app {
  font-family: 'Play', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  padding: 0;
}



</style>
