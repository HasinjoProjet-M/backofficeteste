export const navigations = [
  {
    name: 'Statistique',
    icon: 'trending_up',
    path: 'https://main--stirring-chebakia-f56620.netlify.app/accueil'
  },
  { label: 'Gestion', type: 'label' },
  {
    name: 'Categorie',
    path: 'https://main--stirring-chebakia-f56620.netlify.app/categories',
    icon: 'dashboard'
  },
  {
    name: 'Marque',
    icon: 'security',
    children: [
      {
        name: 'Ajout marque',
        iconText: 'SI',
        path: 'https://main--stirring-chebakia-f56620.netlify.app/marques'
      },
      {
        name: 'Ajout model',
        iconText: 'SU',
        path: 'https://main--stirring-chebakia-f56620.netlify.app/models'
      },
      {
        name: 'Liste model / marque',
        iconText: 'FP',
        path: 'https://main--stirring-chebakia-f56620.netlify.app/listesmodels'
      }
    ]
  },
  {
    name: 'Utilisateurs',
    icon: 'people',
    path: 'https://main--stirring-chebakia-f56620.netlify.app/utilisateur'
  },
  {
    name: 'Carburant',
    path: 'https://main--stirring-chebakia-f56620.netlify.app/carburants',
    icon: 'dashboard'
  },

  {
    name: 'Public',
    icon: 'event_note',
    children: [
      {
        name: 'Annonce',
        iconText: 'A',
        path: 'https://main--stirring-chebakia-f56620.netlify.app/public/annonces'
      }
    ]
  }
];
