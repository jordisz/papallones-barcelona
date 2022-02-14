<template>
  <div v-if="isDataReady" class="list-container">
    <ul v-for="(familia, index) in familiesArray" :key="index" :style="$store.getters.getFamilyColor(familia.nom)">
      <h3 class="familia-nom">
        {{ familia.nom }}
      </h3>
      <div class="familia-list">
        <li v-for="(especie, i) in familia.especies" :key="i" class="list-item">
          <SpeciesCard :especie="especie" />
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import Especies from '~/store/especies.json'
import SpeciesCard from '~/components/SpeciesCard.vue'
export default {
  components: {
    SpeciesCard
  },
  data () {
    return {
      Especies,
      familiesArray: []
    }
  },
  computed: {
    especiesCiutat () {
      const especiesArray = []
      this.$store.getters.getTotalData.forEach((item) => {
        especiesArray.push(item[0])
      })
      return especiesArray
    },
    isDataReady () {
      return this.$store.getters.fetchedStatus
    }
  },
  watch: {
    isDataReady: function (oldVal, dataReady) {
      if (this.especiesCiutat.length > 0) {
        this.filterByFamily()
      }
    }
  },
  mounted () {
    if (this.isDataReady !== true) {
      this.$store.dispatch('setInitialData')
    }
    if (this.isDataReady === true && this.especiesCiutat.length > 0) {
      this.filterByFamily()
    }
  },
  methods: {
    filterByFamily () {
      /** Select all determinated species (id < 900) observed in the city and sort them by id */
      const especiesSorted = [...Especies]
        .filter(especie => especie.id < 900 && this.especiesCiutat.includes(especie.nomCientific))
        .sort((a, b) => a.id - b.id)
      const families = ['Papilionidae', 'Hesperiidae', 'Pieridae', 'Nymphalidae', 'Lycaenidae']
      families.forEach((familia) => {
        const familiaObj = {
          nom: familia,
          especies: especiesSorted.filter(especie => especie.familia === familia)
        }
        this.familiesArray.push(familiaObj)
      })
    }
  }
}
</script>

<style scoped>
.list-container {
  padding: 1rem 0 2rem;
  width: 75vw;
  margin: auto;
}

ul {
  margin: 2rem 0 0;
  padding: 0;
}

.familia-list {
  display: grid;
  width: 70vw;
  grid-template-columns: repeat(auto-fit, 254px);
  padding: 0 .6rem;
  margin: 0;
  border-left: 4px solid var(--sp-color);
}

.familia-nom {
  font-style: italic;
  font-weight: 400;
  height: 1rem;
  width: 100%;
  margin: 0 0 .6rem .3rem;
}
.list-item {
  display: block;
  width: 254px;
  margin: 1rem;
}

</style>
