<template>
  <div class="list-container">
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
  mounted () {
    this.filterByFamily()
  },
  methods: {
    filterByFamily () {
      /** Select all determinated species (id < 900) and sort them by id */
      const especiesSorted = [...Especies]
        .filter(especie => especie.id < 900)
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
  margin-top: 2rem;
  width: 75vw;
  margin: auto;
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
