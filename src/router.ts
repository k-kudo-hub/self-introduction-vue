import { createMemoryHistory, createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Portfolio from './views/Portfolio.vue';
import Contact from './views/Contact.vue';

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/portfolio", component: Portfolio },
  { path: "/contact", component: Contact }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes
});
