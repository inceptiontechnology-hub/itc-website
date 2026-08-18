import { defineConfig } from 'vite';

export default defineConfig({
  root: '/Users/tonyscottensminger/.openclaw/workspace-itc/projects/itc-website/manus-source/itc-landing',
  build: {
    rollupOptions: {
      input: '/Users/tonyscottensminger/.openclaw/workspace-itc/projects/itc-website/manus-source/itc-landing/index.html',
    },
  },
});