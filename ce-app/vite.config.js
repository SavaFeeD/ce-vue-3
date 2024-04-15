import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [
    vue({
      customElement: true,
    }),
    Components({ }),
  ],
  build: {
		cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: false,
        inlineDynamicImports: true,
        entryFileNames: 'alchemyth.js', 
        assetFileNames: 'alchemyth.[ext]',
      },
    },
	},
});
