<template>
  <div>
    <h2>{{ title | upperCase }}</h2>
    <h2>{{ subTitle | lowerCase | upperCase }}</h2>
    <p>{{ number }}</p>
    <button @click='number++'>+1</button>
  </div>
</template>

<script>
// '@'はVueCLI内部使用時だけ、'srcフォルダ'からの相対パスで記述できる。
import { japanNumber } from '@/japanNumber'

export default {
  // 'mixins'することで、切り出したコードをまとめたjsファイルを使用することができる。
  mixins: [japanNumber]
}
</script>
