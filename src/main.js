/*  ___ _            _ _    _ _
 * / __(_)_ __  _ __| (_)__(_) |_ ___
 * \__ \ | '  \| '_ \ | / _| |  _/ -_)
 * |___/_|_|_|_| .__/_|_\__|_|\__\___|
 *             |_|
 * This example is using the Simplicite node.js & browser JavaScript API
 */
import { createApp } from 'vue';
import App from './App.vue';
import simplicite from 'simplicite';

// Explicit URL needed for a standalone deployment, remove it when deploying in Simplicité
const app = simplicite.session({ url: 'https://demo.dev.simplicite.io', debug: false });

app.info('Version: ' + simplicite.constants.MODULE_VERSION);
app.debug(app.parameters);

app.login({ username: 'website', password: 'simplicite' }).then(user => {
    app.debug('Logged in as ' + user.login);

    const vueApp = createApp(App);

    // Make the above session available to all components
    vueApp.config.globalProperties.$simplicite = app;

    vueApp.mount('#vue-demo');
})