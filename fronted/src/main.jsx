import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SistemaProvider } from './context/contextSistema.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { sileo, Toaster } from 'sileo'

createRoot(document.getElementById('root')).render(
  <SistemaProvider>
    <Toaster position='top-center' />
    <App />
  </SistemaProvider>
)
