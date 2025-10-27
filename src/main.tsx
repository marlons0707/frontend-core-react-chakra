import { Provider } from '@/app/providers/ChakraProvider'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <h1>Hello World</h1>
    </Provider>
  </StrictMode>,
)
