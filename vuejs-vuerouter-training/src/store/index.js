import Vue from 'vue';
import Vuex from 'vuex';
// 機能ごとにコードを切り出し
import count from "./modules/count";
// 'getters'や'mutations'それぞれを別ファイルに切り出し
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: ""
  },
  // 同じ関数を複数のコンポーネントで使用する際に、まとめておいて使用できる。
  getters,
  mutations,// 'mutations'は'getters'と違い引数を複数取ったり、値を'return'で返す必要がないため、アロー関数にしなくてもいい。
  actions,
  modules: {
    count
  }
});
