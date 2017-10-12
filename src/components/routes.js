import asyncComponent from './AsyncComponent';

const routes = [
  {
    path: '/',
    text: 'Home',
    component: asyncComponent(() => import('./Home/Home')),
    exact: true
  },
  {
    path: '/work',
    text: 'Work',
    component: asyncComponent(() => import('./Work/Work'))
  },
  {
    path: '/about',
    text: 'About',
    component: asyncComponent(() => import('./About/About'))
  },
  {
    path: '/contact',
    text: 'Contact',
    component: asyncComponent(() => import('./Contact/Contact'))
  }
];

export default routes;
