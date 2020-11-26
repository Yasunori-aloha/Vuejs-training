<template>
  <div>
    <!-- 'slotタグ'はpropsとは違い、HTMLタグ自体を子コンポーネントに受け渡すことができる。 -->
    <slot></slot>
    <p>{{ headerText }}</p>
  </div>
</template>

<script>
export default {
  props: ['headerText']
}
</script>

<style scoped>
  /* div{
    border:1px solid blue;
  } */
  h1{
    color: red;
  }
</style>
