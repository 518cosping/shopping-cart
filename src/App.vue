<template>
  <div id="app">
    <h3>demo by vue</h3>
    <list></list>
    <cart></cart>
    <info></info>
  </div>
</template>

<script>
import list from "./components/list/list.vue"
import info from "./components/info/info.vue"
import cart from "./components/cart/cart.vue"
export default {
  name: 'app',
  components:{
    list,
    info,
    cart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
