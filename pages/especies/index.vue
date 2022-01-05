<template>
  <div class="container">
    <ul v-for="(familia, index) in familiesArray" :key="index" class="familia-list">
      <div class="familia-nom">{{ familia.nom }}</div>
      <li v-for="(especie, i) in familia.especies" :key="i" class="list-item">
        <SpeciesCard :especie="especie" />
      </li>
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
.familia-list {
  display: flex;
  flex-wrap: wrap;
}

.familia-nom {
  height: 2rem;
  width: 90vw;
}
.list-item {
  display: block;
  width: 30ch;
}

</style>
