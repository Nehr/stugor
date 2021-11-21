<template>
  <div class="about page-content">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Info</h1>
          <h2>Skiss / Mockup</h2>
          <img class="mockup" :src="mockup()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  setup() {
    const mockup = () => require(`../assets/skiss.jpg`);
    return {
      mockup,
    };
  },
};
</script>

<style lang="scss" scoped>
.mockup {
  max-width: 500px;
}
</style>
