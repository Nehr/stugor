<template>
  <div class="about page-content">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Info</h1>
          <p>Nedan följer lite kort information om mitt arbete.</p>
          <h2>Teknikval</h2>
          <p>
            Jag har valt VueJS för att göra detta. Mycket för att det är ett
            roligt ramverk att koda i samt för att jag kände att det var ett
            perfekt ramverk för denna uppgift.
          </p>
          <h2>Lagring</h2>
          <p>
            Värden lagras endast i applikationens lokala state, så om man laddar
            om sidan/webappen kommer allting att återställas till
            ursprungsvärdena.
          </p>
          <h2>Skiss / Mockup</h2>
          <p>
            Innan jag startade mitt arbete gjorde jag en snabb skiss på hur jag
            tänkte mig att det skulle se ut.<br />
            Detta för att kunna visualisera flödet, både för användaren och hur
            jag skulle koda detta.
          </p>
          <img class="mockup" :src="mockup()" />
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
    const mockup = () => require(`../assets/skiss.jpg`);
    return {
      mockup,
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  p {
    max-width: 50rem;
  }
}
.mockup {
  max-width: 500px;
}
</style>
