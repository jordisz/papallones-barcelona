<template>
  <main class="main-content">
    <ul class="link-list">
      <div :style="{backgroundImage: `url('~/assets/species-page-images/a-ilia-1.jpg')`}">
        <li class="list-item">
          <nuxt-link to="/especies">
            Quines són les espècies de papallones que trobem als parcs de Barcelona?
          </nuxt-link>
        </li>
      </div>
      <li class="list-item">
        <nuxt-link to="/">
          Quina informació ens aporta el seguiment de les poblacions de papallones?
        </nuxt-link>
      </li>
      <li class="list-item">
        <nuxt-link to="/recomptes">
          Consulta les dades de l'observatori de papallones urbanes
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-content {
  font-size: 2rem;
}

.link-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-item {
  display: block;
  height: 25vh;
  margin-top: 2rem;
}

.list-item a {
  text-decoration: none;
}

</style>
