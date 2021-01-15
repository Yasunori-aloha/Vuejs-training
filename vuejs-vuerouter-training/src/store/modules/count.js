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
  // '名前空間'を使用することで、その'modulesファイル'ごとに同じプロパティ名等を使用することができるようになる。
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
