<template>
  <footer class="footer">
    <div class="wrap">
      <div class="footer__top">
        <a href="#hero" class="footer__logo">Damien <span>Hantzer</span></a>
        <div class="footer__links">
          <a :href="appConfig.contact.instagram" target="_blank" rel="noopener"
            >Instagram</a
          >
          <a :href="`mailto:${appConfig.contact.email}`">Email</a>
        </div>
      </div>
      <div class="footer__credits">
        <p>© 2026 Damien Hantzer</p>
        <p class="photo-credit">
          Crédits photos : Mathieu Campan · Bastien Colliard · Arnaud Sobczyk ·
          Martin Baran
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const appConfig = useAppConfig();
</script>
