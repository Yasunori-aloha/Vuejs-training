<template>
  <div style="width: 700px; margin: auto; padding-top: 50px">
    <!-- 最初は'App.vue'を表示させてしまうため、'router-viewタグ'を使用することで、'router.js'で定義したルーティングを適用させる。 -->
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>
