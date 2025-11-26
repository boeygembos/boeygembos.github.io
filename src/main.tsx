import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Don't render React app if we're on the /admin route (let Decap CMS handle it)
if (!window.location.pathname.startsWith('/admin')) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
