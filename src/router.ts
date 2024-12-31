import { createMemoryHistory, createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Portfolio from './views/Portfolio.vue';
import Gallery from './views/Gallery.vue';

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/portfolio", component: Portfolio },
  { path: "/gallery", component: Gallery },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes
});
