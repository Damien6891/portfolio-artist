<template>
  <section class="section" id="parcours">
    <div class="wrap">
      <div style="text-align: center">
        <p class="eyebrow reveal">{{ $t('career.eyebrow') }}</p>
        <h2 class="section-title reveal" data-delay="1">
          {{ $t('career.title') }}
        </h2>
      </div>
      <div class="timeline">
        <article
          v-for="item in career"
          :key="item.title"
          class="tl-item reveal"
        >
          <span class="tl-node"></span>
          <p class="tl-date">{{ item.date }}</p>
          <h3 class="tl-title">{{ item.title }}</h3>
          <p class="tl-place">{{ item.place }}</p>
          <p class="tl-desc">{{ item.desc }}</p>
          <div class="tl-tags">
            <span v-for="tag in item.tags" :key="tag" class="tl-tag">{{
              tag
            }}</span>
          </div>
          <div class="tl-img">
            <img :src="item.image" :alt="item.title" loading="lazy" />
          </div>
          <div v-if="item.video" class="tl-cta">
            <span
              class="link-video"
              tabindex="0"
              @click="openVideo(item.video)"
              @keydown.enter.space.prevent="openVideo(item.video)"
            >
              <span class="play-dot">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              {{ $t('career.watch_video') }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const { openVideo } = useLightbox();

const career = [
  {
    date: $t('career.items.ka.date'),
    title: $t('career.items.ka.title'),
    place: $t('career.items.ka.place'),
    desc: $t('career.items.ka.desc'),
    tags: [$t('disciplines.items.stunt'), $t('disciplines.items.acrobatics')],
    image: 'images/KA_boat.jpg',
    // video: 'uLmsYlyVUjg',
  },
  {
    date: $t('career.items.laperle.date'),
    title: $t('career.items.laperle.title'),
    place: $t('career.items.laperle.place'),
    desc: $t('career.items.laperle.desc'),
    tags: [
      $t('disciplines.items.bungee_straps'),
      $t('disciplines.items.banquine'),
      $t('disciplines.items.acrobatics'),
      $t('disciplines.items.vpole'),
      $t('disciplines.items.straps'),
    ],
    image: 'https://damien-hantzer.com/images/la-perle_1.jpg',
    video: 'uLmsYlyVUjg',
  },
  {
    date: $t('career.items.imaginacie.date'),
    title: $t('career.items.imaginacie.title'),
    place: $t('career.items.imaginacie.place'),
    desc: $t('career.items.imaginacie.desc'),
    tags: [$t('disciplines.items.flying_trapeze')],
    image: 'https://damien-hantzer.com/images/imaginacie_1.jpg',
    video: 'uIAY0_mFIz4',
  },
  {
    date: $t('career.items.asterix.date'),
    title: $t('career.items.asterix.title'),
    place: $t('career.items.asterix.place'),
    desc: $t('career.items.asterix.desc'),
    tags: [
      $t('disciplines.items.acrobatics'),
      $t('disciplines.items.comedy'),
      $t('disciplines.items.stunt'),
      $t('disciplines.items.street_performance'),
      $t('disciplines.items.dance'),
    ],
    image: 'https://damien-hantzer.com/images/gargouille.jpg',
    video: 'fAkgMBngPWU',
  },
  {
    date: $t('career.items.pierre.date'),
    title: $t('career.items.pierre.title'),
    place: $t('career.items.pierre.place'),
    desc: $t('career.items.pierre.desc'),
    tags: [
      $t('disciplines.items.flying_trapeze'),
      $t('disciplines.items.acrobatics'),
      $t('disciplines.items.comedy'),
      $t('disciplines.items.dance'),
    ],
    image: 'https://damien-hantzer.com/images/trapeze_2.jpg',
    video: '9wY4HaM8ing',
  },
];
</script>
