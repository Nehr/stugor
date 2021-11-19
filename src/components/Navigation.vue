<template>
  <nav class="nav">
    <div class="nav__inner">
      <div class="nav__inner--left">
        <router-link to="/">[Stugor Logo]</router-link>
      </div>
      <div class="nav__inner--right">
        <router-link to="/about">Användare</router-link>
        <router-link to="/about">Administratör</router-link>
      </div>
    </div>
  </nav>
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

<style lang="scss">
.nav {
  border-bottom: 1px solid $border--color;
  box-shadow: $border--shadow;
  position: fixed;
  width: 100%;
  background-color: $white;

  &__inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: $grid-max-width;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 0.5rem;

    &--right,
    &--left {
      a {
        padding: 0.25rem 1rem;
        font-size: 1.25rem;
        color: $text-color;
        text-decoration: none;

        &.router-link-exact-active {
          color: $text-color--active;
        }

        &:hover {
          color: $text-color--hover;
        }
      }
    }
  }
}
</style>
