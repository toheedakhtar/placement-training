import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CountProvider from './Context/CountProvider.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <CountProvider>
      <Outlet />
    <App />
    </CountProvider>
    </BrowserRouter>
  </StrictMode>,
)
