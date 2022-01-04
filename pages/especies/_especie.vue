<template>
  <div class="container">
    <p><em>{{ info.familia }}</em></p>
    <h2>{{ info.nomCat }}</h2>
    <h3><em>{{ info.nomCientific }}</em></h3>
    <ul>
      <li>Cast: {{ info.nomCast }}</li>
      <li>Eng: {{ info.nomEng }}</li>
    </ul>
    <p>{{ info.text1 }}</p>
  </div>
</template>

<script>
import especiesInfo from '@/store/especies.json'
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
