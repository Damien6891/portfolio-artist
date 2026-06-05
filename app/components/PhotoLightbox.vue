<template>
  <Teleport to="body">
    <div
      class="gal-lightbox"
      :class="{ open: isPhotoOpen }"
      role="dialog"
      aria-modal="true"
      aria-label="Galerie d'images"
      @click.self="closePhoto"
    >
      <button class="gal-lb__close" aria-label="Fermer" @click="closePhoto">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <button
        class="gal-lb__nav gal-lb__prev"
        aria-label="Image précédente"
        @click="prev"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
        >
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>

      <button
        class="gal-lb__nav gal-lb__next"
        aria-label="Image suivante"
        @click="next"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <figure class="gal-lb__stage" v-if="currentPhoto">
        <div class="gal-lb__imgwrap">
          <img
            class="gal-lb__img"
            :src="currentPhoto.src"
            :alt="currentPhoto.title"
          />
        </div>
        <figcaption class="gal-lb__cap">
          <span class="gal-lb__count"
            >{{ currentIndex + 1 }} / {{ photos.length }}</span
          >
          <h3 class="gal-lb__title">{{ currentPhoto.title }}</h3>
          <p class="gal-lb__desc">{{ currentPhoto.caption }}</p>
        </figcaption>
      </figure>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const {
  isPhotoOpen,
  currentPhoto,
  currentIndex,
  photos,
  closePhoto,
  prev,
  next,
} = useLightboxPhoto();

onMounted(() => {
  document.addEventListener('keydown', handleKey);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKey);
});

function handleKey(e: KeyboardEvent) {
  if (!isPhotoOpen.value) return;
  if (e.key === 'Escape') closePhoto();
  else if (e.key === 'ArrowLeft') prev();
  else if (e.key === 'ArrowRight') next();
}
</script>
