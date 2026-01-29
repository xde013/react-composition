import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ 
    babel: {
      plugins: [
        'babel-plugin-react-compiler',
      ],
    },
  }), tailwindcss()],
  resolve: {
    alias: {
      '@components': path.resolve(process.cwd(), 'src/components'),
      '@hooks': path.resolve(process.cwd(), 'src/hooks'),
      '@context': path.resolve(process.cwd(), 'src/context'),
      '@providers': path.resolve(process.cwd(), 'src/providers'),
      '@types': path.resolve(process.cwd(), 'src/types'),
      '@utils': path.resolve(process.cwd(), 'src/utils'),
    },
  },

  // Dev performance: pre-bundle and warm up
  optimizeDeps: {
    include: ['react', 'react-dom', 'clsx', 'tailwind-merge'],
  },
  server: {
    warmup: {
      clientFiles: ['./src/main.tsx', './src/App.tsx', './src/components/ShoppingApp/Root.tsx'],
    },
  },

  // Build performance and output
  build: {
    target: 'esnext',
    minify: 'esbuild',
    reportCompressedSize: false,
    sourcemap: false,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react/')) {
              return 'vendor-react'
            }
            return 'vendor'
          }
        },
      },
    },
  },
})
