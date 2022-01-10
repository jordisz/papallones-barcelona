<template>
  <div class="container">
    <p><em>{{ info.familia }}</em></p>
    <h2>
      {{ info.nomCat }}
    </h2>
    <h3><em>{{ info.nomCientific }}</em></h3>
    <ul v-if="info.nomCast !== ''">
      <li>Cast: {{ info.nomCast }}</li>
      <li>Eng: {{ info.nomEng }}</li>
    </ul>
    <p>{{ info.text1 }}</p>
    <div v-if="isDataReady">
      <p v-for="(parc, index) in parcsWithSpecies" :key="index">
        {{ parc.parc }}: {{ parc.recomptes }}
        {{ parc.recomptes === 1 ? 'recompte' : 'recomptes' }}
        ({{ parc.exemplars }} {{ parc.exemplars === 1 ? 'exemplar' : 'exemplars' }} en total)
      </p>
    </div>
  </div>
</template>

<script>
import especiesInfo from '~/store/especies.json'
export default {
  data () {
    return {
      id: this.$route.params.especie,
      especiesInfo
    }
  },
  computed: {
    info () {
      const index = this.especiesInfo.findIndex(especie => especie.id === parseInt(this.id))
      return this.especiesInfo[index]
    },
    isDataReady () {
      return this.$store.getters.fetchedStatus
    },
    parcsWithSpecies () {
      const parcs = this.$store.getters.getParcsWithSpecies(this.info.nomCientific)
      return parcs.sort((a, b) => b.exemplars - a.exemplars).sort((a, b) => b.recomptes - a.recomptes)
    }
  },
  mounted () {
    if (this.isDataReady === null) {
      this.$store.dispatch('setInitialData')
    }
  }
}
</script>

<style scoped>
.container {
  width: 72vw;
  margin: auto;
}
</style>
