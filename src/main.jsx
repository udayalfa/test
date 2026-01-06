import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   <Toaster
  position="top-center"
  toastOptions={{
    className:
      "rounded-xl px-6 py-4 text-lg shadow-lg min-w-[300px] max-w-[500px]",
  }}
/>
  </StrictMode>,
)
