<template>
  <div>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login', {
        name: 'Fabio',
        email: 'test@hotmail.com',
      });
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
