import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

function copyStaticBirthdayAssets() {
  return {
    name: 'copy-static-birthday-assets',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, {recursive: true});
      }

      const filesToCopy = ['style.css', 'script.js', 'README.md'];
      for (const file of filesToCopy) {
        const srcPath = path.resolve(__dirname, file);
        if (fs.existsSync(srcPath)) {
          fs.copyFileSync(srcPath, path.join(distDir, file));
        }
      }

      const assetsSrc = path.resolve(__dirname, 'assets');
      const assetsDest = path.join(distDir, 'assets');
      if (fs.existsSync(assetsSrc)) {
        fs.cpSync(assetsSrc, assetsDest, {recursive: true});
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [copyStaticBirthdayAssets()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
