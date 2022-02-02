<template>
  <div class="header">
    <p class="title">
      <NuxtLink to="/">
        Les papallones de Barcelona
      </NuxtLink>
    </p>
    <ul class="nav">
      <li>
        <NuxtLink to="/especies">
          Espècies
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/recomptes">
          Recomptes parcs uBMS
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#">
          Preguntes freqüents
        </NuxtLink>
      </li>
    </ul>
    <div class="toggler">
      <img src="/ic_fluent_navigation_24_filled.png" alt="Obre menú" height="34px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
.header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  text-transform: uppercase;
  background-color: rgba(90, 169, 90, 0.3);
}

.nav {
  display: flex;
  list-style: none;
}
.nav li {
  margin: 0;
  padding: 0 1rem;
}
.nav li a,
.title a {
  text-decoration: none;
}

@media (max-width: 950px) {
  .nav {
    display: none;
  }
}
@media (min-width: 950px) {
  .toggler {
    display: none;
  }
}

</style>
