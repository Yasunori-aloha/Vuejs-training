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
      // '名前付きビュー'を使用した場合は、'props'をオブジェクト化してデフォルトと名前付きビューで値を渡すのかどうかを判断させる。
      props: {
        default: true,
        header: false
      },
      children: [
        {path: "posts", component: UsersPosts},
        {path: "profile", component: UsersProfile, name: 'users-id-profile'},
      ]
    },{
      // 定義したパス以外のパスへのリクエストがきた際には、rootへのパスをレスポンスとして返す。
      // '/users*'と記述すれば、/users以降の値が定義したもの以外ならrootへのパスを返す。
      path: '*',
      // redirect: '/',
      redirect: { path: '/' }
    }
  ]
});
