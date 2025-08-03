// import { fileURLToPath, URL } from 'node:url'
import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  let proxy = {};

  // Check if this is an AWBW Developer or a regular user
  if (env.VITE_PUBLIC_DIR && env.VITE_PUBLIC_DIR.includes('public_html')) {
    console.log('Preparing build for an official AWBW Developer');
    proxy = {
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
      },
    };
  } else {
    console.log('Preparing build for a regular developer');
    proxy = {
      '/terrain': {
        target: 'https://awbw.amarriner.com',
        changeOrigin: true,
        secure: true,
      },
    };
  }

  return {
    publicDir: env.VITE_PUBLIC_DIR,
    base: env.VITE_BASE,
    // build: {
    //   outDir: '../public_html/dist',
    //   emptyOutDir: true,
    // },
    plugins: [vue(), vueDevTools(), tailwindcss()],
    resolve: {
      alias: {
        // '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@': path.resolve(__dirname, './src'),
        // '/terrain': new URL('https://awbw.amarriner.com/terrain'),
        // '/terrain': new URL('http://localhost:5173/terrain'),
        // '~': new URL('https://awbw.amarriner.com'),
      },
    },
    server: {
      allowedHosts: ['awbw.test', 'localhost', 'awbw.amarriner.com'],
      proxy,
      // origin: 'https://awbw.amarriner.com',
      // origin: 'http://localhost',
    },
  };
});
