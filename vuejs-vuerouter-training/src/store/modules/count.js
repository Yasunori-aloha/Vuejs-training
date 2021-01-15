const state = {
  count: 2
};
const getters = {
  doubleCount: state => state.count * 2,
  tripleCount: state => state.count * 3
};
const mutations = {
  increment(state, number) {
    state.count += number;
  },
  decrement(state, number) {
    state.count -= number;
  }
};
const actions = {
  // 'commit'しか使用しないことを明示的に示している。いろいろ使用するなら'context'と記述する。
  increment({ commit }, number) {
    // 'mutations'の'increment'を動作させる。
    commit('increment', number);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
