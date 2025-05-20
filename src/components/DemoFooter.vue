<template>
  <footer>
    &copy; Simplicité Software (version {{ this.$simplicite.getModuleVersion() }}),
    powered by <a href="https://vuejs.org" rel="noopener noreferrer" target="_blank">Vue.js</a>
  </footer>
</template>

<style scoped>
footer {
  font-size: small;
}
</style>
