<template>
  <div class="card-container">
    <img :src="require(`~/assets/butterfly-icons/${especie.imatge}`)" alt="" class="especie-thumbnail">
    <div class="card-text">
      {{ especie.nomCat }}
      <NuxtLink class="link-sp" :to="`/especies/${especie.id}`">
        Veure fitxa
      </NuxtLink>
    </div>
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
.card-container {
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: .2rem;
}
.especie-thumbnail {
  width: 4rem;
}

.card-text {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}

.link-sp {
  font-size: .8rem;
  padding: .2rem;
  border: none;
  width: fit-content;
}
</style>
