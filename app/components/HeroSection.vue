<template>
  <header class="hero" id="hero">
    <div
      class="hero__bg"
      ref="heroBg"
      :style="{
        backgroundImage: `url('images/la_perle/bungee_5.webp')`,
      }"
    ></div>
    <div class="hero__overlay"></div>
    <div class="hero__content">
      <div class="badge">
        <span class="pulse"></span>
        <b>{{ $t('hero.available') }}</b>
        <span class="sep">—</span>{{ appConfig.contact.location }}
      </div>
      <h1 class="hero__name">
        <span class="line"><span>Damien</span></span>
        <span class="line"><span>Hantzer</span></span>
      </h1>
      <p class="hero__subtitle">{{ $t('hero.subtitle') }}</p>
      <div class="hero__cta">
        <button class="btn btn--solid" @click="openVideo('uLmsYlyVUjg')">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          {{ $t('hero.cta') }}
        </button>
      </div>
    </div>
    <div class="scroll-cue">
      <span>{{ $t('hero.scroll') }}</span>
      <span class="rail"></span>
    </div>
  </header>
</template>

<script setup>
const appConfig = useAppConfig();
const { openVideo } = useLightbox();
const heroBg = ref(null);

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

function onScroll() {
  if (!heroBg.value || window.scrollY >= window.innerHeight) return;
  heroBg.value.style.transform = `scale(1.08) translateY(${window.scrollY * 0.18}px)`;
}
</script>
