import { AppChakraProvider } from '@/app/providers/AppChakraProvider'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppChakraProvider>
      <h1>Aquí va el futuro dashboard</h1>
    </AppChakraProvider>
  </StrictMode>,
)
