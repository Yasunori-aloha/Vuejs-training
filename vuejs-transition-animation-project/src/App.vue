<template>
  <div class='main'>
    <button @click='show = !show'>切り替え</button>
    <!-- 'transigionコンポーネント'には1つの要素しか入れられない。ただし、最終的に描画されるのが1つの要素なら複数入れていても大丈夫。 -->
    <transition name='fade'>
      <p v-if="show">hello</p>
    </transition>

    <!-- type属性を使用して'animation'か'transition'のどちらかを選択すると、選択した方の効果時間を優先して処理する。 -->
    <transition name='slide' type='animation' appear>
      <!-- 'div'等で囲ってしまえば、1つしか要素がないと判断される。ただし効果単一要素(今回なら'div')にしか適用されなくなる。 -->
      <div v-if="show">
        <!-- 子要素の効果は適用されない -->
        <p v-show="show">bye</p>
        <p>bye</p>
        <p>bye</p>
        <p>bye</p>
      </div>
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

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
/* 最初と最後の状態を'@keyframs'で設定しているので、'enter'や'enter-to'が必要ない。 */
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 0.5s;
}

/* スライドするアニメーションをここで設定 */
@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main{
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
