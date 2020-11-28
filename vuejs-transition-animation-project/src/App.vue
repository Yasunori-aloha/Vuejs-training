<template>
  <div class='main'>
    <button @click='show = !show'>切り替え</button>
    <!-- 'transigionコンポーネント'には1つの要素しか入れられない。ただし、最終的に描画されるのが1つの要素なら複数入れていても大丈夫。 -->
    <transition name='fade'>
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  };
</script>

<style scoped>
/* 'transitionコンポーネント'を使用する場合は'name属性値'以下の'enter-active'等のクラスを計6個作成する必要がある。 */
/* 最初にクラスが追加され初期値を設定、その後1フレーム後にはクラスを削除する。 */
.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
/* 最初にクラスが追加され、'transitionendイベント'で変化が終わったことを受け取ったらクラスを削除する。 */
.fade-enter-active {
  /* 現れる時のトランジションの状態 */
  transition: opacity 0.5s;
}
/* 'enter'で初期値が設定された後にクラスが追加されて、'transitionendイベント'で変化が終わったことを受け取ったらクラスを削除する。 */
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトランジションの状態 */
  transition: opacity 0.5s;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}
.main{
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
