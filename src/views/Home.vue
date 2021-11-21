<template>
  <div class="home page-content">
    <div class="container">
      <div class="row home__start">
        <div class="col-12 col-md-4 col-lg-6">
          <h1 class="home__start--heading">Stugor</h1>
        </div>
      </div>
      <div class="row home__booking">
        <div class="col">
          <router-link to="/user" class="btn btn-success home__booking--btn">
            Boka
          </router-link>
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
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-image: url('~@/assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  > .container {
    min-height: 90vh;
    height: inherit;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
  }

  &__start {
    &--heading {
      font-size: 4rem;
      margin-bottom: 1em;
      padding: 1rem;
      background: rgba($white, 0.75);
      text-align: center;
    }
  }

  &__booking {
    padding: 1rem 0;

    &--btn {
      display: block;
      text-transform: uppercase;
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: 1px;
      width: 100%;
      max-width: 14rem;
      margin: 0 auto;
    }
  }
}
</style>
