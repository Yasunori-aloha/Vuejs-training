import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2,
    message: ""
  },
  // 同じ関数を複数のコンポーネントで使用する際に、まとめておいて使用できる。
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
    message: state => state.message
  },
  mutations: { // 'mutations'は'getters'と違い引数を複数取ったり、値を'return'で返す必要がないため、アロー関数にしなくてもいい。
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    },
    updateMessage(state, newMessage) {
      state.message = newMessage;
    }
  },
  actions: {
    // 'commit'しか使用しないことを明示的に示している。いろいろ使用するなら'context'と記述する。
    increment({ commit }, number) {
      // 'mutations'の'increment'を動作させる。
      commit('increment', number);
    },
    updateMessage({ commit }, newMessage) {
      commit("updateMessage", newMessage);
    }
  }
});
