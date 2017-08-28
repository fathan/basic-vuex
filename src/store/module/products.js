const moduleA = {
  state: {
    products: [
      {name: 'Toyota Rush Sportivo', price: 2000000},
      {name: 'Macbook Pro Retina', price: 400000},
      {name: 'Yamaha V-IXION', price: 600000},
      {name: 'Helm Racing', price: 800000}
    ]
  },
  getters: {
    saleProducts: state => {
      let saleProducts = state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      })
      return saleProducts
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function () {
        context.commit('reducePrice', payload)
      }, 2000)
    }
  }
}

export default moduleA
