import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/design', },
  { path: '/design', meta: { name: '装修页' }, component: () => import('../views/design/index.vue') },
  // { path: '*', redirect: '/404', hidden: true }
]

// 路由实例
const router = createRouter({
  routes,
  history: createWebHistory()
});

// 路由守卫
router.beforeEach((to, from, next) => {
  next();
});

export default router;

