<template>
  <div>
    <p>いいね({{ halfnumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props:{
    totalNumber: {
      type: Number,
      // 何も指定されない場合でも、コンポーネントが使えるのかどうかを指定している。
      // required: true,
      // 値が指定されていない場合は、デフォルト値を値として使用することを指定している。
      default: 10
    }
  },
  computed: {
    halfnumber(){
      return this.totalNumber / 2
    }
  },
  methods: {
    increment() {
      this.number += 1;
    },
  },
};
</script>

<style scoped>
  div{
    border:1px solid red;
  }
</style>
