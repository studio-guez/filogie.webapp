<template>
    <section class="v-index"
    >
      <div class="v-index__header">
        <div class="v-index__header__logo app-grid-with-gutter">
          Filogie
        </div>
        <img src="/header_bg/Image_AI_01.png" class="v-index__header__bg">
      </div>

      <div class="v-index__content app-grid-coll-container">
        <img src="/header_bg/Image_AI_02.png" class="v-index__content__bg">
        <div class="app-grid-coll-0-24 app-grid-coll-reg-8-24 app-grid-with-gutter"></div>
        <div class="app-grid-coll-24-24 app-grid-coll-reg-16-24 app-grid-with-gutter">
          <div style="margin-top: 1rem" class="app-first-and-last-child-remove-margin">
            <p>La Fondation Immobilière pour repenser le Logement par l’Innovation et l’Expérimentation (FILOGIE) est née d'une volonté de proposer des solutions de logement adaptées aux enjeux de société contemporains et à venir. Face aux défis croissants liés à la production de logements abordables, durables et inclusifs, FILOGIE se fixe pour mission d’innover dans le domaine de l’habitat, en développant des projets et réalisations répondant à l’évolution des besoins sociaux, économiques et environnementaux.</p>
            <p>Partant du constat que le modèle familial dominant du second après-guerre – celui de la famille nucléaire – bien qu’encore présent, n’est plus majoritaire, FILOGIE s’attache à répondre aux attentes de nouveaux modes de vie et à anticiper les évolutions et les besoins futurs en matière de logement abordable. Afin de favoriser une culture de l’innovation, elle promeut aussi des études prospectives, des publications, ainsi que l’organisation d’événements et de manifestations, lui permettant de produire et de partager des connaissances approfondies sur les enjeux actuels et à venir.</p>
          </div>
        </div>
      </div>

      <div class="app-grid-coll-container categories-section">
        <div class="categories-section__infos app-grid-coll-24-24 app-grid-coll-reg-8-24">
          <div class="categories-section__infos__titles app-grid-with-gutter">
            <h4 :class="{ 'is-active': activeCategory === 'prospectif' }"
                @click="setActiveCategory('prospectif')"
            >
              Prospectif
            </h4>
            <h4 :class="{ 'is-active': activeCategory === 'operation' }"
                @click="setActiveCategory('operation')"
            >
              Opératoire
            </h4>
            <h4 :class="{ 'is-active': activeCategory === 'diffusion' }"
                @click="setActiveCategory('diffusion')"
            >
              Diffusion
            </h4>
          </div>
          <div class="categories-section__infos__text app-grid-with-gutter">
            <template v-if="activeCategory === 'prospectif'">
              <p class="app-text-small">Le volet prospectif et de connaissance de Filogie constitue un espace d’observation, d’analyse et d’expérimentation au service des enjeux du logement. En mobilisant des données fiables et des outils de visualisation innovants, il permet d’anticiper les évolutions démographiques, économiques ou technologiques qui façonneront les besoins en habitat. Cette approche prospective vise à éclairer les décisions publiques et privées, tout en nourrissant une vision à long terme du développement résidentiel abordable.</p>
              <p class="app-text-small">Au croisement de la recherche et de l’innovation, la fondation soutient la production de connaissances nouvelles et la mise à l’épreuve d’idées audacieuses pour anticiper l’évolution de la société. Des projets de recherche appliquée explorent les transitions en cours : modes de vie émergents, technologies constructives, logiques de durabilité ou modèles économiques alternatifs. Des laboratoires d’innovation permettent de tester des concepts et de prototyper des solutions concrètes, dans une logique d’ouverture et de co-création.</p>
            </template>
            <template v-else-if="activeCategory === 'diffusion'">
              <p class="app-text-small" >La diffusion vise à faire circuler les idées et relier les acteurs du logement. À travers des publications, conférences et une présence active dans des réseaux locaux et internationaux, la fondation partage ses travaux et renforce le dialogue entre chercheurs, professionnels, administrations et habitants.</p>
              <p class="app-text-small" >Cet axe comprend également une dimension de sensibilisation citoyenne : campagnes thématiques, débats, collaborations avec associations de quartier pour amplifier la prise de conscience collective sur les enjeux du logement durable. Des outils numériques — site web interactif, plateformes collaboratives — prolongent ce travail en favorisant la transparence et la co-construction entre tous les acteurs.</p>
            </template>
            <template v-else-if="activeCategory === 'operation'">
              <p class="app-text-small" >L'axe opératoire de Filogie traduit la stratégie en action concrète. Il rassemble les initiatives menées sur le terrain pour développer, rénover et gérer des logements abordables : construction de quartiers durables et mixtes, rénovation et reconversion de bâtiments existants, surélévations pour densifier sans étendre.</p>
              <p class="app-text-small" >L'action s'appuie sur une dynamique partenariale ouverte, en coordination avec les autorités publiques et un large réseau d'acteurs — universités, architectes, entreprises, associations locales. Ce travail collectif permet d'expérimenter de nouvelles manières de concevoir et de réaliser le logement abordable. Un dispositif de suivi et d'évaluation accompagne chaque projet pour mesurer l'impact social et environnemental, recueillir les retours des habitants et ajuster les pratiques en continu.</p>
            </template>
          </div>
        </div>
        <div class="app-grid-coll-24-24 app-grid-coll-reg-16-24 app-grid-with-gutter">
          <Categories/>
        </div>
      </div>


      <div class="app-grid-coll-container">
        <div class="app-grid-coll-0-24 app-grid-coll-reg-8-24"/>
        <div class="app-grid-coll-24-24 app-grid-coll-reg-16-24">
          <div class="app-grid-coll-container">
            <div class="app-grid-coll-24-24 app-grid-coll-reg-8-24 app-grid-with-gutter">
              <h6>Direction</h6>
              <p>
                <b>Nadia Cao</b>
                <br/>Directrice
              </p>

              <h6>Equipe</h6>
              <p>
                <b>Pauline Dellacherie</b>
                <br/>Collaboratrice
                <b><br/>Nicolas Bassand</b>
                <br/>Collaborateur
              </p>
            </div>
            <div class="app-grid-coll-24-24 app-grid-coll-reg-8-24 app-grid-with-gutter">
              <h6>Conseil de Fondation</h6>

              <p>
                <b>Bruno Marchand</b>
                <br/>Président

                <b><br>Luca Pattaroni</b>
                <br/>Vice-président

                <b><br>Nicolas Dzierlatka</b>
                <br/>Secrétaire

                <b><br>Marc Maugué</b>
                <br/>Membre

                <b><br>Jacques Roulet</b>
                <br/>Conseiller
              </p>
            </div>
          </div>
        </div>



      </div>


      <div class="app-grid-coll-container">
        <a class="v-index__mailto app-grid-coll-container app-grid-coll-container--center app-grid-coll-container--direction-column"
           href="mailto:info@filogie.ch"
        >
          <div class="v-index__mailto__text app-first-and-last-child-remove-margin">
            <h4>Vous avez des questions&nbsp;?
              <br>Vous pouvez nous écrire à cette adresse&nbsp;
            </h4>
          </div>
          <button style="margin-top: 1rem"
                  class="v-index__mailto__button">info@filogie.ch</button>
        </a>
      </div>

      <div class="app-grid-coll-container app-grid-coll-container--center"
           style="background: #FFE103;"
      >
        <div class="app-grid-coll-24-24 app-grid-coll-reg-20-24 app-grid-with-gutter">
          <InfomaniakForm/>
        </div>
      </div>

    </section>
</template>





<script setup lang="ts">
const { setActiveCategory, activeCategory } = useActiveCategory()

useSeoMeta({
    title: 'FILOGIE',
    description: 'Fondation Immobilière pour repenser le Logement par l’Innovation et l’Expérimentation.',
})
</script>





<style lang="scss" scoped >
@use '@/assets/_scss-params';

.v-index__header {
  background: white;
}

.v-index__header__bg {
  display: block;
  width: 100%;
  height: auto;
  position: relative;
}

.v-index__header__logo {
  width: calc(100%/12 * 5);
  font-size: 12.5vw;
  line-height: 2em;
  pointer-events: none;
  user-select: none;
  position: absolute;
}

.v-index__content {
  padding-bottom: 2rem;
  position: relative;
}

.v-index__content__bg {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

.v-index__mailto {
  background: white;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.v-index__mailto__text {
  text-align: center;
}

.v-index__mailto__button {
  display: block;
  background: #FFE103;
  border: none;
  height: 2rem;
  padding: 0 1rem;
  border-radius: 1rem;
}

.categories-section {
  background: white;
  padding-top: 2rem;
  padding-bottom: 2rem;

  h4 {
    color: #B99A6D;
    margin: 0;
    user-select: none;
    cursor: pointer;

    &.is-active {
      color: black;
    }
  }
}

.categories-section__infos__text {
  margin-top: 1rem;
}
</style>
