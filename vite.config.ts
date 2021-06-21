import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default (): UserConfig => {
  return {
    plugins: [vue(), WindiCSS()],
    server: {
      host: '0.0.0.0',
      port: 8080,
    },
  }
}
