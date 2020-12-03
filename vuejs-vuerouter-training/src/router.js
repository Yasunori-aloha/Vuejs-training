import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';

// '.use'は'プラグイン'を適用するための記述。
Vue.use(Router)

// どのURLにアクセスした時に、どのコンポーネントを表示させるのかを決めるための記述。
export default new Router({
  // 'mode'を'history'にすることで、URLを'/#/'からでは無く'/'で始まる様に変更できる。ただし、ページ遷移するごとにページ読み込みが挟まる。
  mode: 'history',
  routes: [{path: '/', component: Home}, {path: '/users', component: Users}]
});
