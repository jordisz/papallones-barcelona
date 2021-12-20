<template>
  <div>
    <div class="filters-bar">
      <ParcSelector v-on:parc-seleccionat="filtraParc" />
    </div>
    <div class="cards-container">
      <ButterflyCard v-for="(especie, index) in filteredData.especies" :key="index" :especie="especie" />
    </div>
  </div>
</template>

<script>
import ParcSelector from '@/components/ParcSelector'
import ButterflyCard from '@/components/ButterflyCard.vue'
export default {
  name: 'IndexPage',
  components: {
    ParcSelector,
    ButterflyCard
  },
  data () {
    return {
      filteredData: []
    }
  },
  created () {
    this.$store.dispatch('getData')
  },
  methods: {
    filtraParc (parc) {
      this.filteredData = this.$store.getters.getParcData(parc)
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

.cards-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
