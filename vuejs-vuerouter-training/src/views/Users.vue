<template>
  <div>
    <h3>Users</h3>
    <router-link :to="'/users/1'">ユーザー1</router-link>
    <router-link :to="'/users/2'">ユーザー2</router-link>
    <hr />
    <!-- '$route'を使用することで、パラメーターを取得することができる。 -->
    <h1>User No. {{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja#next-user'">次のユーザー</router-link>

    <div style='height: 700px;'></div>
    <!-- 'id'を付与することで、'#'を使ったページスクロールができる。 -->
    <!-- 'hash'を使用することで、クリックした際に指定した'id'のある要素に飛んでいく。 -->
    <router-link id='next-user' :to="{ name: 'users-id-profile', params: { id: (Number(id) + 1)}, query: { lang: 'ja', page: 2 }, hash: '#next-user' }">次のユーザー</router-link>
    <div style='height: 1400px;'></div>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    // 'router'内で設定しているコンポーネントしか使用することができないナビゲーションガード。
    // 'Users'のインスタンスが生成される前に実行される処理のため、'this'が使用できない。
    beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter');
      next(vm => {
        console.log(vm.id);
      });
    },
    // 'Users'のインスタンスが生成・消去はされていないけれど、URLが変更されて時に実行される処理。
    beforeRouteUpdate (to, from, next) {
      console.log('beforeRouteUpdate');
      next();
    },
    // インスタンスが消去されて、別のページに遷移した時に実行される処理。
    beforeRouteLeave (to, from, next) {
      console.log('beforeRouteLeave');
      // ページを離れる際にアラートを表示して、'true'ならページを遷移させる。
      const isLeave = window.confirm('このページを本当に離れますか？');
      if (isLeave) {
        next();
      } else {
        next(false);
      }
    }
  };
</script>
