<template>
  <div>
    <base-container title="Vuex" v-if="user">
      <p>Hello {{ user.name }}</p>
      <the-counter></the-counter>
      <favorite-value></favorite-value>
      <button @click="increment">Add 2</button>
      <button @click="increase">Increase by 10</button>
    </base-container>
    <base-container title="auth">
      <user-auth></user-auth>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import { mapActions } from 'vuex';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    // counter() {
    //   return this.$store.state.counter;
    // },
    user() {
      return this.$store.getters.loggedUser;
    },
  },
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    ...mapActions('counter', ['increment']),
    increase() {
      this.$store.dispatch('counter/increase', { value: 10 });
      // another way to do so:
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      //   // ... more attributes could come here
      // });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
