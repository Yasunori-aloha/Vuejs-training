<template>
  <div>
    <h3>Home</h3>
    <button @click='toUsers'>Usersのページに遷移する</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  // 'Vuex'のプロパティを取得する際は、'computed'に記載するようにする。
  computed: {
    count() {
      return this.$store.state.count;
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
