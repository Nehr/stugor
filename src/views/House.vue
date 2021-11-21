<template>
  <div class="house--bg"></div>
  <Toast :name="name" :isHidden="toastHidden" />
  <div class="house page-content">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ name }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img :src="image(id)" />
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
                <label
                  for="nameInput"
                  class="col-sm-2 visually-hidden col-form-label"
                >
                  Namn
                </label>
                <div class="col-sm-10">
                  <div class="input-group">
                    <span class="input-group-text" id="namePrepend">Namn</span>
                    <input
                      :disabled="isHouseBooked"
                      type="email"
                      :class="`form-control ${validName}`"
                      id="nameInput"
                      placeholder="Namn"
                      v-model="userName"
                      aria-describedby="namePrepend"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <label
                  for="telInput"
                  class="col-sm-2 visually-hidden col-form-label"
                >
                  Telefon
                </label>
                <div class="col-sm-10">
                  <div class="input-group">
                    <span class="input-group-text" id="telPrepend">#</span>
                    <input
                      :disabled="isHouseBooked"
                      type="tel"
                      :class="`form-control ${validTel}`"
                      id="telInput"
                      placeholder="Telefon"
                      v-model="userTel"
                      aria-describedby="telPrepend"
                    />
                  </div>
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
                <label
                  for="emailInput"
                  class="col-sm-2 visually-hidden col-form-label"
                >
                  E-post
                </label>
                <div class="col-sm-10">
                  <div class="input-group">
                    <span class="input-group-text" id="emailPrepend">@</span>
                    <input
                      :disabled="isHouseBooked"
                      type="email"
                      :class="`form-control ${validEmail}`"
                      id="emailInput"
                      placeholder="E-post"
                      v-model="userEmail"
                      aria-describedby="emailPrepend"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-sm-10">
                  <button
                    :disabled="isHouseBooked"
                    @click="bookHouse()"
                    :class="`btn${
                      isHouseBooked ? ' btn-danger' : ' btn-success'
                    } mt-3 mt-lg-0`"
                  >
                    Boka
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Toast from '../components/Toast.vue';

export default {
  components: {
    Toast,
  },
  props: {},
  setup() {
    const store = useStore();
    const route = useRoute();
    const id = JSON.parse(route.params.id, 10);

    const houses = computed(() => store.getters.houses);
    const bookedHouses = computed(() => store.getters.bookedHouses);

    // House info, just to make it easier to understand the props
    const thisHouse = houses.value[id];
    const image = (id) => require(`../assets/houses/cabin-${id}.jpg`);
    const name = thisHouse.name;
    const desc = thisHouse.description;

    const isHouseBooked = computed(() =>
      // Av någon anledning gjorde Vuex om min array till ett object, hann inte felsöka så gjorde en snabb fix
      Object.values(bookedHouses.value).includes(id)
    );

    // Username
    const userName = ref('');
    const validName = ref('');
    watch(
      () => userName.value,
      (oldValue, newValue) => {
        if (oldValue !== newValue) {
          validName.value = '';
          const isValid = checkIfValid(newValue);
          if (isValid) {
            validName.value = 'is-valid';
          }
        }
      }
    );

    // Email
    const userEmail = ref('');
    const validEmail = ref('');
    watch(
      () => userEmail.value,
      (oldName, newValue) => {
        if (oldName !== newValue) {
          validEmail.value = '';
          const isValid = checkIfValid(newValue);
          if (isValid) {
            validEmail.value = 'is-valid';
          }
        }
      }
    );

    // Tel
    const userTel = ref('');
    const validTel = ref('');
    watch(
      () => userTel.value,
      (oldName, newValue) => {
        if (oldName !== newValue) {
          validTel.value = '';
          const isValid = checkIfValid(newValue);
          if (isValid) {
            validTel.value = 'is-valid';
          }
        }
      }
    );

    // Toast if booking is complete
    const toastHidden = ref(true);

    // Just faking a validation check
    const checkIfValid = (val) => val.length > 3;

    const bookHouse = () => {
      console.log('bookHouse');
      const nameIsValid = checkIfValid(userName.value);
      const emailIsValid = checkIfValid(userEmail.value);
      const telIsValid = checkIfValid(userTel.value);

      if (nameIsValid) {
        validName.value = 'is-valid';
      } else {
        validName.value = 'is-invalid';
      }
      if (emailIsValid) {
        validEmail.value = 'is-valid';
      } else {
        validEmail.value = 'is-invalid';
      }
      if (telIsValid) {
        validTel.value = 'is-valid';
      } else {
        validTel.value = 'is-invalid';
      }

      if (nameIsValid && emailIsValid && telIsValid) {
        console.log('everything is valid, booking house!');
        bookHouseInStore();
      }
    };

    const bookHouseInStore = () => {
      console.log('booking house in store');
      store.commit('bookHouse', JSON.parse(id, 10));
      userName.value = '';
      userEmail.value = '';
      userTel.value = '';
      toastHidden.value = false;
      setTimeout(() => {
        toastHidden.value = true;
      }, 5000);
    };

    return {
      id,
      image,
      name,
      desc,
      userName,
      userEmail,
      userTel,
      isHouseBooked,
      bookHouse,
      validEmail,
      validName,
      validTel,
      toastHidden,
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

  .input-group-text {
    min-width: 8ch;
    justify-content: center;
  }

  .btn {
    display: block;
    width: 100%;
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
