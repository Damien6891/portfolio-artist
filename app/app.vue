<template>
  <div>
    <NavBar />
    <VideoLightbox />
    <PhotoLightbox />
    <NuxtPage />
    <FooterSection />
  </div>
</template>

<script setup>
useScrollReveal();

useHead({
  script: [
    {
      src: 'https://stats.damien-hantzer.com/script.js',
      defer: true,
      integrity: 'sha256-GtEUXRnUVYwg9UacpKX8UKGkb4YIWMnJG/zVb9KaUio=',
      crossorigin: 'anonymous',
      'data-website-id': 'ae9703d3-4ade-4acc-b1f3-c49b5152e84f',
    },
  ],
});
</script>
