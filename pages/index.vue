<template>
  <div>
    <div class="filters-bar">
      <AppSelector :list="parcNamesArray" v-on:item-selected="filtraParc" />
      <AppSelector :list="parcYearsArray" v-on:item-selected="setSelectedYear" />
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
      Parcs,
      parcName: '',
      orderedData: [],
      selectedYear: 'TOTAL HISTORIC'
    }
  },
  computed: {
    parcNamesArray () {
      let arr = []
      this.Parcs.forEach((parc) => {
        arr.push(parc.nom)
      })
      arr = ['TOTS ELS PARCS', ...arr]
      return arr
    },
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
  created () {
    this.$store.dispatch('setInitialData')
    const receivedTotalData = this.$store.getters.getTotalData
    this.orderedData = receivedTotalData.sort((a, b) => b[1].length - a[1].length)
  },
  methods: {
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
    setSelectedYear (year) {
      this.selectedYear = year
      return year
    }
  }
}
</script>

<style>
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
  gap: 1rem;
  margin-top: 1rem;
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
