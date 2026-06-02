<template>
  <nav
    class="nav"
    :class="{ scrolled: isScrolled }"
    aria-label="Navigation principale"
  >
    <a href="#hero" class="nav__logo" @click.prevent="scrollToTop"
      >Damien <span>Hantzer</span></a
    >
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

      <!-- Dropdown langue -->
      <li class="lang-switcher" :class="{ open: langOpen }" ref="langRef">
        <button class="lang-switcher__current" @click="langOpen = !langOpen">
          {{ locale.toUpperCase() }}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <ul class="lang-switcher__dropdown">
          <li v-for="loc in locales" :key="loc.code">
            <button
              :class="{ active: loc.code === locale }"
              @click="changeLocale(loc.code)"
            >
              {{ loc.code.toUpperCase() }}
            </button>
          </li>
        </ul>
      </li>
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
const router = useRouter();
const { locales, setLocale, locale } = useI18n();

const isScrolled = ref(false);
const menuOpen = ref(false);
const langOpen = ref(false);
const langRef = ref(null);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
function closeMenu() {
  menuOpen.value = false;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function changeLocale(code) {
  langOpen.value = false;
  await setLocale(code);
  await router.push(code === 'fr' ? '/' : `/${code}`);
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('click', onClickOutside);
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('click', onClickOutside);
});

function onScroll() {
  isScrolled.value = window.scrollY > 40;
}

function onClickOutside(e) {
  if (langRef.value && !langRef.value.contains(e.target)) {
    langOpen.value = false;
  }
}
</script>
