<template>
  <div v-if="isDataReady">
    <h1 class="titol">
      Recomptes als parcs de Barcelona
    </h1>
    <div class="summary">
      <div>{{ parcName }} ({{ selectedYear }}) - {{ countOnlyDeterminedSpecies }} espècies</div>
    </div>
    <div class="filters-bar">
      <AppSelector class="selector" id-name="filtraParc" label="Filtra per parc" :list="parcNamesArray" @item-selected="filtraParc" />
      <AppSelector class="selector" id-name="filtraAny" label="Filtra per any" :list="parcYearsArray" @item-selected="setSelectedYear" />
      <AppRadioButtonGroup id="ordre" v-model="orderCriterion" :checked="orderCriteria[0]" :options="orderCriteria">
        Ordena per:
      </AppRadioButtonGroup>
    </div>
    <transition-group name="flip-cards" tag="div" class="cards-container">
      <ButterflyCard v-for="especie in filteredByYear" :key="especie[0]" :especie="especie" />
    </transition-group>
  </div>
</template>

<script>
import Parcs from '~/store/parcs.json'
import AppSelector from '~/components/AppSelector'
import ButterflyCard from '~/components/ButterflyCard'
import EspeciesInfo from '~/store/especies.json'
import AppRadioButtonGroup from '~/components/AppRadioButtonGroup.vue'
export default {
  name: 'IndexPage',
  components: {
    AppSelector,
    AppRadioButtonGroup,
    ButterflyCard
  },
  data () {
    return {
      /** Array with park names */
      Parcs,
      /** Current selected park name */
      parcName: '',
      /** Array with observations filtered by selected park (populated when data is ready and also by filtraParc method) */
      byParcData: [],
      /** Current selected year */
      selectedYear: 'TOTAL HISTÒRIC',
      /** Attributes of the different species */
      EspeciesInfo,
      orderCriteria: ['freqüència', 'abundància'],
      orderCriterion: 'freqüència'
    }
  },
  computed: {
    /** Checks if data is fetched in store */
    isDataReady () {
      return this.$store.getters.fetchedStatus
    },
    /** Obtains a list with all the park names */
    parcNamesArray () {
      let arr = []
      this.Parcs.forEach((parc) => {
        arr.push(parc.nom)
      })
      arr = ['TOTS ELS PARCS', ...arr]
      return arr
    },
    /** Obtains a list with all the years with observations in the current park */
    parcYearsArray () {
      let yearsArray = []
      this.byParcData.forEach((especie) => {
        especie[1].forEach((observacio) => {
          const ddmmyyyy = observacio.fecha.split('-')
          const year = ddmmyyyy[2]
          if (!yearsArray.includes(year)) {
            yearsArray.push(year)
          }
        })
      })
      yearsArray.sort()
      yearsArray = ['TOTAL HISTÒRIC', ...yearsArray]
      return yearsArray
    },
    /** Filters current park data by selected year */
    filteredByYear () {
      if (this.selectedYear === 'TOTAL HISTÒRIC') {
        const sortedData = this.sortData(this.byParcData)
        return sortedData
      }
      const filteredArray = []
      this.byParcData.forEach((especie) => {
        const tempEspecie = []
        tempEspecie[0] = especie[0]
        tempEspecie[1] = especie[1].filter(d => d.fecha.includes(this.selectedYear))
        if (tempEspecie[1].length > 0) {
          filteredArray.push(tempEspecie)
        }
      })
      const sortedData = this.sortData(filteredArray)
      return sortedData
    },
    /** Returns count of species in park/year (ignoring undetermined observations) */
    countOnlyDeterminedSpecies () {
      const undetermined = this.EspeciesInfo
        .filter(especie => especie.determinada === false)
        .map(x => x.nomCientific)
      return this.filteredByYear.filter(especie => !undetermined.includes(especie[0])).length
    }
  },
  watch: {
    isDataReady: function (oldval, dataReady) {
      const receivedTotalData = this.$store.getters.getTotalData
      this.byParcData = receivedTotalData
    }
  },
  created () {
    this.$store.dispatch('setInitialData')
  },
  methods: {
    /** Populates byParcData array with observations in the selected park */
    filtraParc (parc) {
      this.parcName = parc
      if (parc === 'TOTS ELS PARCS') {
        this.byParcData = this.$store.getters.getTotalData
      } else {
        this.byParcData = this.$store.getters.getParcData(parc).observacions
      }
    },
    /** Sets the value of selectedYear variable */
    setSelectedYear (year) {
      this.selectedYear = year
      return year
    },
    sortData (data) {
      /** Get total number of exemplars of each species, save it in each species array[2]  */
      data.forEach((especie) => {
        especie[2] = especie[1].reduce((prev, curr) => prev + curr.t, 0)
      })
      if (this.orderCriterion === 'abundància') {
        return data.sort((a, b) => b[2] - a[2])
      } else {
        const desempat = data.sort((a, b) => b[2] - a[2])
        return desempat.sort((a, b) => b[1].length - a[1].length)
      }
    }
  }
}
</script>

<style>
html {
  font-family: 'Cabin', sans-serif;
}

.titol {
  text-align: center;
  margin-bottom: 0;
}

.filters-bar {
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: center;
  margin-left: 4vw;
}

.selector {
  margin: 0 1rem;
}

.summary {
  text-align: center;
  margin-top: .6rem;
  color: #444;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: .6rem;
  margin: 1rem auto 0;
  width: 94vw;
}

.flip-cards-enter-active,
.flip-cards-leave-active {
  transition: all .7s;
}

.flip-cards-enter,
.flip-cards-leave-to {
  opacity: 0;
}

.flip-cards-move {
  transition: transform .7s;
}

.link-sp {
  text-decoration: none;
  font-size: .9rem;
  background-color: rgba(20, 133, 20, 0.7);
  color: white;
  padding: .25rem;
  border: 1px solid green;
  border-radius: 3px;
}
</style>
