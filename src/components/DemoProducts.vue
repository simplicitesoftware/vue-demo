<template>
  <div>
    <p v-if="products.length === 0">Loading product catalog...</p>
    <ul v-else>
      <li v-for="product in products" :key="product.row_id">
        <img v-if="product.demoPrdPicture" :alt="product.demoPrdReference" :src="'data:' + product.demoPrdPicture.mime + ';base64,' + product.demoPrdPicture.content">
        <h1>{{ product.demoPrdName }}</h1>
        <h2>{{ product.demoPrdReference }}</h2>
        <p>{{ product.demoPrdDescription }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DemoCatalog',
  data() {
    return { products: [] };
  },
  async created() {
    const vm = this;
    vm.products = await vm.$simplicite.getBusinessObject('DemoProduct').search(
      { demoPrdAvailable: true }, // Filters
      { inlineDocuments: [ 'demoPrdPicture' ] } // Options
    );
  }
};
</script>

<style scoped>
img {
  max-width: 75%;
}
h1 {
  color: #999;
  font-size: 1.5rem;
}
h2 {
  color: #25911e;
  font-size: 1.25rem; font-style: italic;
}
p {
  color: #777;
}
ul {
  list-style-type: none;
  margin: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
}
li {
  background-color: #333;
  display: inline-block;
  vertical-align: top;
  border: solid .0625rem #222;
  border-radius: .5rem;
  box-shadow: .5rem .5rem 1rem #222;
  margin: .75rem;
  padding: .75rem;
  min-width: 15rem;
  max-width: 15rem;
  height: 22.5rem;
  overflow: hidden;
}
</style>
