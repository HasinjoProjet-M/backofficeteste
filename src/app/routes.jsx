import { lazy } from 'react';
import AuthGuard from './auth/AuthGuard';
import { authRoles } from './auth/authRoles';
import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';

// session pages
const NotFound = Loadable(lazy(() => import('app/views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('app/views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('app/views/sessions/JwtRegister')));

// annonce page
const Annonces = Loadable(lazy(() => import('app/views/annonce/list/AppTable')));

// stat page
const Accueil = Loadable(lazy(() => import('app/views/acceuil/AppTableauBord')));

const Users = Loadable(lazy(() => import('app/views/utilisateur/list/AppTable')));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,

      // statistique route
      {
        path: 'https://main--stirring-chebakia-f56620.netlify.app/accueil',
        element: <Accueil />,
        auth: authRoles.admin
      },

      // annonce route
      {
        path: 'https://main--stirring-chebakia-f56620.netlify.app/public/annonces',
        element: <Annonces />,
        auth: authRoles.admin
      },
      {
        path: 'https://main--stirring-chebakia-f56620.netlify.app/utilisateur',
        element: <Users />,
        auth: authRoles.admin
      }
    ]
  },

  // session pages route
  { path: 'https://main--stirring-chebakia-f56620.netlify.app/session/404', element: <NotFound /> },
  {
    path: 'https://main--stirring-chebakia-f56620.netlify.app/session/signin',
    element: <JwtLogin />
  },
  {
    path: 'https://main--stirring-chebakia-f56620.netlify.app/session/signup',
    element: <JwtRegister />
  },

  {
    path: 'https://main--stirring-chebakia-f56620.netlify.app/',
    element: <Accueil />
  },
  { path: '', element: <NotFound /> }
];

export default routes;
