import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/media': {
        target: 'https://quynh.moe',
        changeOrigin: true,
        secure: false,
        bypass(req) {
          const localPath = path.join(process.cwd(), 'public', req.url.split('?')[0]);
          if (fs.existsSync(localPath) && fs.statSync(localPath).isFile()) {
            return req.url;
          }
        }
      },
      '/og': {
        target: 'https://quynh.moe',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
