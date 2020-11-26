<template>
  <div>
    <!-- 'templateタグ'の外に記述しているHTMLタグは<slot v-slot:default></slot>というタグに全てがまとめられる。 -->
    <LikeHeader header-text='Hello'>
      <h3>{{ user }}</h3>
      <h2>みなさん</h2>

      <!-- =''とすることによって子コンポーネントからデータを受け取ることができる。 -->
      <template #[title]='slotProps' >
        <h1>トータルいいね数</h1>
        <h2>{{ slotProps.user.firstName }}</h2>
      </template>

      <h3>こんにちは</h3>

      <template #number>
        <h2>{{ number }}</h2>
      </template>

      <p>よろしくお願いします</p>
    </LikeHeader>

    <LikeHeader #default="user">
      <h3>{{ user }}</h3>
    </LikeHeader>

    <LikeNumber :total-number='number' test-props='test' @my-click='incrementNumber'></LikeNumber>

    <LikeNumber :total-number='number' test-props='test' @my-click='number=$event'></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
export default {
  data() {
    return {
      number: 26,
      title: 'title'
    }
  },
  components:{
    LikeHeader
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
    border:1px solid blue;
  }
  /* h1{
    color: red;
  } */
</style>
