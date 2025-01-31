<template>
    <section class="v-index"
    >
      <video class="v-index__video"
             src="/videos/3001-FILOGIE_animation_bandeau_HD.mp4"
             muted
             loop
             autoplay
             playsinline
      />

      <div class="v-index__content app-grid-coll-container">
        <div class="app-grid-coll-0-24 app-grid-coll-reg-2-24 v-index__content__order-3"></div>
        <div class="app-grid-coll-24-24 app-grid-coll-reg-6-24 app-grid-with-gutter v-index__content__order-4">
          <div class="app-first-and-last-child-remove-margin" style="margin-top: 1rem">
            <h6>Direction</h6>

            <p class="app-text-small"
               style="padding-left: 1rem;"
            >
              <b>Nadia Cao</b>
              <br/>Directrice
            </p>

            <h6>Conseil de Fondation</h6>

            <p class="app-text-small"
               style="padding-left: 1rem;"
            >
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
        <div class="app-grid-coll-0-24 app-grid-coll-reg-0-24"></div>
        <div class="app-grid-coll-24-24 app-grid-coll-reg-14-24 app-grid-with-gutter">
          <div style="margin-top: 1rem" class="app-first-and-last-child-remove-margin">
            <p>La Fondation Immobilière pour repenser le Logement par l’Innovation et l’Expérimentation (FILOGIE) est née d'une volonté de proposer des solutions de logement adaptées aux enjeux contemporains et à ceux de demain. Face aux défis croissants liés au logement abordable, durable et inclusif, FILOGIE se fixe pour mission d’innover dans le domaine de l’habitat, en développant des projets et réalisations répondant aux besoins sociaux, économiques et environnementaux de notre société.</p>
            <p>Partant du constat que le modèle familial dominant du second après-guerre – celui de la famille nucléaire – bien qu’encore présent, n’est plus majoritaire, FILOGIE s’attache à répondre aux attentes de nouveaux profils d’utilisateurs et à anticiper les évolutions et les besoins futurs en matière de logement abordable. Pour atteindre une innovation constante elle s’appuie aussi sur des études prospectives, des publications, ainsi que sur l’organisation d’événements et de manifestations, afin de produire et de partager des connaissances approfondies sur les enjeux actuels et à venir.</p>
          </div>
        </div>
      </div>

      <div class="app-grid-coll-container">
        <div class="app-grid-coll-0-24 app-grid-coll-reg-2-24"></div>
        <div class="app-grid-coll-24-24 app-grid-coll-reg-20-24 app-grid-with-gutter">
          <a class="v-index__mailto app-grid-coll-container app-grid-coll-container--center"
             href="mailto:info@modus-ge.ch"
          >
            <div class="v-index__mailto__text">
              <h4>Vous avez des questions&nbsp;?
              <br>Vous pouvez nous écrire à cette adresse&nbsp;
              </h4>
            </div>
            <button class="v-index__mailto__button">info@modus-ge.ch</button>
          </a>

          <InfomaniakForm/>
        </div>
      </div>

    </section>
</template>





<script setup lang="ts">

</script>





<style lang="scss" scoped >
@use '@/assets/_scss-params';

.v-index {
  padding-top: 22vw;
}

.v-index__video {
  display: block;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.v-index__content__order-3 {
  order: 3;

  @media (min-width: scss-params.$app-breakpoint-sm) {
    order: initial;
  }
}

.v-index__content__order-4 {
  order: 4;

  @media (min-width: scss-params.$app-breakpoint-sm) {
    order: initial;
  }
}

.v-index {
  padding-bottom: 25vh;
}

.v-index__content {
  padding-bottom: 2rem;
}

.v-index__mailto {
  align-items: center;
  padding-bottom: 1rem;
}

.v-index__mailto__button {
  display: block;
  background: #FFE103;
  border: none;
  height: 2rem;
  padding: 0 1rem;
  border-radius: 1rem;
}
</style>
