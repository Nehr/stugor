<template>
  <Navigation />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navigation,
    Footer,
  },
  props: {},
  setup(props) {
    console.log(props);

    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}
</style>
