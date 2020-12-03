import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';

// '.use'は'プラグイン'を適用するための記述。
Vue.use(Router)

// どのURLにアクセスした時に、どのコンポーネントを表示させるのかを決めるための記述。
export default new Router({
  routes: [{path: '/', component: Home}, {path: '/users', component: Users}]
});
