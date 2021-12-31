<template>
  <div v-if="isDataReady">
    <div class="filters-bar">
      <AppSelector :list="parcNamesArray" @item-selected="filtraParc" />
      <AppSelector :list="parcYearsArray" @item-selected="setSelectedYear" />
    </div>
    <div class="summary">
      {{ parcName }} ({{ selectedYear }}) - {{ filteredByYear.length }} espècies
    </div>
    <transition-group name="flip-cards" tag="div" class="cards-container">
      <ButterflyCard v-for="especie in filteredByYear" :key="especie[0]" :especie="especie" />
    </transition-group>
  </div>
</template>

<script>
import Parcs from '@/store/parcs.json'
import AppSelector from '@/components/AppSelector'
import ButterflyCard from '@/components/ButterflyCard.vue'
export default {
  name: 'IndexPage',
  components: {
    AppSelector,
    ButterflyCard
  },
  data () {
    return {
      /** Array with park names */
      Parcs,
      /** Current selected park name */
      parcName: '',
      /** Array with observations filtered by selected park (populated by filtraParc method) */
      orderedData: [],
      /** Current selected year */
      selectedYear: 'TOTAL HISTORIC'
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
      this.orderedData.forEach((especie) => {
        especie[1].forEach((observacio) => {
          const ddmmyyyy = observacio.fecha.split('-')
          const year = ddmmyyyy[2]
          if (!yearsArray.includes(year)) {
            yearsArray.push(year)
          }
        })
      })
      yearsArray.sort()
      yearsArray = ['TOTAL HISTORIC', ...yearsArray]
      return yearsArray
    },
    /** Filters current park data by selected year */
    filteredByYear () {
      if (this.selectedYear === 'TOTAL HISTORIC') {
        return this.orderedData
      }
      const filteredArray = []
      this.orderedData.forEach((especie) => {
        const tempEspecie = []
        tempEspecie[0] = especie[0]
        tempEspecie[1] = especie[1].filter(d => d.fecha.includes(this.selectedYear))
        if (tempEspecie[1].length > 0) {
          filteredArray.push(tempEspecie)
        }
      })
      filteredArray.sort((a, b) => b[1].length - a[1].length)
      return filteredArray
    }
  },
  watch: {
    isDataReady: function (oldval, dataReady) {
      const receivedTotalData = this.$store.getters.getTotalData
      this.orderedData = receivedTotalData.sort((a, b) => b[1].length - a[1].length)
    }
  },
  created () {
    this.$store.dispatch('setInitialData')
  },
  methods: {
    /** Populates orderedData array with observations in the selected park */
    filtraParc (parc) {
      this.parcName = parc
      if (parc === 'TOTS ELS PARCS') {
        const receivedTotalData = this.$store.getters.getTotalData
        this.orderedData = receivedTotalData.sort((a, b) => b[1].length - a[1].length)
      } else {
        const filteredData = this.$store.getters.getParcData(parc).observacions
        this.orderedData = filteredData.sort((a, b) => b[1].length - a[1].length)
      }
    },
    /** Sets the value of selectedYear variable */
    setSelectedYear (year) {
      this.selectedYear = year
      return year
    }
  }
}
</script>

<style>
html {
  font-family: 'Cabin', sans-serif;
}

.filters-bar {
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: center;
}

.summary {
  text-align: center;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: .7rem;
  margin: 1rem auto 0;
  width: 94vw;
}

.flip-cards-enter-active,
.flip-cards-leave-active {
  transition: all 1s;
}

.flip-cards-enter,
.flip-cards-leave-to {
  opacity: 0;
}

.flip-cards-move {
  transition: transform 1s;
}
</style>
