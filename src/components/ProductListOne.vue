<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <hr>
    <ul>
      <li v-for="product in saleProducts" v-bind:key="product.name">
        <span class="name">{{product.name}}</span>
        <span class="price">Rp. <span class="yellow">{{product.price}}</span></span>
      </li>
    </ul>
    <button v-on:click="reducePrice(4)">
      Reduce Price
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  computed: {
    // STATE BASIC
    products () {
      return this.$store.state.products
    },
    // GETTERS BASIC
    ...mapGetters([
      'saleProducts'
    ])
  },
  methods: {
    // MUTATIONS BASIC
    ...mapActions([
      'reducePrice'
    ])
  }
}
</script>

<style lang="scss" scoped>
  #product-list-one{
    background: #f6f5f5;
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    padding: 25px;
    width: 50%;
    margin: auto;
    display: table;
    font-family: arial;
    margin-bottom: 30px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    h2{
      text-align: center;
      font-size: 20px;
      text-transform: uppercase;
    }

    ul{
      padding-left: 0px;

      li{
        padding: 15px;
        list-style: none;

        span{
          color: #FFFFFF;
          font-size: 16px;
          text-align: center;
          padding: 15px;
          width: 100%;

          &.name{
            text-transform: uppercase;
            margin-right: 10px;
            background-color: #05729c;
            color: #FFFFFF;
            width: 44%;
            float: left;
            margin-bottom: 15px;
          }

          &.price{
            background-color: #333333;
            width: 44%;
            float: right;

            .yellow{
              color: yellow;
            }
          }
        }
      }
    }

    button{
      background: #108335;
      padding: 20px;
      text-align: center;
      text-transform: uppercase;
      font-size: 14px;
      display: block;
      float: left;
      width: 99%;
      color: #FFFFFF;
      border: 0px;
      margin-top: 10px;
    }
  }
</style>
