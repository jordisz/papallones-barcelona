<template>
  <main class="main-content">
    <section class="seccio">
      <h2>Quines són les espècies de papallones que trobem als parcs de Barcelona?</h2>
    </section>
    <section class="seccio">
      <h2>Quina informació ens aporta el seguiment de les poblacions de papallones?</h2>
    </section>
    <section class="seccio">
      <h2>Consulta les dades de l'observatori de papallones urbanes</h2>
    </section>
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
.seccio {
  height: 30vh;
  display: flex;
  align-items: flex-end;
}
.seccio:nth-of-type(1) {
  background-color: rgba(0, 255, 255, 0.5);
}
.seccio:nth-of-type(2) {
  background-color: rgba(0, 100, 0, 0.5);
}
.seccio:nth-of-type(3) {
  background-color: rgba(184, 135, 11, 0.5);
}
.seccio:nth-of-type(even){
  justify-content: right;
}

</style>
