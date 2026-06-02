import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  // GitHub Pages 部署: 项目页 (langery.github.io/atelier/)
  // dev 时用 '/', build (production) 时用 '/atelier/'
  base: mode === 'production' ? '/atelier/' : '/',
  server: {
    // 强制浏览器不缓存, 避免键入 URL 看到老内容
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  }
}))
