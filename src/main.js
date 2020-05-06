/*  ___ _            _ _    _ _
 * / __(_)_ __  _ __| (_)__(_) |_ ___
 * \__ \ | '  \| '_ \ | / _| |  _/ -_)
 * |___/_|_|_|_| .__/_|_\__|_|\__\___|
 *             |_|
 * This example is using the Simplicite node.js & browser JavaScript API
 */
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
