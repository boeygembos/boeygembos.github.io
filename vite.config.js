import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'decap-cms-admin',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/admin') {
            // Redirect /admin to /admin/ so the browser treats it as a directory
            res.writeHead(301, { Location: '/admin/' })
            res.end()
            return
          }
          if (req.url === '/admin/') {
            req.url = '/admin/index.html'
          }
          next()
        })
      }
    }
  ]
})
