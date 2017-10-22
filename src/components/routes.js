import asyncComponent from './AsyncComponent';

export const notFoundRoute = {
  component: asyncComponent(() => import('./pages/NotFound/NotFound'))
};

export const appRoutes = [
  {
    path: '/',
    text: 'Home',
    component: asyncComponent(() => import('./pages/Home/Home')),
    exact: true
  },
  {
    path: '/work',
    text: 'Work',
    component: asyncComponent(() => import('./pages/Work/Work'))
  },
  {
    path: '/about',
    text: 'About',
    component: asyncComponent(() => import('./pages/About/About'))
  },
  {
    path: '/contact',
    text: 'Contact',
    component: asyncComponent(() => import('./pages/Contact/Contact'))
  }
];
