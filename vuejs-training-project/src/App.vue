<template>
  <div>
    <!-- 'templateタグ'の外に記述しているHTMLタグは<slot v-slot:default></slot>というタグに全てがまとめられる。 -->
    <LikeHeader header-text='Hello'>
      <!-- <h3>{{ user }}</h3>
      <h2>みなさん</h2> -->

      <!-- =''とすることによって子コンポーネントからデータを受け取ることができる。 -->
      <!-- <template #[title]='slotProps' >
        <h1>トータルいいね数</h1>
        <h2>{{ slotProps.user.firstName }}</h2>
      </template> -->

      <h3>こんにちは</h3>

      <!-- <template #number>
        <h2>{{ number }}</h2>
      </template>

      <p>よろしくお願いします</p> -->
    </LikeHeader>

    <!-- <LikeHeader #default="user">
      <h3>{{ user }}</h3>
    </LikeHeader> -->

    <LikeNumber :total-number='number' test-props='test' @my-click='incrementNumber'></LikeNumber>

    <!-- <LikeNumber :total-number='number' test-props='test' @my-click='number=$event'></LikeNumber> -->

    <!-- コンポーネントを切り替える為のボタン -->
    <button @click='currentComponent = "Home"'>Home</button>
    <button @click='currentComponent = "About"'>About</button>
    <!-- 'is属性'を使用することでコンポーネントの切り替えを1行で済ませることができる。 -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <!-- <About v-if="currentComponent === 'About'"></About>
    <Home v-if="currentComponent === 'Home'"></Home> -->
    <div>
      <h2>イベントフォーム</h2>
      <label for='title'>タイトル</label>
      <input id='title' type='text' v-model.lazy="eventData.title">
      <pre>{{eventData.title}}</pre>

      <label for='maxNumber'>最大人数</label>
      <input id='maxNumber' type='number' v-model.number="eventData.maxNumber">
      <pre>{{typeof eventData.maxNumber}}</pre>

      <label for='host'>主催者</label>
      <input id='host' type='text' v-model.trim="eventData.host">
      <pre>{{eventData.host}}</pre>

      <label for='detail'>イベントの内容</label>
      <textarea id='datail' cols='30' rows='10' v-model="eventData.detail"></textarea>
      <p style='white-space: pre;'>{{ eventData.detail }}</p>

      <!-- 単体チェックボックスのデータバインディング作成 -->
      <input type="checkbox" id='isPrivate' v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>

      <!-- 複数チェックボックスのデータバインディング作成 -->
      <p>参加条件</p>
      <input type="checkbox" id="10" value='10代' v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value='20代' v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" id="30" value='30代' v-model="eventData.target">
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>

      <!-- ラジオボタンのデータバインディング作成 -->
      <p>参加費</p>
      <input type="radio" id="free" value='無料' v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="paid" value='有料' v-model="eventData.price">
      <label for="paid">有料</label>

    </div>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'

export default {
  data() {
    return {
      number: 26,
      title: 'title',
      currentComponent: 'Home',
      eventData:{
        title: 'タイトル',
        maxNumber: 0,
        host: '',
        detail: '',
        isPrivate: false,
        // 複数のチェックボックスの値を取得する場合は、配列を指定する。
        target: [],
        price: '無料'
      }
    }
  },
  components:{
    LikeHeader,
    About,
    Home
  },
  methods: {
    incrementNumber(value){
      this.number = value;
    }
  },
}
</script>

<style scoped>
  div{
    /* border:1px solid blue; */
  }
  /* h1{
    color: red;
  } */
</style>
