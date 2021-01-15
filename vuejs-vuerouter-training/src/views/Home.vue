<template>
  <div>
    <h3>Home</h3>
    <button @click='toUsers'>Usersのページに遷移する</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // 'Vuex'のプロパティを取得する際は、'computed'に記載するようにする。
  computed: {
    ...mapGetters(["doubleCount", "tripleCount"]), // 'mapGetters'を使用するだけで、'store.js'に定義した関数が使用できる。
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value)
      }
    }
    },
  // {
  //   doubleCount() {
  //     // 'Vuex'に定義した関数を使用することができる。
  //     // return this.$store.state.count * 2;
  //     return this.$store.getters.doubleCount;
  //   },
  //   tripleCount() {
  //     return this.$store.getters.tripleCount;
  //   }
  // },
  methods: {
    toUsers() {
      // '$router'で'view-router'にアクセスすることができる。
      this.$router.push('/users/1');
    },
  },
}
</script>
