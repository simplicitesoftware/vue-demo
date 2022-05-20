<template>
  <div id="vue-demo">
    <DemoHeader/>
    <DemoCatalog/>
    <DemoFooter/>
  </div>
</template>

<script>
import DemoHeader from './components/DemoHeader.vue'
import DemoCatalog from './components/DemoCatalog.vue'
import DemoFooter from './components/DemoFooter.vue'

export default {
  name: 'App',
  components: { DemoHeader, DemoCatalog, DemoFooter }
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
