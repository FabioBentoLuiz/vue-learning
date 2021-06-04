<template>
  <div>
    <base-container title="Vuex"></base-container>
    <h3>{{ counter }}</h3>
    <button @click="addOne">Add 2</button>
    <button @click="increase">Increase by 10</button>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
    increase() {
      this.$store.commit('increase', { value: 10 });
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
