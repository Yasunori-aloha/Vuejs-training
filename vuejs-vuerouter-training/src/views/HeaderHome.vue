<template>
  <nav>
    <h2>Home</h2>
    <!-- 'router-linkタグ'を使用することで、'router-view'の中に入っているコンポーネントを動的に切り替えることができるため、ページ遷移が高速。 -->
    <!-- 初期は'aタグ'で表示する様になっているが、'tag属性'を付与することで任意のタグに変化させることができる。 -->
    <!-- 'active-class属性'を使用することで、付与した'router-link'が表示されている時に指定したクラスを適用させることができる。 -->
    <!-- 'exact属性'を付与すると、URLが完全一致しない限りはアクティブにならない様に設定することができる。 -->
    <router-link to="/" active-class='link__active' exact class='link'>Home</router-link>
    <router-link to="/users/1/profile#next-user" active-class='link__active' exact class='link'>Users</router-link>
    <button @click='increment'>+1</button>
    <button @click='decrement'>-1</button>
	</nav>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.state.count++;
    },
    decrement() {
      this.$store.state.count--;
    },
  },
}
</script>

<style scoped>
  .link {
    margin-right: 10px;
  }
  .link__active {
    font-size: 20px;
  }
</style>
