<template>
  <nav
    class="nav"
    :class="{ scrolled: isScrolled }"
    aria-label="Navigation principale"
  >
    <a href="#hero" class="nav__logo">Damien <span>Hantzer</span></a>
    <ul class="nav__links" :class="{ open: menuOpen }">
      <li>
        <a href="#about" @click="closeMenu">{{ $t('nav.about') }}</a>
      </li>
      <li>
        <a href="#disciplines" @click="closeMenu">{{
          $t('nav.disciplines')
        }}</a>
      </li>
      <li>
        <a href="#parcours" @click="closeMenu">{{ $t('nav.career') }}</a>
      </li>
      <li>
        <a href="#contact" class="nav--cta" @click="closeMenu">{{
          $t('nav.contact')
        }}</a>
      </li>

      <NuxtLink
        v-for="locale in locales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.code.toUpperCase() }}
      </NuxtLink>
    </ul>
    <button
      class="nav__burger"
      :class="{ open: menuOpen }"
      aria-label="Menu"
      :aria-expanded="menuOpen"
      @click="toggleMenu"
    >
      <span></span><span></span><span></span>
    </button>
  </nav>
</template>

<script setup>
const { locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const isScrolled = ref(false);
const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
function closeMenu() {
  menuOpen.value = false;
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
onUnmounted(() => window.removeEventListener('scroll', onScroll));

function onScroll() {
  isScrolled.value = window.scrollY > 40;
}
</script>
