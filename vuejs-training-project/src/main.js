import Vue from 'vue';
import App from './App.vue';
// 'LikeNumber.vue'をimportすることでオブジェクトとして取り扱う。
import LikeNumber from './components/LikeNumber';

Vue.config.productionTip = false;
// 'LikeNumber'をグローバルコンポーネントとして登録する。
Vue.component('LikeNumber', LikeNumber);
// 'bind'と'update'をよく使用する為、関数を記述することでその2つのフック関数を1つのコードにまとめることができる。
Vue.directive('border', function(el) {
  el.style.border = ' 2px solid black'
})
// Vue.directive('border', {
//   bind(el, binding, vnode) {
//     console.log(el);// ディレクティブが初めて対象の要素に紐づいた時
//     console.log(binding);// ディレクティブが初めて対象の要素に紐づいた時
//     console.log(vnode);// ディレクティブが初めて対象の要素に紐づいた時
//   },
  // inserted() {
  //   // 親Nodeに挿入された時
  // },
  // update() {
  //   // コンポーネントが更新される度、子コンポーネントが更新される前
  // },
  // componentUpdated() {
  //   // コンポーネントが更新される度、子コンポーネントが更新された後
  // },
  // unbind() {
  //   // ディレクティブが紐づいている要素から取り除かれた時
  // }
// })

new Vue({
  render: h => h(App),
}).$mount('#app');
