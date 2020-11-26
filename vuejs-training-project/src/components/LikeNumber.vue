<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
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
    },
    testProps: {
      type: String
    }
  },
  // 配列で指定する場合
  // props:['totalNumber','testProps']
  computed: {
    halfNumber(){
      return this.totalNumber / 2
    }
  },
  methods: {
    increment() {
      // 子コンポーネントから親コンポーネントへデータを渡す送り口
      this.$emit('my-click', this.totalNumber + 1);
    },
  },
};
</script>

<style scoped>
  div{
    border:1px solid red;
  }
</style>
