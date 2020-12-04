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
  };
</script>
