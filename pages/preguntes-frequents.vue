<template>
  <div class="pf-container">
    <h2 class="pregunta">
      D'on surten les dades d'aquesta web?
    </h2>
    <p>
      Els recomptes de papallones corresponen a les observacions dels voluntaris de l'uBMS, tal i com es mostren al
      <a href="https://ubms.creaf.cat/ca/les-meves-observacions2/">mapa del seu lloc web oficial</a>.
      Aquesta web on ets ara és creació personal d'un dels voluntaris d'aquest projecte de ciència ciutadana,
      amb la única intenció de  mostrar la informació del mapa d'una altra manera, potser més fàcil de navegar.<br />
      La informació sobre cada espècie l'he extreta principalment de la <em>Guia de les papallones diürnes de Catalunya</em>,
      de Roger Vila, Constantí Stefanescu i José Manuel Sesma. Les miniatures estan elaborades a partir de fotos pròpies i
      d'altres de Wikimedia Commons. Les fotografies de les fitxes individuals són originals, la majoria fetes als parcs
      urbans de Barcelona.<br/>
      La icona de la pàgina és d'<a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> i té llicència CC.
    </p>

    <h2 class="pregunta">
      Quina informació ens aporta el recompte de papallones?
    </h2>
    <p>
      Les papallones són uns insectes molt sensibles als canvis en els seus hàbitats, i la seva aparició o desaparició
      serveix d'indicador de l'estat de conservació d'un indret i de la seva biodiversitat.
      La seva presència és clau dins dels ecosistemes, tant com a pol·linitzadores de plantes com per a aliment per als seus depredadors.<br/>
      El fet que les diferents espècies de papallones siguin relativament fàcils d'identificar fa que sigui més senzill
      fer-ne seguiment que altres ordres d'insectes (com formigues, xinxes, escarabats, pugons, mosques, abelles...).<br/>
      Així doncs, comptant les papallones de diferents espècies que es veuen en un mateix lloc any rere any, ens podem fer
      una idea de com evolucionen els ecosistemes, i en el cas dels parcs urbans, obtenim dades que ens poden ajudar a
      estudiar i millorar la gestió de la seva biodiversitat.
    </p>

    <h2 class="pregunta">
      Des de quan es compten les papallones?
    </h2>
    <p>
      El 1976 es va establir l'UKBMS, el pla de seguiment de papallones al Regne Unit.<br/>
      A partir d'aquesta experiència, es van anar establint altres projectes similars, entre ells el CBMS (Catalan
      Butterfly Monitoring Scheme), el primer de la regió mediterrània, iniciat el 1994. El número de països amb plans
      de seguiment segueix creixent, i actualment ja en son una vintena.<br/>
      El 2018 es va inaugurar l'uBMS (Urban Butterfly Monitoring Scheme, pla de seguiment de papallones urbanes), que
      segueix les poblacions d'aquests insectes a Barcelona, Madrid, i des de 2021 també a Sabadell. Paral·lelament també
      s'ha establert el mBMS, que segueix la població de papallones en altres ciutats de l'àrea metropolitana de Barcelona.
    </p>

    <h2 class="pregunta">
      Jo també puc comptar papallones?
    </h2>
    <p>
      I tant que sí! Qualsevol persona interessada pot formar part d'aquests projectes de ciència ciutadana. Si vius a Barcelona,
      a Madrid o a Sabadell, <a href="https://ubms.creaf.cat/ca/participa2/">et pots inscriure com a voluntari de l'uBMS</a>.<br/>
      A l'àrea metropolitana hi tens el <a href="http://mbms.creaf.cat/participa-hi/">mBMS</a>, i a la resta de Catalunya pots
      col·laborar en els censos en algun dels <a href="https://www.catalanbms.org/ca/participeu/">itineraris del CBMS</a>, o
      crear-ne un de nou.<br/> Només cal que tinguis la disponibilitat de poder visitar el teu parc o itinerari un cop a la setmana
      de març a setembre. Tots dos projectes organitzen activitats per a aprendre a fer els recomptes i a identificar les
      diferents espècies.
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p {
  font-size: 1.08rem;
  line-height: 1.4;
}
a,
a:visited {
  color: #4747d1;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.pf-container {
  width: 80vw;
  margin: auto;
  padding-top: 2vh;
}
.pregunta {
  font-size: 1.5rem;
  margin-bottom: 0;
}
@media (max-width: 520px) {
  .pregunta {
    font-size: 1.2rem;
  }
}
</style>
