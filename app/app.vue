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
      'data-website': 'ae9703d3-4ade-4acc-b1f3-c49b5152e84f',
    },
  ],
});
</script>
