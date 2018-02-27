import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import bookShelf from './views/bookShelf.vue';
import findBook from './views/findBook.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/bookShelf',
      name: 'bookShelf',
      component: bookShelf,
    },
    {
      path: '/findBook',
      name: 'findBook',
      component: findBook,
    },
  ],
});
