<template>
  <div>
    <label for='title'>タイトル</label>
    <!-- 'v-model'は'v-bind'でタグにデータを結びつけ、'v-on'で入力があった時等に結びつけたデータの値を変更している。 -->
    <input id='title' type="text" :value="value" @change='$emit("input", $event.target.value)'>
    <!-- <input id='title' type='text' v-model.lazy="eventData.title"> -->
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  props:['value']
}
</script>
