import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters';
// import counterModule from './counter/index.js';

const store = createStore({
  //namespaced: true,
  modules: {
    // counter: counterModule
  },
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
      products: []
    };
  },
  mutations,
  getters,
  actions
});

export default store;
