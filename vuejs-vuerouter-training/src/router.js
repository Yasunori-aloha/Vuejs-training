import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';
import HeaderHome from './views/HeaderHome.vue';
import HeaderUsers from './views/HeaderUsers.vue';

// '.use'は'プラグイン'を適用するための記述。
Vue.use(Router)

// どのURLにアクセスした時に、どのコンポーネントを表示させるのかを決めるための記述。
export default new Router({
  // 'mode'を'history'にすることで、URLを'/#/'からでは無く'/'で始まる様に変更できる。ただし、ページ遷移するごとにページ読み込みが挟まる。
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        header: HeaderHome
      }
    },
    // '/:'とつけてその後に任意の値を指定することで、動的なURLとすることができる。'id'の部分は他の文字列等でも可能。
    {
      path: '/users/:id',
      components: {
        default: Users,
        header: HeaderUsers
      },
      props: true,
      children: [
        {path: "posts", component: UsersPosts},
        {path: "profile", component: UsersProfile, name: 'users-id-profile'},
      ]
    }
  ]
});
