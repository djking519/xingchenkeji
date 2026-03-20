import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 关键修改：改为根路径，因为你的文件在仓库根目录
  base: '/',

  plugins: [react()],

  build: {
    // 明确指定输出目录为 dist
    outDir: 'dist',
    // 可选：如果你的项目是纯静态页面，可以开启
    // emptyOutDir: true,
  },

  server: {
    port: 3000,
    open: true,
    // 修复本地开发时可能出现的路径解析问题
    origin: '',
  },
});