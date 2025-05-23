/*  ___ _            _ _    _ _
 * / __(_)_ __  _ __| (_)__(_) |_ ___
 * \__ \ | '  \| '_ \ | / _| |  _/ -_)
 * |___/_|_|_|_| .__/_|_\__|_|\__\___|
 *             |_|
 * This example is using the Simplicite node.js & browser JavaScript API
 */
import { createApp } from 'vue';
import Demo from './Demo.vue';
import simplicite from 'simplicite';

(async () => {
  // Explicit URL needed for a standalone deployment, set it to undefined when deploying in Simplicité
  const cfg = { url: 'https://demo.dev2.simplicite.io', debug: false };
  const app = simplicite.session(cfg);

  app.info(`Version: ${app.getModuleVersion()}`);
  app.debug(app.parameters);

  const user = await app.login({ username: 'website', password: 'simplicite' });
  app.debug(`Logged in as ${user.login}`);

  const vueApp = createApp(Demo);

  // Make the configuration and session variable available to all components
  vueApp.config.globalProperties.$configuration = cfg;
  vueApp.config.globalProperties.$simplicite = app;

  vueApp.mount('body');
})();
