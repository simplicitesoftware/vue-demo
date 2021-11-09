/*  ___ _            _ _    _ _
 * / __(_)_ __  _ __| (_)__(_) |_ ___
 * \__ \ | '  \| '_ \ | / _| |  _/ -_)
 * |___/_|_|_|_| .__/_|_\__|_|\__\___|
 *             |_|
 * This example is using the Simplicite node.js & browser JavaScript API
 */
import Vue from 'vue';
import App from './App.vue';
import simplicite from 'simplicite';

// Simplicite session (see the '.env' files for environment variables values)
const app = simplicite.session({
  url: process.env.VUE_APP_URL,
  username: process.env.VUE_APP_USERNAME,
  password: process.env.VUE_APP_PASSWORD,
  debug: false,
});

app.info('Version: ' + simplicite.constants.MODULE_VERSION);
app.debug(app.parameters);

// Make the above session available to all components
Vue.prototype.$simplicite = app;

// Disable Vue warning when running in developement mode
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#vue-demo')
