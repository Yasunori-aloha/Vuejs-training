import Vue from 'vue';
import App from './App.vue';
// 'LikeNumber.vue'をimportすることでオブジェクトとして取り扱う。
import LikeNumber from './components/LikeNumber';

Vue.config.productionTip = false;
// 'LikeNumber'をグローバルコンポーネントとして登録する。
Vue.component('LikeNumber', LikeNumber);
// 'bind'と'update'をよく使用する為、関数を記述することでその2つのフック関数を1つのコードにまとめることができる。
Vue.directive('border', function(el, binding) {
  // el.style.border = '2px solid black';
  // 'binding'の'value'の中にカスタムディレクティブに受け渡した値が入っている。
  // console.log(binding);
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  // 'Argment(引数)'という意味の'arg'を使用することで、カスタムディレクティブの引数を受け取ることができる。
  el.style.borderStyle = binding.arg
  // '.round'という修飾子があればボーダーの角を丸める処理をする。
  if (binding.modifiers.round) {
    el.style.borderRadius = '0.5rem'
  }
  if (binding.modifiers.shadow) {
    el.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.26)';
  }
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
Vue.filter('upperCase', function(value) {
  return value.toUpperCase();
})

new Vue({
  render: h => h(App),
}).$mount('#app');
