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

useScript({
  src: 'https://stats.damien-hantzer.com/script.js',
  defer: true,
  'data-website': 'ae9703d3-4ade-4acc-b1f3-c49b5152e84f',
});
</script>
