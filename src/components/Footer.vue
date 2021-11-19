<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col">
          <p>Footer</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
  props: {},
  setup(props) {
    console.log(props);

    return {};
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: $footer--color;
  padding: 2rem 0;
  color: $white;
}
</style>
