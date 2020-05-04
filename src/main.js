import Vue from 'vue';
import Simplicite from 'simplicite';
import App from './App.vue';
import {version} from '../package.json';

const s = Simplicite.session({
  url: process.env.VUE_APP_URL,
  username: process.env.VUE_APP_USERNAME,
  password: process.env.VUE_APP_PASSWORD,
  debug: false,
});

// Make the above variable available to all components
Vue.prototype.$simplicite = s;
// Store version
Vue.prototype.$version = version;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#vue-demo')
