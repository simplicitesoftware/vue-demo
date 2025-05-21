import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    port: 3000
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: true,
    port: 3000
  }
});
