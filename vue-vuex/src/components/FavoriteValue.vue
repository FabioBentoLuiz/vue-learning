<template>
  <div>
    <h3>{{ counter }}</h3>
    <p>something else here...</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>
