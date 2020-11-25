import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Portfolio from './views/Portfolio.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/portfolio", component: Portfolio },
    { path: "/contact", component: Contact }
  ]
});
