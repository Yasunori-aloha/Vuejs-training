import Vue from 'vue'
import App from './App.vue'

// 'router.js'のことを使える様にインポートする。
import router from './router';

Vue.config.productionTip = false

new Vue({
  // 'Vue.use(Router)'を記述したことで'router'というキーが使用可能になっている。
  router,
  render: h => h(App),
}).$mount('#app')
