<template>
  <div class="user--bg"></div>
  <div class="user page-content">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Boka</h1>
        </div>
      </div>
      <div class="row">
        <div
          v-for="house in houses"
          :key="house.id"
          class="col-12 col-md-4 col-lg-6"
        >
          <router-link
            :to="`/house/${house.id}`"
            :class="`house${isHouseBooked(house.id) ? ' booked' : ''}`"
          >
            <div v-if="isHouseBooked(house.id)" class="is-booked">
              <p>[Bokad]</p>
            </div>
            <img :src="houseImage(house.id)" />
            <p>{{ house.name }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {},
  props: {},
  setup() {
    const store = useStore();
    const houses = computed(() => store.getters.houses);
    const bookedHouses = computed(() => store.getters.bookedHouses);

    const houseImage = (id) => require(`../assets/houses/cabin-${id}.jpg`);

    const isHouseBooked = (id) => {
      return bookedHouses.value.includes(id);
    };

    return {
      houses,
      houseImage,
      isHouseBooked,
    };
  },
};
</script>

<style lang="scss" scoped>
.user {
  min-height: 95vh;
  z-index: 1;
  background-color: $white;
  background-color: rgba($white, 0.15);
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
}

.house {
  position: relative;
  background-color: $green;
  display: block;
  color: $white;
  text-decoration: none;
  text-align: center;

  p {
    padding: 1rem;
  }

  &:hover,
  &:active {
    background-color: darken($green, 10%);
  }

  .is-booked {
    position: absolute;
    display: inline-block;
    color: $red;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
      margin: 0;
      font-size: 4.25rem;
      font-weight: 700;
      transform: rotate(-25deg);
    }
  }

  &.booked {
    background-color: $red;

    &:hover,
    &:active {
      background-color: darken($red, 10%);

      .is-booked {
        color: darken($red, 10%);
      }
    }
  }

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
}
</style>
