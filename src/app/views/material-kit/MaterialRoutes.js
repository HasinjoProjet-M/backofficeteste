import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

/**** Categorie ***/
const AppCategories = Loadable(lazy(() => import('app/views/categories/AppCategories')));
/**** Marques ***/
const AppMarques = Loadable(lazy(() => import('app/views/marques/AppMarques')));
/*** Model ****/
const AppModels = Loadable(lazy(() => import('app/views/models/AppModels')));
/*** Liste Model / Marque ****/
const AppListeModels = Loadable(lazy(() => import('app/views/marques/listeModels/AppListeModels')));
/*** Detail annonce  ***/
const AppDetailAnnonce = Loadable(lazy(() => import('../annonce/detail/AppDetailAnnonce')));
/**** carburant  */
const AppCarburants = Loadable(lazy(() => import('app/views/carburants/Appcarburants')));

const materialRoutes = [
  {
    path: 'https://main--stirring-chebakia-f56620.netlify.app/categories',
    element: <AppCategories />
  },
  { path: 'https://main--stirring-chebakia-f56620.netlify.app/marques', element: <AppMarques /> },
  { path: 'https://main--stirring-chebakia-f56620.netlify.app/models', element: <AppModels /> },
  {
    path: 'https://main--stirring-chebakia-f56620.netlify.app/listesmodels',
    element: <AppListeModels />
  },
  {
    path: 'https://main--stirring-chebakia-f56620.netlify.app/annonces/detail',
    element: <AppDetailAnnonce />
  },
  {
    path: 'https://main--stirring-chebakia-f56620.netlify.app/carburants',
    element: <AppCarburants />
  }
];

export default materialRoutes;
