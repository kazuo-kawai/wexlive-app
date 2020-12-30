import Vue from 'vue'
import Vuex from 'vuex'
import userKey from './modules/userKey.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userKey,
  }
})
