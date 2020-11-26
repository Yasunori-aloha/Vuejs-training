<template>
  <div>
    <!-- 'slotタグ'はpropsとは違い、HTMLタグ自体を子コンポーネントに受け渡すことができる。 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['headerText']
}
</script>
