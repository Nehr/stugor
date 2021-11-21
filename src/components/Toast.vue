<template>
  <div :class="`toast ${isHidden ? 'hidden' : ''}`">
    <p class="toast--header">Bokning slutförd</p>
    <p class="toast--text">
      Gratulerar! Du har nu bokat <strong>{{ name }}</strong
      >. Vore detta på riktigt hade du fått ett bekräftelsemail.
    </p>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    name: {
      type: String,
      required: false,
      default: 'Stugan',
    },
    isHidden: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.toast {
  opacity: 1;
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 101;
  width: 100%;
  max-width: calc(1320px / 2);
  background-color: $green;
  padding: 1rem;
  transform: translate(-50%, -10%);
  box-shadow: $border--shadow;
  transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;

  &--header,
  &--text {
    margin-bottom: 0.25rem;
  }

  &--header {
    font-size: 1.25rem;
    font-weight: 700;
  }

  &.hidden {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
}
</style>
