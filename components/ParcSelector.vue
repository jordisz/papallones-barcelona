<template>
  <div>
    <select v-model="selected" @change="emitParc">
      <option v-for="parc in Parcs" :key="parc.clau" :value="parc.nom">
        {{ parc.nom }}
      </option>
    </select>
  </div>
</template>

<script>
import Parcs from '@/store/parcs.json'
export default {
  name: 'ParcSelector',
  data () {
    return {
      selected: '',
      Parcs
    }
  },
  methods: {
    emitParc () {
      this.$emit('parc-seleccionat', this.selected)
    }
  }
}
</script>
