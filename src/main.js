import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import vuetify from './vuetify';
import router from './routes';
import store from './store';


router.beforeEach((to, from, next) => {
  if (to.name === 'checkout' && Object.keys(store.state.cart).length < 1) next({ name: 'home' })
  else next()
})

new Vue({
  render: h => h(App),
  router,
  store,
  vuetify,
}).$mount('#app')
