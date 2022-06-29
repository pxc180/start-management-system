import { createRouter, createWebHistory } from 'vue-router';

import PageLayout from '@/layout/PageLayout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: PageLayout,
    },
  ],
});

export default router;
