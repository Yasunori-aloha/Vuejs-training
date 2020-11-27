<template>
  <div>
    <!-- データをオブジェクトの中に格納することで、複数データを受け渡すことができる。 -->
    <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">Home</p>
    <!-- 'パイプ記号(|)'を記述してその右側に設定した'filter'を記述することでテキストに適用される。 -->
    <h2>{{ title | upperCase }}</h2>
    <h2>{{ subTitle | lowerCase }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Welcome to Japan',
      subTitle: 'Japan is a great country'
    }
  },
  // 'filters'を使用することで、フィルターをローカル登録することができる。
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  computed: {
    // 全ての文字列を変換しようとすると、文字列の数だけ'computed'が必要になってしまう。
    // upperCaseTitle() {
    //   return this.title.toUpperCase();
    // },
    // upperCaseSubTitle() {
    //   return this.subTitle.toUpperCase();
    // }
  },
  // 'Homeコンポーネント'のみで使用できるカスタムディレクティブを設定できる。
  directives: {
    border() {
      // 'v-border'の中身を記述
    }
  }
}
</script>
