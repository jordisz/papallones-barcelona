<template>
  <div class="header">
    <p class="title">
      Les papallones de Barcelona
    </p>
    <ul class="nav">
      <li>
        <NuxtLink to="#">
          Espècies
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">
          Recomptes parcs uBMS
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#">
          Preguntes freqüents
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
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
.nav li a {
  text-decoration: none;
}

</style>
