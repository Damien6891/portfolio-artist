<template>
  <section class="section section--alt" id="galerie">
    <div class="wrap">
      <div style="text-align: center">
        <p class="eyebrow reveal">En images</p>
        <h2 class="section-title reveal" data-delay="1">Galerie</h2>
        <p
          class="reveal"
          data-delay="2"
          style="color: var(--gris); max-width: 46ch; margin: 1.4rem auto 0"
        >
          Instants de scène et de plateau. Cliquez sur une image pour
          l'agrandir.
        </p>
      </div>

      <div class="gallery">
        <figure
          v-for="(item, i) in localizedItems"
          :key="i"
          :class="[
            'gal-item',
            item.tall ? 'gal-item--tall' : '',
            item.wide ? 'gal-item--wide' : '',
            'reveal',
          ]"
          :data-delay="item.delay"
          tabindex="0"
          :aria-label="`Agrandir : ${item.title}`"
          @click="openPhoto(localizedItems, i)"
          @keydown.enter.prevent="openPhoto(localizedItems, i)"
          @keydown.space.prevent="openPhoto(localizedItems, i)"
        >
          <span class="expand-mark">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
            >
              <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
            </svg>
          </span>
          <img :src="item.src" :alt="item.title" loading="lazy" />
          <figcaption>
            <span class="gal-cap-title">{{ item.title }}</span>
            <span class="gal-cap-place">{{ item.place }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { galleryItems } from '~/data/gallery';

const { locale } = useI18n();
const { openPhoto } = useLightboxPhoto();

const localizedItems = computed(() =>
  galleryItems.map((item) => ({
    ...item,
    title: item.title[locale.value as 'fr' | 'en'],
    caption: item.caption[locale.value as 'fr' | 'en'],
  })),
);
</script>
