<template>
  <div class="header">
    <div class="top">
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
          <NuxtLink to="preguntes-frequents">
            Preguntes freqüents
          </NuxtLink>
        </li>
      </ul>
      <div class="toggler" @click="toggleMenu">
        <img src="/ic_fluent_navigation_24_filled.png" alt="Obre menú" height="34px">
      </div>
    </div>
    <div v-if="mobileMenu" class="bottom">
      <ul class="bottom-nav">
        <li class="bottom-item">
          <NuxtLink to="/especies" @click.native="toggleMenu">
            Espècies
          </NuxtLink>
        </li>
        <li class="bottom-item">
          <NuxtLink to="/recomptes" @click.native="toggleMenu">
            Recomptes parcs uBMS
          </NuxtLink>
        </li>
        <li class="bottom-item">
          <NuxtLink to="/preguntes-frequents" @click.native="toggleMenu">
            Preguntes freqüents
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      mobileMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.mobileMenu = !this.mobileMenu
    }
  }
}
</script>

<style scoped>
a,
a:visited {
  color: #24248f;
  font-size: 1.06rem;
  text-decoration: none;
  cursor: pointer;
}
a:hover,
a:active {
  text-decoration: underline;
}
.title a:active {
  text-decoration: none;
}
.header {
  text-transform: uppercase;
  background-color: #5aa95a4d;
}
.top {
  height: 70px;
  display: flex;
  padding: 0 4vw;
  justify-content: space-between;
  align-items: center;
}
.bottom {
  height: 154px;
}
.bottom-nav {
  padding: 0;
  margin: 0;
}
.bottom-item {
  display: flex;
  align-items: center;
  height: 50px;
  border-top: 1px solid #551a8b;
}
.bottom-item:last-of-type {
  border-bottom: 1px solid #551a8b;
}
.bottom-item a {
  padding-left: 4vw;
}
.nav {
  display: flex;
  list-style: none;
}
.nav li {
  margin: 0;
  padding: 0 1rem;
}
.toggler {
  cursor: pointer;
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
