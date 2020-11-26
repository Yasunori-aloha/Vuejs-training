<template>
  <div>
    <p>いいね({{ halfnumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props:['totalNumber'],
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
