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
  ],
  // リンクに'#'が入っていた場合のスクロールの振る舞いを設定できる。
  // トランジションがある場合と無い場合の2つの方法で記述しないといけない。
  scrollBehavior (to, from, savedPosition) {
    return new Promise(resolve => {
      // 'this'は'Routerのインスタンス'を指している。
      // 'app'はこのRouterのインスタンスが挿入されているVueインスタンスのことを指している。
      this.app.$root.$on('trigger-scroll', () => {
        let position = { x: 0, y: 0 };
        if (savedPosition) {
          position = savedPosition;
        }
        if (to.hash) {
          position = {
            selector: to.hash
          };
        }
        resolve(position);
      });
    })
    // 'x軸'と'y軸'を指定して、その場所にいく方法。
    // return { x: 0, y: 100 }
    // 'hash'を記述して、指定した'id'がある要素にいく方法。
    // return {
      // selector: '#next-user',
      // 指定した'id'にから'x軸'と'y軸'の場所にいく。
    //   offset: { x: 0, y: 100 }
    // }
    // to: 遷移先のページ情報が格納されている。
    // from: 遷移元のページ情報が格納されている。
    // savedPosition: ページ遷移した際に、'遷移元のページでスクロールしていた場所'の情報が格納されている。
  }
});
