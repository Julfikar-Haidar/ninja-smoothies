import Vue from 'vue'
import App from './App.vue'

/*Router*/
import VueRouter from 'vue-router'


/*Router*/
Vue.use(VueRouter);
import {routes} from "./router/router";

/*Production Setting*/
Vue.config.productionTip = false;


const router = new VueRouter({
    // mode: 'history', //hides hash in url after localhost:8080
    routes: routes
});


/*Render Components to the Template*/
new Vue({
  render: h => h(App),

  /*Router*/
  router: router

}).$mount('#app');


