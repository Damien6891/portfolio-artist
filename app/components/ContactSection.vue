<template>
  <section class="section section--alt" id="contact">
    <div class="wrap contact__grid">
      <div>
        <p class="eyebrow reveal">{{ $t('contact.eyebrow') }}</p>
        <h2 class="section-title reveal" data-delay="1">
          {{ $t('contact.title') }}
        </h2>
        <p class="contact__lead reveal" data-delay="2">
          {{ $t('contact.subtitle') }}
        </p>
        <ul class="contact__list reveal" data-delay="3">
          <li>
            <a href="mailto:contact@damien-hantzer.com">
              <span class="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <span
                ><span class="k">Email</span
                ><span class="v">contact@damien-hantzer.com</span></span
              >
            </a>
          </li>
          <li>
            <a href="https://wa.me/33784151842" target="_blank" rel="noopener">
              <span class="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.2-5.3A8.5 8.5 0 1 1 21 11.5z"
                  />
                </svg>
              </span>
              <span>
                <span class="k">WhatsApp</span>
                <span class="v">+33 7 84 15 18 42</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/acro_dams"
              target="_blank"
              rel="noopener"
            >
              <span class="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17"
                    cy="7"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </span>
              <span
                ><span class="k">Instagram</span
                ><span class="v">@acro_dams</span></span
              >
            </a>
          </li>
          <li>
            <div>
              <span class="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11z"
                  />
                  <circle cx="12" cy="10" r="2.4" />
                </svg>
              </span>
              <span
                ><span class="k">Localisation</span
                ><span class="v">Alsace, France</span></span
              >
            </div>
          </li>
        </ul>
      </div>
      <div class="reveal" data-delay="2">
        <form
          v-if="!submitted"
          class="form"
          @submit.prevent="handleSubmit"
          novalidate
        >
          <div class="field">
            <label for="nom">Nom complet</label>
            <input
              type="text"
              id="nom"
              v-model="form.nom"
              placeholder="Votre nom"
              required
            />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="vous@exemple.com"
              required
            />
          </div>
          <div class="field">
            <label for="type">Type de projet</label>
            <select id="type" v-model="form.type">
              <option value="spectacle">Spectacle</option>
              <option value="evenement">Événement</option>
              <option value="formation">Formation</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Parlez-moi de votre projet…"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn--solid">Envoyer</button>
        </form>
        <div v-else class="form__success show">
          <div class="check">
            <svg
              viewBox="0 0 24 24"
              width="42"
              height="42"
              fill="none"
              stroke="currentColor"
              stroke-width="1.4"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M7.5 12.5l3 3 6-6.5" />
            </svg>
          </div>
          <h3>Merci {{ firstName }} !</h3>
          <p>Votre message a bien été envoyé. Je vous réponds très vite.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const submitted = ref(false);
const sending = ref(false);
const error = ref('');
const form = reactive({ nom: '', email: '', type: 'spectacle', message: '' });
const firstName = computed(() => form.nom.trim().split(' ')[0]);

async function handleSubmit() {
  sending.value = true;
  error.value = '';
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form,
    });
    submitted.value = true;
  } catch (e) {
    error.value = 'Une erreur est survenue. Merci de réessayer.';
  } finally {
    sending.value = false;
  }
}
</script>
