import { defineConfig } from 'vite';

export default defineConfig({
  // Root directory is the project root
  root: '.',

  // Public directory for static assets
  publicDir: 'public',

  // Development server configuration
  server: {
    port: 3000,
    open: true, // Automatically open browser
    host: true, // Listen on all addresses
  },

  // Build configuration
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Copy these files/folders to dist
    rollupOptions: {
      input: {
        main: 'index.html',
        success: 'success.html',
      },
    },
  },

  // Preview server (for testing production build)
  preview: {
    port: 4173,
    open: true,
  },
});
