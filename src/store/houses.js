const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

export const houses = {
  state: () => ({
    houses: [
      {
        id: 0,
        name: 'Stugan i berget',
        description,
      },
      {
        id: 1,
        name: 'Stugan i snön',
        description,
      },
      {
        id: 2,
        name: 'Stugan på landet',
        description,
      },
      {
        id: 3,
        name: 'Stugan vid sjön',
        description,
      },
      {
        id: 4,
        name: 'Stugan som är röd',
        description,
      },
      {
        id: 5,
        name: 'Stugan som är gammal',
        description,
      },
    ],
    housesBooked: [1, 4],
  }),

  actions: {},

  mutations: {
    bookHouse(state, data) {
      state.housesBooked.push(data);
      console.log('logging state housesBooked', state.housesBooked);
    },
    removeHouseBooking(state, data) {
      console.log('data', data);
      const index = state.housesBooked.indexOf(data);
      state.housesBooked.splice(index, 1);
      console.log(state.housesBooked);
    },
  },

  getters: {
    houses: (state) => state.houses,
    bookedHouses: (state) => state.housesBooked,
  },
};
