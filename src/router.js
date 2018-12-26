import Vue from "vue";
import Router from "vue-router";
import OneComponent from "./views/One-component.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "OneComponent"
      }
    },
    {
      path: "/one-component",
      name: "OneComponent",
      component: OneComponent
    },
    {
      path: "/many-components",
      name: "manyComponents",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Many-components.vue")
    }
  ]
});
