<template>
  <div id="vue-demo">
    <img alt="Logo" src="./assets/logo.svg">
    <Catalog/>
    <div>&copy; Simplicit&eacute; Software (version {{ $version }}),
    powered by <a href="https://vuejs.org" rel="noopener noreferrer" target="_blank">Vue.js</a></div>
  </div>
</template>

<script>
import Catalog from './components/Catalog.vue'

export default {
  name: 'App',
  components: { Catalog }
}
</script>

<style>
#vue-demo {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
}
@media screen and (min-width: 1024px) {
  #vue-demo {
    width: 1024px;
    margin: 0 auto;
  }
}
</style>
