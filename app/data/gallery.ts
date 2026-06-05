export interface GalleryItem {
  src: string;
  title: { fr: string; en: string };
  place: string;
  caption: { fr: string; en: string };
  tall?: boolean;
  wide?: boolean;
  delay?: number;
}

export const galleryItems: GalleryItem[] = [
  {
    src: '/images/imaginacie/imaginacie_2.jpg',
    title: { fr: 'Imaginacie', en: 'Imaginacie' },
    place: 'Košice',
    caption: {
      fr: "Košice, Slovaquie. Création d'un acte de trapèze volant avec le Cirque Évasion pour le festival international Imaginacie.",
      en: 'Košice, Slovakia. Creation of a flying trapeze act with Cirque Évasion for the international Imaginacie festival.',
    },
    tall: true,
    delay: 0,
  },
  {
    src: '/images/parc_asterix/gargouille.jpg',
    title: {
      fr: 'Peur sur le Parc — Gargouille',
      en: 'Peur sur le Parc — Gargoyle',
    },
    place: 'Parc Astérix',
    caption: {
      fr: 'Parc Astérix, Paris. Rôle de la Gargouille dans une création de Jean-Claude Cotillard mêlant acrobatie et comédie.',
      en: 'Parc Astérix, Paris. Role of the Gargoyle in a creation by Jean-Claude Cotillard mixing acrobatics and comedy.',
    },
    delay: 1,
  },
  {
    src: '/images/parc_asterix/legion_1.jpg',
    title: { fr: 'La Légion recrute', en: 'La légion recrute' },
    place: 'Parc Astérix',
    caption: {
      fr: 'Spectacle "La Légion recrute" au Parc Astérix, mêlant acrobatie au sol, comédie et cascade.',
      en: '"La Légion recrute" show at Parc Astérix, combining floor acrobatics, comedy and stunts.',
    },
    delay: 2,
  },
  {
    src: '/images/imaginacie/imaginacie_4.jpg',
    title: { fr: 'Imaginacie', en: 'Imaginacie' },
    place: 'Košice',
    caption: {
      fr: "Košice, Slovaquie. Création d'un acte de trapèze volant avec le Cirque Évasion pour le festival international Imaginacie.",
      en: 'Košice, Slovakia. Creation of a flying trapeze act with Cirque Évasion for the international Imaginacie festival.',
    },
    wide: true,
    delay: 0,
  },
  {
    src: '/images/pierre_et_vacances/trapeze.jpg',
    title: { fr: 'Pierre et Vacances', en: 'Pierre et Vacances' },
    place: 'Port Bourgenay',
    caption: {
      fr: 'Spectacle de trapèze volant pour le village vacances Pierre et Vacances.',
      en: 'Flying trapeze performance for the Pierre et Vacances resort.',
    },
    wide: true,
    delay: 0,
  },
  {
    src: '/images/la_perle/clown_1.jpg',
    title: { fr: 'La Perle', en: 'La Perle' },
    place: 'Dubaï',
    caption: {
      fr: 'Personnage principal "Clown Prince" du spectacle "La Perle" par Franco Dragone.',
      en: 'Main character "Clown Prince" in the show "La Perle" by Franco Dragone.',
    },
    tall: true,
    delay: 1,
  },
  {
    src: '/images/la_perle/acro-pole_1.webp',
    title: { fr: 'La Perle', en: 'La Perle' },
    place: 'Dubaï',
    caption: {
      fr: 'Acte de flying pole pour le spectacle "La Perle" par Franco Dragone.',
      en: 'Flying pole act in the show "La Perle" by Franco Dragone.',
    },
    delay: 1,
  },
  {
    src: '/images/la_perle/pillar_2.jpg',
    title: { fr: 'La Perle', en: 'La Perle' },
    place: 'Dubaï',
    caption: {
      fr: 'Acte "Pillars" mêlant banquine et main à main.',
      en: '"Pillars" act combining banquine and hand-to-hand.',
    },
    delay: 1,
  },
];
