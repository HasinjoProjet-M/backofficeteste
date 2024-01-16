export const navigations = [
  {
    name: 'Statistique',
    icon: 'trending_up',
    path: '/accueil'
  },
  { label: 'Gestion', type: 'label' },
  { name: 'Categorie', path: '/categories', icon: 'dashboard' },
  {
    name: 'Marque',
    icon: 'security',
    children: [
      { name: 'Ajout marque', iconText: 'SI', path: '/marques' },
      { name: 'Ajout model', iconText: 'SU', path: '/models' },
      { name: 'Liste model / marque', iconText: 'FP', path: '/listesmodels' }
    ]
  },

  {
    name: 'Public',
    icon: 'event_note',
    children: [{ name: 'Annonce', iconText: 'A', path: '/public/annonces' }]
  }
];
