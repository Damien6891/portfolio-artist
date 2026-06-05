<template>
  <section
    class="section section--alt"
    id="disciplines"
    data-screen-label="Disciplines"
  >
    <div class="wrap">
      <div class="disc__head">
        <div>
          <p class="eyebrow reveal">{{ $t('disciplines.eyebrow') }}</p>
          <h2 class="section-title reveal" data-delay="1">
            {{ $t('disciplines.title') }}
          </h2>
        </div>
        <p class="reveal" data-delay="2">
          {{ $t('disciplines.subtitle') }}
        </p>
      </div>

      <div class="disc__group reveal">
        <span class="disc__group-label">{{
          $t('disciplines.specialties')
        }}</span>
        <span class="rule"></span>
      </div>

      <div class="disc__grid reveal disc__grid--spec">
        <article
          v-for="(disc, i) in mainDisciplines"
          :key="disc.name"
          class="discipline reveal"
          :data-delay="i % 4"
          :data-video="disc.video || null"
          :tabindex="disc.video ? 0 : null"
          :aria-label="
            disc.video
              ? `${disc.name} — ${$t('disciplines.watch_video')}`
              : null
          "
          @click="disc.video && openVideo(disc.video)"
          @keydown.enter.space.prevent="disc.video && openVideo(disc.video)"
        >
          <span class="discipline__icon" v-html="disc.icon"></span>
          <h3 class="discipline__name">{{ disc.name }}</h3>
          <p class="discipline__desc">
            {{ disc.description }}
          </p>
          <div class="discipline__level">
            <span class="dots">
              <i v-for="n in 3" :key="n" :class="{ on: n <= disc.level }"></i>
            </span>
            <span class="label">{{ disc.label }}</span>
          </div>
          <span v-if="disc.video" class="discipline__play">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </article>
      </div>

      <!--Other disciplines -->
      <div class="disc__group reveal">
        <span class="disc__group-label">{{ $t('disciplines.others') }}</span>
        <span class="rule"></span>
      </div>

      <ul class="disc__autres-list reveal">
        <li
          v-for="(disc, index) in otherDisciplines"
          :key="disc.name"
          class="disc__autre"
          :data-video="disc.video"
          :tabindex="disc.video ? 0 : null"
          :aria-label="
            disc.video
              ? `${disc.name} — ${$t('disciplines.watch_video')}`
              : null
          "
          @click="disc.video && openVideo(disc.video)"
          @keydown.enter.space.prevent="disc.video && openVideo(disc.video)"
        >
          <span class="ic" v-html="disc.icon"> </span>
          <span class="nm">{{ disc.name }}</span>
          <span class="lvl">{{ disc.label }}</span>
          <span v-if="disc.video" class="play-mini">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { openVideo } = useLightbox();

const mainDisciplines = [
  {
    name: $t('disciplines.items.bungee_straps'),
    description: $t('disciplines.items.bungee_straps_desc'),
    level: 2,
    label: $t('disciplines.levels.expert'),
    video: 'uLmsYlyVUjg',
    icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round"><path d="M16 4v16M32 4v16"/><path d="M16 20c0 6 16 6 16 0"/><circle cx="24" cy="36" r="6"/></svg>',
  },
  {
    name: $t('disciplines.items.banquine'),
    description: $t('disciplines.items.banquine_desc'),
    level: 2,
    label: $t('disciplines.levels.expert'),
    video: null,
    icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round"><circle cx="14" cy="14" r="4"/><circle cx="34" cy="14" r="4"/><path d="M8 40c0-7 4-12 6-12M40 40c0-7-4-12-6-12"/><path d="M24 20c-4 0-7 4-7 10M24 20c4 0 7 4 7 10"/></svg>',
  },
  {
    name: $t('disciplines.items.acrobatics'),
    description: $t('disciplines.items.acrobatics_desc'),
    level: 3,
    label: $t('disciplines.levels.expert'),
    video: 'EWYxwCAXlTg',
    icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round"><path d="M6 38c8-28 28-28 36 0"/><circle cx="24" cy="13" r="4"/></svg>',
  },
];

const otherDisciplines = [
  {
    name: $t('disciplines.items.flying_trapeze'),
    level: 3,
    label: $t('disciplines.levels.expert'),
    video: '9wY4HaM8ing',
    icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round"><path d="M4 10h40"/><path d="M14 10v10M34 10v10"/><path d="M12 20h24"/><circle cx="24" cy="32" r="6"/><path d="M24 26v-6"/></svg>',
  },
  {
    name: $t('disciplines.items.straps'),
    level: 2,
    label: $t('disciplines.levels.expert'),
    video: null,
    icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round"><path d="M18 4v18M30 4v18"/><circle cx="24" cy="32" r="7"/><path d="M21 22l3 3 3-3"/></svg>',
  },
  {
    name: $t('disciplines.items.vpole'),
    level: 1,
    label: $t('disciplines.levels.confirmed'),
    video: null,
    icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round"><path d="M8 6l16 30L40 6"/><circle cx="24" cy="42" r="3"/></svg>',
  },
  {
    name: $t('disciplines.items.korean_cradle'),
    level: 1,
    label: $t('disciplines.levels.confirmed'),
    video: null,
    icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round"><rect x="8" y="8" width="32" height="32" rx="1"/><path d="M8 18h32M16 8v32"/></svg>',
  },
  {
    name: $t('disciplines.items.comedy'),
    level: 2,
    label: $t('disciplines.levels.expert'),
    video: null,
    icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round"><path d="M10 10c0 16 4 28 14 28s14-12 14-28c-6 3-22 3-28 0z"/><path d="M18 20c1.2 1.5 3 1.5 4 0M26 20c1.2 1.5 3 1.5 4 0"/></svg>',
  },
  {
    name: $t('disciplines.items.stunt'),
    level: 2,
    label: $t('disciplines.levels.expert'),
    video: null,
    icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round"><path d="M24 4l5 12 12 1-9 8 3 13-11-7-11 7 3-13-9-8 12-1z"/></svg>',
  },
  // {
  //   name: $t('disciplines.items.chinese_pole'),
  //   level: 1,
  //   label: $t('disciplines.levels.confirmed'),
  //   video: null,
  //   icon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round"><path d="M24 4v40"/><circle cx="24" cy="16" r="5"/><path d="M24 26c-3 3-3 8 0 10M24 26c3 3 3 8 0 10"/></svg>',
  // },
];
</script>
