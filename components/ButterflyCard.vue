<template>
  <div class="card">
    <h2>{{ especie[0] }}</h2>
    <p>{{ especie[1].muestreos }}</p>
  </div>
</template>

<script>
export default {
  name: 'ButterflyCard',
  props: { especie: { type: Array, required: true } }
}
</script>

<style scoped>
.card {
    width: 30vw
}
</style>
