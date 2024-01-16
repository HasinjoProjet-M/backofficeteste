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

const materialRoutes = [
  { path: '/categories', element: <AppCategories /> },
  { path: '/marques', element: <AppMarques /> },
  { path: '/models', element: <AppModels /> },
  { path: '/listesmodels', element: <AppListeModels /> },
  { path: '/annonces/detail', element: <AppDetailAnnonce /> }
];

export default materialRoutes;
