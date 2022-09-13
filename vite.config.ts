import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/variables.scss';`
      }
    }
  },
  server: {
    proxy: {
      // 字符串简写写法
      // /foo/111 => http://localhost:4567/foo/111
      '/foo': 'http://localhost:4567',
      // 选项写法
      '/api': {
        // 代理的目标地址
        target: 'http://jsonplaceholder.typicode.com',
        // 兼容基于名字的虚拟主机
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
