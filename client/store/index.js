import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  message: '',
  connected: false
};

const mutations = {
  PUSH_MESSAGE (state, payload) {
    state.message = payload;
  },
  CONNECT (state) {
    state.connected = true;
  },
  DISCONNECT (state) {
    state.connected = false;
  }
};

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT');
    }, 200)
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store
