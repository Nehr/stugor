<template>
  <nav class="nav">
    <div class="nav__inner">
      <div class="d-none d-md-block nav__inner--left">
        <router-link to="/">[Stugor Logo]</router-link>
      </div>
      <div class="nav__inner--right">
        <router-link to="/about">Info</router-link>
        <router-link to="/user">Stugor</router-link>
        <router-link to="/admin">Admin</router-link>
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
  z-index: 1001;

  &__inner {
    min-height: $header--height;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: $grid-max-width;
    width: 100%;
    margin: 0 auto;
    padding: 0.5rem;

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
