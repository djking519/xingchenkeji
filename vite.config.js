import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 指定部署的基础路径为 '/xingchenkeji/'
  base: '/xingchenkeji/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});