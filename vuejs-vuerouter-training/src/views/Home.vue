<template>
  <div>
    <h3>Home</h3>
    <button @click='toUsers'>Usersのページに遷移する</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      // '$router'で'view-router'にアクセスすることができる。
      this.$router.push('/users/1');
    },
  },
}
</script>
