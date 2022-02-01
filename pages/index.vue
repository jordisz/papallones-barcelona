<template>
  <main class="main-content" style="background-image: url('gcleopatra.jpg');">
    <ul class="link-list">
      <li class="list-item">
        <nuxt-link to="/especies">
          Quines són les espècies de papallones que trobem als parcs de Barcelona?
        </nuxt-link>
      </li>
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
  height: calc(100vh - 70px);
  font-size: 2rem;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 55%;
  background-size: cover;
}

.link-list {
  margin: 0;
  padding: 2rem;
  list-style: none;
}

@media (min-width: 610px) {
  .link-list {
    padding-top: 10vh;
  }
}

.list-item {
  display: block;
  height: 22vh;
  margin-top: 2rem;
}

.list-item a {
  text-decoration: none;
  padding: 0 1rem  0 0;
  background-color: #ffffff88;
}

</style>
