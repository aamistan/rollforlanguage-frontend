import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import fs from 'fs';
import path from 'path';

// Recreate __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(() => {
  const isCodespaces = process.env.CODESPACES === 'true';

  const serverOptions: Record<string, any> = {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    https: false,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };

  if (isCodespaces) {
    try {
      const key = fs.readFileSync(resolve(__dirname, 'certs/localhost-key.pem'));
      const cert = fs.readFileSync(resolve(__dirname, 'certs/localhost.pem'));
      serverOptions.https = { key, cert };
    } catch {
      console.warn('[vite] HTTPS certs not found. Falling back to HTTP.');
    }
  }

  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: 'src/auto-imports.d.ts',
        vueTemplate: true,
      }),
      Components({
        dirs: ['src/components'],
        extensions: ['vue'],
        deep: true,
        dts: 'src/components.d.ts',
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: serverOptions,
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
  };
});
