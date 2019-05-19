import Vue from 'vue';
import Router from 'vue-router';
import OneComponent from './views/One-component.vue';
import ManyComponent from './views/Many-components.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'one-component'
      }
    },
    {
      path: '/one-component',
      name: 'one-component',
      component: OneComponent
    },
    {
      path: '/many-components',
      name: 'many-components',
      component: ManyComponent
    }
  ]
});
