<template>
  <div class="card">
    <h2><em>{{ especie[0] }}</em></h2>
    <p>{{ especie[1].length }} mostrejos</p>
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
    width: 25vw;
    padding: 1rem;
    border: 1px solid black;
    border-radius: .5rem;
}
</style>
