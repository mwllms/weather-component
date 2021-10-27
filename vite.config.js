import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/main.js'),
      name: 'WeatherApp',
      fileName: (format) => `weather.${format}.js`,
    },
  },
})
