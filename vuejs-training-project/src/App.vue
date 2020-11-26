<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :total-number='number' test-props='test' @my-click='incrementNumber'></LikeNumber>
    <LikeNumber :total-number='number' test-props='test' @my-click='number=$event'></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
export default {
  data() {
    return {
      number: 26
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
</style>
