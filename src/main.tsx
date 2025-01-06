import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/features/store.ts'
import { ThemeProvider } from './providers/theme-provider.tsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/route.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={routes}>
        </RouterProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
