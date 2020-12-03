<template>
  <div style='width: 700px; margin: auto; padding-top: 50px;'>
    <nav>
      <!-- 'router-linkタグ'を使用することで、'router-view'の中に入っているコンポーネントを動的に切り替えることができるため、ページ遷移が高速。 -->
      <!-- 初期は'aタグ'で表示する様になっているが、'tag属性'を付与することで任意のタグに変化させることができる。 -->
      <router-link to="/" class='link'>Home</router-link>
      <router-link to="/users" class='link'>Users</router-link>
    </nav>
    <!-- 最初は'App.vue'を表示させてしまうため、'router-viewタグ'を使用することで、'router.js'で定義したルーティングを適用させる。 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .link {
    margin-right: 10px;
  }
</style>
