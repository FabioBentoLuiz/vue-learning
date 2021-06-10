import { createStore } from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters';
import counterModule from './counter/index.js';

const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {};
  },
  mutations,
  getters,
  actions,
});

export default store;
