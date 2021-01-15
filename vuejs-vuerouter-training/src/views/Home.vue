<template>
  <div>
    <h3>Home</h3>
    <button @click='toUsers'>Usersのページに遷移する</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
export default {
  // 'Vuex'のプロパティを取得する際は、'computed'に記載するようにする。
  computed: {
    doubleCount() {
      // 'Vuex'に定義した関数を使用することができる。
      // return this.$store.state.count * 2;
      return this.$store.getters.doubleCount;
    },
    tripleCount() {
      return this.$store.getters.tripleCount;
    }
  },
  methods: {
    toUsers() {
      // '$router'で'view-router'にアクセスすることができる。
      this.$router.push('/users/1');
    },
  },
}
</script>
