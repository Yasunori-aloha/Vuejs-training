<template>
  <div>
    <h3>Users</h3>
    <router-link :to="'/users/1'">ユーザー1</router-link>
    <router-link :to="'/users/2'">ユーザー2</router-link>
    <hr />
    <!-- '$route'を使用することで、パラメーターを取得することができる。 -->
    <h1>User No. {{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja'">次のユーザー</router-link>
    <router-link :to="{ name: 'users-id-profile', params: { id: (Number(id) + 1)}, query: { lang: 'ja', page: 2 } }">次のユーザー</router-link>
  </div>
</template>

<script>
  export default {
    props: ['id'],
  };
</script>
