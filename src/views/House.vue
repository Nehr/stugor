<template>
  <div class="house--bg"></div>
  <div class="house page-content">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ name }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img :src="houseImage(id)" />
          <p class="desc">
            {{ desc }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="row mb-3">
            <div class="col-lg-6">
              <div class="row">
                <label for="nameInput" class="col-sm-2 col-form-label">
                  Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="nameInput"
                    placeholder="Namn Namnsson"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <label for="telInput" class="col-sm-2 col-form-label">
                  Tel
                </label>
                <div class="col-sm-10">
                  <input
                    type="tel"
                    class="form-control"
                    id="telInput"
                    placeholder="070-0000000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="row mb-3">
            <div class="col-lg-6">
              <div class="row">
                <label for="emailInput" class="col-sm-2 col-form-label">
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="emailInput"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <button class="mt-3 mt-lg-0">Boka</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import store from '@/store';

export default {
  components: {},
  props: {},
  setup() {
    const route = useRoute();
    const id = route.params.id;

    const houses = store.getters.houses;
    const thisHouse = houses[id];

    const houseImage = (id) => require(`../assets/houses/cabin-${id}.jpg`);

    return {
      id,
      houseImage,
      name: thisHouse.name,
      desc: thisHouse.description,
    };
  },
};
</script>

<style lang="scss" scoped>
.house {
  min-height: 95vh;
  z-index: 1;
  background-color: $white;
  background-color: rgba($white, 0.75);
  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);

  &--bg {
    background-image: url('~@/assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  > .container {
    max-width: 50rem;
  }

  .desc {
    padding: 1rem 0;
  }

  img {
    max-width: 100%;
  }
}
</style>
