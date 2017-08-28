import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './module/products'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    a: moduleA
  }
})
