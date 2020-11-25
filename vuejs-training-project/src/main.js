import Vue from 'vue';
import App from './App.vue';
// 'LikeNumber.vue'をimportすることでオブジェクトとして取り扱う。
import LikeNumber from './components/LikeNumber';

Vue.config.productionTip = false;
// 'LikeNumber'をグローバルコンポーネントとして登録する。
Vue.component('LikeNumber', LikeNumber);

new Vue({
  render: h => h(App),
}).$mount('#app');
