import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
