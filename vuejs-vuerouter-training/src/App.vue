<template>
  <div style="width: 700px; margin: auto; padding-top: 50px">
    <!-- 最初は'App.vue'を表示させてしまうため、'router-viewタグ'を使用することで、'router.js'で定義したルーティングを適用させる。 -->
    <router-view name="header"></router-view>
    <transition name='fade' mode='out-in' @before-enter='beforeEnter'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter(){
      // 'this.$root'がAppのVueインスタンスを指している。
      // AppのVueインスタンス自体に'trigger-scroll'というカスタムイベントを持たせている。
      this.$root.$emit('trigger-scroll');
    }
  },
}
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
</style>
