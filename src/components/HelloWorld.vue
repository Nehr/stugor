<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>{{ msg }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss"></style>
