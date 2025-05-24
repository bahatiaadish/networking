import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// GitHub Pages routing handler
const redirectFromGitHubPages = () => {
  const { pathname, search, hash } = window.location
  const pathSegments = pathname.split('/')
  
  // Check if we need to redirect (we're on a GitHub Pages URL with a ?/ pattern)
  if (search.includes('?/')) {
    const redirectPath = search.replace('?/', '') + hash
    window.history.replaceState(null, '', redirectPath)
  }
}

// Handle GitHub Pages routing
redirectFromGitHubPages()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
