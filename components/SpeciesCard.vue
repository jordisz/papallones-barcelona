<template>
  <div class="container">
    <img :src="require(`~/assets/butterfly-icons/${especie.imatge}`)" alt="" class="especie-thumbnail">
    {{ especie.nomCat }}
    <NuxtLink class="link-sp" :to="`/especies/${especie.id}`">
      Veure fitxa
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    especie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.container {
    height: 4rem;
    display: flex;
    align-items: center;
}
.especie-thumbnail {
  width: 4rem;
}
</style>
