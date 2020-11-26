<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :number='number'></LikeNumber>
    <LikeNumber :number='number'></LikeNumber>
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
  }
}
</script>

<style scoped>
  div{
    border:1px solid blue;
  }
</style>
