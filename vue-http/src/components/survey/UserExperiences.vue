<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">loading...</p>
      <p v-if="!error && (!results || results.length === 0)">
        No data
      </p>
      <p v-if="!isLoading && error">{{ error }}</p>
      <ul v-if="!isLoading && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  mounted() {
    this.loadExperiences();
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;

      fetch('https://vue-http-demo-5a7f0.firebaseio.com/surveys.json')
        .then(response => {
          this.error = null;

          if (response.ok) {
            return response.json();
          } else {
            this.error =
              'Something went wrong. Server error ' + response.statusText;
          }
        })
        .then(data => {
          const results = [];

          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating
            });
          }

          this.results = results;
          this.isLoading = false;
        })
        .catch(err => {
          this.isLoading = false;
          this.error = 'Try again later :´( ' + err;
        });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
