<template>
  <div>
    <p>いいね({{ number }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 21,
    };
  },
  methods: {
    increment() {
      this.number += 1;
    },
  },
};
</script>
