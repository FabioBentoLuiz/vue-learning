import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      console.log(state.counter);
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function() {
        context.commit('increment');
      }, 1000);
    },
    increase(context, payload) {
      setTimeout(function() {
        context.commit('increase', payload);
      }, 1000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
};

const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {};
  },
  mutations: {
    login(state, payload) {
      state.user = payload;
    },
  },
  getters: {
    loggedUser(state) {
      return state.user;
    },
  },
  actions: {
    login(context, payload) {
      context.commit('login', payload);
    },
    logout(context) {
      context.commit('login', undefined);
    },
  },
});

const app = createApp(App);
app.use(store);

app.mount('#app');
