<template>
  <section class="section palmares" id="palmares">
    <div class="wrap">
      <p class="eyebrow reveal">Avant la scène</p>
      <h2 class="reveal" data-delay="1">Également gymnaste compétiteur</h2>
      <div class="palmares__stats">
        <div class="stat reveal" data-delay="1">
          <div class="num">14 ans</div>
          <p class="desc">de pratique de la gymnastique</p>
        </div>
        <div class="stat reveal" data-delay="2">
          <div class="num">
            3<sup style="font-size: 0.4em; vertical-align: super">e</sup>
          </div>
          <p class="desc">au championnat de France individuel, 2003</p>
        </div>
        <div class="stat reveal" data-delay="3">
          <div class="num">
            1<sup style="font-size: 0.4em; vertical-align: super">er</sup>
          </div>
          <p class="desc">en division nationale par équipe, 2009</p>
        </div>
      </div>
      <div
        class="reveal"
        data-delay="4"
        style="display: flex; justify-content: center"
      >
        <span
          class="link-video"
          tabindex="0"
          @click="openVideo('EWYxwCAXlTg')"
          @keydown.enter.space.prevent="openVideo('EWYxwCAXlTg')"
        >
          <span class="play-dot">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          Voir la vidéo tumbling 2020
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const { openVideo } = useLightbox();
</script>
