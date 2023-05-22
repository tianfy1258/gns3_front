import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
export default defineConfig({
  plugins: [vue()],
  // base:"./backend/",
  resolve:{
    extensions:['.vue','.js'],
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },

})
