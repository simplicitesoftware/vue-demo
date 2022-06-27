<template>
  <div>
    <input type="text" v-model="ref" placeholder="REFxxx"/>
    <input type="text" v-model="name" placeholder="Product name"/>
    <button v-on:click="add">Add product</button>
  </div>
</template>

<script>
export default {
  name: 'DemoAddProduct',
  methods: {
    async add() {
      const vm = this;
      console.log(vm.ref, vm.name);
      const prd = vm.$simplicite.getBusinessObject('DemoProduct');
      let item = await prd.getForCreate();
      console.log(item);
      item.demoPrdSupId = 1;
      item.demoPrdType = 'OTHER';
      item.demoPrdReference = vm.ref;
      item.demoPrdName = vm.name;
      console.log(prd.item);
      item = await prd.save(item);
      console.log(item);
    }
  }
}
</script>

<style scoped>
input, button {
  margin: .5rem;
}
</style>
