import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppChakraProvider } from '@/app/providers/AppChakraProvider'
import { RouterProvider } from 'react-router-dom'
import { route } from '@/app/routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppChakraProvider>
      <RouterProvider router={route} />
    </AppChakraProvider>
  </StrictMode>,
)
