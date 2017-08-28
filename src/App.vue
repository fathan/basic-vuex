<template>
  <div id="app">
    <h2>Sample Implement Vuex State Management Vue.JS</h2>
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  #app{
    h2{
      font-family: arial;
      text-transform: uppercase;
      text-align: center;
      color: #0295c1;
    }
  }
</style>
