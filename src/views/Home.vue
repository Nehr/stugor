<template>
  <div class="container home">
    <div class="row home__start">
      <div class="col">
        <h1 class="home__start--heading">Stugor</h1>
      </div>
      <div class="col">
        <p>[Här är en bild på en stuga]</p>
      </div>
    </div>
    <div class="row home__booking">
      <div class="col">
        <button class="btn btn-success home__booking--btn">Boka</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &__start {
    &--heading {
      font-size: 4rem;
    }
  }

  &__booking {
    padding: 1rem 0;

    &--btn {
      display: block;
      text-transform: uppercase;
      font-size: 1.5rem;
      letter-spacing: 1px;
      width: 100%;
      max-width: 12rem;
      margin: 0 auto;
    }
  }
}
</style>
