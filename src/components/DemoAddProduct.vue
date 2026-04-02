<template>
  <div>
    <input v-model="ref" type="text" placeholder="REFxxx">
    <input v-model="name" type="text" placeholder="Product name">
    <button @click="add">Add product</button>
  </div>
</template>

<script>
export default {
  name: 'DemoAddProduct',
  methods: {
    async add() {
      const vm = this;
      const prd = vm.$simplicite.getBusinessObject('DemoProduct');
      let item = await prd.getForCreate();
      item.demoPrdSupId = 1;
      item.demoPrdType = 'OTHER';
      item.demoPrdReference = vm.ref;
      item.demoPrdName = vm.name;
      await prd.save(item);
    }
  }
};
</script>

<style scoped>
input, button {
  margin: .5rem;
}
</style>
