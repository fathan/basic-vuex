<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <hr>
    <ul>
      <li v-for="product in saleProducts" v-bind:key="product.name">
        <span class="name">{{product.name}}</span>
        <span class="price">Rp. <span class="yellow">{{product.price}}</span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.state.products
    },
    saleProducts () {
      return this.$store.getters.saleProducts
    }
  }
}
</script>

<style lang="scss" scoped>
#product-list-two{
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
          background-color: #bb0056;
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
}
</style>
