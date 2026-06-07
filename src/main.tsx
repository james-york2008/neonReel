import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/base.css'
import './css/components/filters.css'
import './css/components/footer.css'
import './css/components/hero.css'
import './css/components/movies.css'
import './css/components/random.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
