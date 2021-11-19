<template>
  <Navigation />
  <main>
    <router-view />
  </main>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  components: { Navigation },
  props: {},
  setup(props) {
    console.log(props);

    return {};
  },
};
</script>

<style lang="scss">
body,
html {
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}

main {
  padding-top: $header--height;
}
</style>
