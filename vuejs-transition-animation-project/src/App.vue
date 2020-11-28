<template>
  <div class='main'>
    <button @click='show = !show'>切り替え</button>
    <p v-if="show">hello</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  };
</script>

<style>
.main{
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
