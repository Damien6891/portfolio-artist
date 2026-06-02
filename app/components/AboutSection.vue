<template>
  <section class="section" id="about">
    <div class="wrap about__grid">
      <div class="about__photo reveal">
        <img
          src="https://damien-hantzer.com/images/profile_picture.jpg"
          alt="Portrait de Damien Hantzer"
          loading="lazy"
        />
        <span class="frame-mark">DH</span>
      </div>
      <div class="about__text">
        <p class="eyebrow reveal">{{ $t('about.eyebrow') }}</p>
        <p
          class="about__lead reveal"
          data-delay="1"
          v-html="$t('about.lead')"
        ></p>
        <p class="about__body reveal" data-delay="2">
          {{ $t('about.body') }}
        </p>
        <ul class="about__facts reveal" data-delay="3">
          <li v-for="fact in facts" :key="fact.label">
            <span class="ic" v-html="fact.icon"></span>
            <span
              ><span class="k">{{ fact.label }}</span
              ><span class="v">{{ fact.value }}</span></span
            >
          </li>
        </ul>
        <!-- <a
          class="btn reveal"
          data-delay="4"
          href="https://damien-hantzer.com"
          target="_blank"
          rel="noopener"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
          </svg>
          Télécharger le dossier artiste
        </a> -->
      </div>
    </div>
  </section>
</template>

<script setup>
const facts = [
  {
    label: $t('about.facts.height_label'),
    value: $t('about.facts.height_value'),
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v18M7 7h10M7 17h10"/></svg>',
  },
  {
    label: $t('about.facts.languages_label'),
    value: $t('about.facts.languages_value'),
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>',
  },
  {
    label: $t('about.facts.location_label'),
    value: $t('about.facts.location_value'),
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>',
  },
  {
    label: $t('about.facts.available_label'),
    value: $t('about.facts.available_value'),
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12l5 5L20 6"/></svg>',
  },
];
</script>
