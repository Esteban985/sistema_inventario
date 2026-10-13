import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SistemaProvider } from './context/contextSistema.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <SistemaProvider>
    <App />
  </SistemaProvider>
)
