import Vue from 'vue'
import App from './App.vue'

// 'router.js'のことを使える様にインポートする。
import router from './router';

Vue.config.productionTip = false

// 全てのページで、遷移前に実行したい処理をこの中に記述する。
router.beforeEach((to, from, next) => {
  // console.log('global-beforeEach');
  // ()の中には'false'や'パス'を入力する。falseなら次のページに遷移しない処理ができる。
  next();
})

new Vue({
  // 'Vue.use(Router)'を記述したことで'router'というキーが使用可能になっている。
  router,
  render: h => h(App),
}).$mount('#app')
