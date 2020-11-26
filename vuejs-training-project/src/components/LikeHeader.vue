<template>
  <div>
    <!-- 'slotタグ'はpropsとは違い、HTMLタグ自体を子コンポーネントに受け渡すことができる。 -->
    <slot name='title' :user='user' text='text'>
      <!-- 'slotタグ'の中身が無かった場合に表示する、デフォルト画面の内容を指定することができる。 -->
      <h2>デフォルトタイトル</h2>
    </slot>
    <slot></slot>
    <hr>
    <p>いいねの数</p>
    <slot name='number'></slot>
    <p>{{ headerText }}</p>
  </div>
</template>

<script>
export default {
  props: ['headerText'],
  data() {
    return {
      user: {
        firstName: 'Jack',
        lastName: 'Donald'
      }
    }
  },
}
</script>

<style scoped>
/* 'slotタグ'に対するCSSは子コンポーネントからでも適用することができる。 */
  h1{
    color: red;
  }
</style>
