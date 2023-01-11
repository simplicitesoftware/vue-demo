<template>
  <header>
    <div v-if="!configuration.url"><a href="/ui/"><img alt="Sign in" src="../assets/logo.svg"></a></div>
    <div v-else><img alt="Logo" src="../assets/logo.svg"></div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      configuration: this.$configuration
    };
  }
};
</script>

<style scoped>
img {
  max-width: 75%;
}
</style>