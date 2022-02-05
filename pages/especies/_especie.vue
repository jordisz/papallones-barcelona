<template>
  <div class="container" :style="$store.getters.getFamilyColor(info.familia)">
    <p class="familia">
      <em>{{ info.familia }}</em>
    </p>
    <div class="nom-group">
      <div class="nom-left">
        <h2 class="nom-comu">
          {{ info.nomCat }}
        </h2>
        <h3 class="nom-cientific">
          <em>{{ info.nomCientific }}</em>
        </h3>
      </div>
      <ul v-if="info.nomCast !== ''" class="nom-right">
        <li>Cast: {{ info.nomCast }}</li>
        <li>Eng: {{ info.nomEng }}</li>
      </ul>
    </div>
    <div class="image-text-container">
      <img class="img-large" :src="require(`~/assets/species-page-images/${ info.imgL }`)" alt="">
      <div class="text-wrapper">
        <p class="info-text" v-html="info.text1"></p>
      </div>
    </div>
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

.familia {
  color: #444;
}

.nom-group {
  display: flex;
  justify-content: space-between;
}

.nom-comu {
  margin: 0;
  border-bottom: 2px solid var(--sp-color);
}

.nom-cientific {
  margin-top: .4rem;
  font-weight: 400;
}

.nom-right {
  list-style: none;
  font-size: .9rem;
  color: #333;
  padding: 0 3rem;
}

@media (max-width: 700px) {
  .nom-right {
    padding-right: 0;
  }
}

.image-text-container {
  display: flex;
  flex-direction: row;
}

@media (max-width: 1200px) {
  .image-text-container {
    flex-direction: column;
  }
}

.img-large {
  max-width: 400px;
  margin-left: 1rem;
  border: 2px solid var(--sp-color);
  border-radius: 6px;
  box-shadow: .2rem .2rem .4rem rgba(88, 88, 88, 0.2);
}

@media (max-width: 500px) {
  .img-large {
    margin-left: 0;
  }
}

ul {
  margin: 0;
  padding: 0;
}
.text-wrapper {
  padding: 0 2rem 0;
  margin-right: 1rem;
  display: flex;
  align-items: flex-end;
}

@media (max-width: 1200px) {
  .text-wrapper {
    padding: 0;
  }
  .img-large {
    margin: 0;
  }
}

.info-text {
  line-height: 1.5rem;
  font-size: 1.1rem;
}

.llista-parcs {
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 33vh;
  font-size: .95rem;
  margin: 1.4rem 0 0;
}

@media (max-width: 1000px) {
  .llista-parcs {
    flex-wrap: nowrap;
  }
}

.llista-parcs li {
  line-height: 1.4rem;
}

.lighter {
    color: #333;
}
</style>
