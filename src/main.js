import Vue from 'vue'
import Simplicite from 'simplicite'
import App from './App.vue'

const s = Simplicite.session({
  url: 'https://dev40.dev.simplicite.io',
  username: 'website',
  password: 'simplicite',
  debug: false,
});

// Make the above variable available to all components
Vue.prototype.$simplicite = s;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#demo-vue-frontend')
