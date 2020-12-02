<template>
  <div class='main'>
    <button @click='myAnimation = "slide"'>Slide</button>
    <button @click='myAnimation = "fade"'>Fade</button>
    <p>{{ myAnimation }}</p>
    <br>

    <button @click='add'>追加</button>
    <ul style='width: 200px; margin: auto;'>
      <transition-group>
        <li
          v-for="(number, index) in numbers" :key='index'
          @click='remove(index)'
          style='cursor: pointer;'
        >{{ number }}</li>
      </transition-group>
    </ul>

    <br>
    <button @click='show = !show'>切り替え</button>
    <br><br>

    <!-- JavaScriptでのアニメーションをつける時に、CSSのアニメーションも同時につけることができる。 -->
    <!-- 'JavaScript'しか使用しない場合は、':CSS='false'と明示的に示すことで、一切CSSを適用しない様にすることができる。 -->
    <transition
      :CSS='false'
      @before-enter='beforeEnter'
      @enter='enter'

      @leave='leave'
    >
      <div class="circle" v-if="show"></div>
    </transition>
    <br>

    <button @click='myComponent = "ComponentA"'>ComponentA</button>
    <button @click='myComponent = "ComponentB"'>ComponentB</button>
    <transition name='fade' mode='out-in'>
      <component :is="myComponent"></component>
    </transition>

    <!-- 複数の要素を入れる場合は、'v-show'ではなく'v-if'や'v-else'等を使用しないと表示されない。 -->
    <!-- 'mode属性'を使用することで、複数の要素の切り替わりをスムーズに行うことができる。 -->
    <transition name='fade' mode='out-in'>
      <!-- Vue.jsは同じタグが複数の場合は、要素の中身だけを変える様になっている為、'key属性'を使用して同じタグでも一意性を持たせる。 -->
      <p v-if='show' key='bye'>さよなら</p>
      <p v-else key='hello'>こんにちは</p>
      <!-- <p v-show='show'>さよなら</p>
      <p v-show='!show'>こんにちは</p> -->
    </transition>

    <!-- 'enter-active-class'や'leave-active-class'等の属性を書き込み'Animate.css'を適用させることができる。 -->
    <transition appear enter-active-class="animate__animated animate__bounce" enter-to-class="" leave-active-class="animate__animated animate__shakeX" leave-to-class="">
      <p v-if="show">hello</p>
    </transition>

    <!-- 'transigionコンポーネント'には1つの要素しか入れられない。ただし、最終的に描画されるのが1つの要素なら複数入れていても大丈夫。 -->
    <transition name='fade' appear>
      <p v-if="show">hello</p>
    </transition>

    <!-- type属性を使用して'animation'か'transition'のどちらかを選択すると、選択した方の効果時間を優先して処理する。 -->
    <transition :name='myAnimation' appear>
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
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      numbers: [0, 1, 2],
      nextNumber: 3,
      show: true,
      // 'transition'の'name属性'は'v-bindディレクティブ'を使用することで動的に変更させることができる。
      myAnimation: 'slide',
      myComponent: 'ComponentA'
    }
  },
  methods: {
    // ランダムで'numbers'配列のどれかの数値を返す。
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
    add() {
      this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
      this.nextNumber += 1;
    },
    remove(index) {
      this.numbers.splice(index, 1);
    },
    // JavaScriptでのアニメーションの設定は、'methods'に記述する。
    // 'done'は、CSSアニメーションを併用適用する場合は、あっても無くても構わない。
    // 現れる前
    beforeEnter(el) {
      el.style.transform = 'scale(0)';
    },
    // 現れる時
    enter(el, done) {
      let scale = 0;
      // 10ms毎に同じ処理をし続ける。
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.01;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 10);
    },
    // 現れた後
    // afterEnter(el) {
    // },
    // 現れるアニメーションがキャンセルされた時
    // enterCanselled(el) {
    // },
    // 消える前
    // beforeLeave(el) {
    // },
    // 消える時
    leave(el, done) {
      let scale = 1;
      // 10ms毎に同じ処理をし続ける。
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.01;
        if (scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 10);
    },
    // 消えた後
    // afterLeave(el) {
    // },
    // 消えるアニメーションがキャンセルされた時
    // 'v-showディレクティブ'を使用している時だけ、適用できる。
    // leaveCanselledel(el) {
    // }
  },
  };
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  background-color: deeppink;
  border-radius: 100px;
}
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
