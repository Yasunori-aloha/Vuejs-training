export const japanNumber = {
  data() {
    return {
      title: 'Welcome to Japan',
      subTitle: 'Japan is a great country',
      number: 0
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  created() {
    console.log('created in Mixin');
  },
}
