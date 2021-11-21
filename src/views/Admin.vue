<template>
  <div class="admin page-content">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Administratör</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table class="admin__table table table-striped">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Namn</th>
                <th scope="col">Bokad</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="house in houses" :key="house.id">
                <th scope="row">{{ house.id }}</th>
                <td>{{ house.name }}</td>
                <td v-if="isHouseBooked(house.id)" class="admin__table--remove">
                  <button
                    class="btn btn-danger btn-sm"
                    @click="removeBooking(house.id)"
                  >
                    X
                  </button>
                </td>
                <td v-else></td>
              </tr>
            </tbody>
          </table>
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

    const removeBooking = (id) => {
      console.log('removeBooking', id);
      store.commit('removeHouseBooking', JSON.parse(id, 10));
    };

    return {
      houses,
      houseImage,
      isHouseBooked,
      removeBooking,
    };
  },
};
</script>

<style lang="scss" scoped>
.admin {
  &__table {
    tbody {
      tr {
        td {
          &:nth-of-type(1n + 2) {
            text-align: center;
          }
        }
      }
    }

    thead {
      tr {
        th {
          &:nth-of-type(1n + 3) {
            text-align: center;
          }
        }
      }
    }

    &--remove {
      button {
        width: 100%;
        max-width: 4rem;
        margin: 0 auto;
        padding: 0 1rem;
      }
    }
  }
}
</style>
