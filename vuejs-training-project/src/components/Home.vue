<template>
  <!-- データをオブジェクトの中に格納することで、複数データを受け渡すことができる。 -->
  <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">Home</p>
</template>

<script>
export default {
  // 'Homeコンポーネント'のみで使用できるカスタムディレクティブを設定できる。
  directives: {
    border() {
      // 'v-border'の中身を記述
    }
  }
}
</script>
