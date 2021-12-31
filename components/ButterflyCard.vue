<template>
  <div class="card">
    <h2>{{ info.nomCat }}</h2>
    <h3><em>{{ info.nomCientific }}</em></h3>
    <img :src="require(`~/assets/butterfly-icons/${info.imatge}`)" alt="">
    <p>{{ exemplars }} en {{ especie[1].length }} mostrejos</p>
  </div>
</template>

<script>
import especiesInfo from '@/store/especies.json'
export default {
  name: 'ButterflyCard',
  especiesInfoArray: especiesInfo,
  props: {
    especie: {
      type: Array,
      required: true
    }
  },
  computed: {
    info () {
      const index = this.$options.especiesInfoArray.findIndex(element => element.nomCientific === this.$props.especie[0])
      return this.$options.especiesInfoArray[index]
    },
    exemplars () {
      return this.$props.especie[1].reduce((prev, cur) => prev + cur.t, 0)
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 364px;
  padding: 1rem;
  border: 1px solid black;
  border-radius: .5rem;
}
.card h2 {
  margin: 0;
}
.card h3 {
  margin-top: .5rem;
  font-size: 1.1rem;
  font-weight: lighter;
}
</style>
