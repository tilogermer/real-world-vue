import Vue from "vue";
import Vuex from "vuex";

import * as user from "@/store/modules/user";
import * as event from "@/store/modules/event";
import * as notification from "@/store/modules/notification.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
      "school"
    ],
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
      { id: 3, text: "...", done: true },
      { id: 4, text: "...", done: false }
    ],
    count: 0
  },
  mutations: {
    INCREMENT_COUNT(state) {
      state.count += 1;
    },
    DECREMENT_COUNT(state) {
      state.count -= 1;
    }
  },
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    activeTodos: state => {
      return state.todos.filter(todo => !todo.done);
    },
    activeTodosCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length;
    },
    count: state => {
      return state.count;
    }
  },
  modules: {
    user,
    event,
    notification
  }
});
