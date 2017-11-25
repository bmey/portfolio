import asyncComponent from './AsyncComponent';

export const notFoundRoute = {
  component: asyncComponent(() => import('./pages/not-found')),
};

export const appRoutes = [
  {
    path: '/',
    text: 'Home',
    component: asyncComponent(() => import('./pages/home')),
    exact: true,
  },
  {
    path: '/work',
    text: 'Work',
    component: asyncComponent(() => import('./pages/work')),
  },
  {
    path: '/about',
    text: 'About',
    component: asyncComponent(() => import('./pages/about')),
  },
  {
    path: '/contact',
    text: 'Contact',
    component: asyncComponent(() => import('./pages/contact')),
  },
];
