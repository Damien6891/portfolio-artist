<template>
  <div>
    <HeroSection />
    <AboutSection />
    <DisciplinesSection />
    <CareerSection />
    <!-- <TrophiesSection /> -->
    <ContactSection />
  </div>
</template>

<script setup>
const { t, locale } = useI18n();

useSeoMeta({
  title: `Damien Hantzer — ${t('seo.title')}`,
  description: t('seo.description'),
  ogTitle: `Damien Hantzer — ${t('seo.title')}`,
  ogDescription: t('seo.description'),
  ogImage: 'https://damien-hantzer.com/images/profile_picture.jpg',
  ogUrl: `https://damien-hantzer.com${locale.value === 'en' ? '/en' : ''}`,
  ogType: 'website',
  ogLocale: locale.value === 'fr' ? 'fr_FR' : 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: `Damien Hantzer — ${t('seo.title')}`,
  twitterDescription: t('seo.description'),
  twitterImage: 'https://damien-hantzer.com/images/profile_picture.jpg',
  robots: 'index, follow',
  author: 'Damien Hantzer',
  themeColor: '#0a0a0a',
});

useHead({
  htmlAttrs: { lang: locale },
  link: [
    {
      rel: 'canonical',
      href: `https://damien-hantzer.com${locale.value === 'en' ? '/en' : ''}`,
    },
  ],
});
</script>
