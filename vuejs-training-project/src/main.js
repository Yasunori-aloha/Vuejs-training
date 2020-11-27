import Vue from 'vue';
import App from './App.vue';
// 'LikeNumber.vue'をimportすることでオブジェクトとして取り扱う。
import LikeNumber from './components/LikeNumber';

Vue.config.productionTip = false;
// 'LikeNumber'をグローバルコンポーネントとして登録する。
Vue.component('LikeNumber', LikeNumber);
Vue.directive('border', {
  bind(el, binding, vnode) {
    console.log(el);// ディレクティブが初めて対象の要素に紐づいた時
    console.log(binding);// ディレクティブが初めて対象の要素に紐づいた時
    console.log(vnode);// ディレクティブが初めて対象の要素に紐づいた時
  },
  inserted() {
    console.log('inserted');// 親Nodeに挿入された時
  },
  update() {
    console.log('update');// コンポーネントが更新される度、子コンポーネントが更新される前
  },
  componentUpdated() {
    console.log('componentUpdated');// コンポーネントが更新される度、子コンポーネントが更新された後
  },
  unbind() {
    console.log('unbind');// ディレクティブが紐づいている要素から取り除かれた時
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app');
