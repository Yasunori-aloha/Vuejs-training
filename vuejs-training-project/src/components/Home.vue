<template>
  <div>
    <!-- データをオブジェクトの中に格納することで、複数データを受け渡すことができる。 -->
    <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">Home</p>
    <!-- 'パイプ記号(|)'を記述してその右側に設定した'filter'を記述することでテキストに適用される。 -->
    <h2>{{ title | upperCase }}</h2>
    <!-- 複数のフィルタを連結することができ、左側から順にフィルターが動作していく。 -->
    <h2>{{ subTitle | lowerCase | upperCase }}</h2>
    <!-- <p>{{ number }}</p>
    <button @click='number += 1'>+1</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Welcome to Japan',
      subTitle: 'Japan is a great country',
      number: 0
    }
  },
  // 'filters'を使用することで、フィルターをローカル登録することができる。
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  // 'フィルター'は使用しているコンポーネントの値が変更された時に再描画されてしまうので、頻繁に値が変わるところでは'computed'を使用する方が良い場合もある。
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
