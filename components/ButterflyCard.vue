<template>
  <div class="card">
    <div class="card-header">
      <h2 class="nom-comu">
        {{ info.nomCat }}
      </h2>
      <h3><em>{{ info.nomCientific }}</em></h3>
    </div>
    <div class="image-container">
      <img :src="require(`~/assets/butterfly-icons/${info.imatge}`)" alt="">
    </div>
    <p>
      {{ especie[2] }} {{ especie[2] === 1 ? 'exemplar' : 'exemplars' }} en
      <br />
      {{ especie[1].length }} {{ especie[1].length === 1 ? 'mostreig' : 'mostrejos' }}
    </p>
    <ButterflyGraph :id="info.id" :observacions="especie[1]" />
    <NuxtLink class="link-sp" :to="`/especies/${info.id}`">
      Veure fitxa
    </NuxtLink>
  </div>
</template>

<script>
import ButterflyGraph from '@/components/ButterflyGraph.vue'
import especiesInfo from '@/store/especies.json'
export default {
  name: 'ButterflyCard',
  especiesInfoArray: especiesInfo,
  components: {
    ButterflyGraph
  },
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
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 340px;
  height: 480px;
  padding: 1rem;
  border: 1px solid rgb(190, 190, 190);
  border-radius: .2rem;
  box-shadow: .2rem .2rem .4rem rgba(88, 88, 88, 0.2);
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
}
.nom-comu {
  margin: 0;
  font-size: 1.3rem;
}
.card-header h3 {
  margin: .5rem 0 0;
  font-size: 1rem;
  font-weight: lighter;
  color: #444;
}
.card img {
  transform: scale(.92);
}

.image-container {
  min-height: 190px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card p {
  font-size: 1rem;
  text-align: center;
  margin: .4rem;
}

.link-sp {
    align-self: flex-end;
}
</style>
