<template>
  <div
    class="lightbox"
    :class="{ open: isOpen }"
    role="dialog"
    aria-modal="true"
    aria-label="Lecteur vidéo"
    @click="handleClick"
  >
    <div class="lightbox__inner">
      <button class="lightbox__close" aria-label="Fermer" @click="closeVideo">
        Fermer
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <div class="lightbox__frame">
        <iframe
          v-if="videoId"
          :src="`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`"
          title="Vidéo"
          allow="autoplay; encrypted-media; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isOpen, videoId, closeVideo } = useLightbox();

function handleClick(e) {
  if (e.target === e.currentTarget) closeVideo();
}

onMounted(() => {
  window.addEventListener('keydown', onKey);
});
onUnmounted(() => window.removeEventListener('keydown', onKey));

function onKey(e) {
  if (e.key === 'Escape' && isOpen.value) closeVideo();
}
</script>
