<template>
  <div class="container">
    <p><em>{{ info.familia }}</em></p>
    <div class="nom-group">
      <div class="nom-left">
        <h2 class="nom-comu">
          {{ info.nomCat }}
        </h2>
        <h3 class="nom-cientific"><em>{{ info.nomCientific }}</em></h3>
      </div>
      <ul v-if="info.nomCast !== ''" class="nom-right">
        <li>Cast: {{ info.nomCast }}</li>
        <li>Eng: {{ info.nomEng }}</li>
      </ul>
    </div>
    <p>{{ info.text1 }}</p>
    <ul v-if="isDataReady" class="llista-parcs">
      <li v-for="(parc, index) in parcsWithSpecies" :key="index">
        {{ parc.parc }}: {{ parc.recomptes }}
        <span class="lighter">
          {{ parc.recomptes === 1 ? 'recompte' : 'recomptes' }}
          ({{ parc.exemplars }} {{ parc.exemplars === 1 ? 'exemplar' : 'exemplars' }})
        </span>
      </li>
    </ul>
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

.nom-group {
  display: flex;
  justify-content: space-between;
}

.nom-comu {
  margin: 0;
}

.nom-cientific {
  margin-top: .4rem;
  font-weight: 400;
}

.nom-right {
  list-style: none;
  font-size: .9rem;
  color: #333;
  padding-right: 3rem;
}

.llista-parcs {
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 33vh;
  font-size: .95rem;
  margin-top: 1.4rem;
}

.llista-parcs li {
  line-height: 1.4rem;
}

.lighter {
    color: #333;
}
</style>
