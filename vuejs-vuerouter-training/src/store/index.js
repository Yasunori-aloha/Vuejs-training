import Vue from 'vue';
import Vuex from 'vuex';
import count from "./modules/count";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: ""
  },
  // 同じ関数を複数のコンポーネントで使用する際に、まとめておいて使用できる。
  getters: {
    message: state => state.message
  },
  mutations: { // 'mutations'は'getters'と違い引数を複数取ったり、値を'return'で返す必要がないため、アロー関数にしなくてもいい。
    updateMessage(state, newMessage) {
      state.message = newMessage;
    }
  },
  actions: {
    updateMessage({ commit }, newMessage) {
      commit("updateMessage", newMessage);
    }
  },
  modules: {
    count
  }
});
