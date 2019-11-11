<template>
  <div class="about">
    <h1>Vuex Exercises</h1>
    <h5>Get Categories from Vuex</h5>
    <ul>
      <li v-for="(category, index) in categories" :key="index">{{category}}</li>
    </ul>
    <p>There are {{catLength}} categories.</p>
    <h5>Create an Event, {{userName}}</h5>
    <h5>Counter</h5>
    <button @click="incrementCount">Increment +1</button>
    <span class="counter">{{count}}</span>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name;
    },
    categories() {
      return this.$store.state.categories;
    },
    catLength() {
      return this.$store.getters.catLength;
    },
    count() {
      return this.$store.getters.count;
    }
  },
  methods: {
    incrementCount() {
      this.$store.commit("INCREMENT_COUNT");
    }
  }
};
</script>

<style scoped>
.counter {
  margin-left: 20px;
  color: white;
  background: red;
  border-radius: 5px;
  padding: 10px;
}
</style>