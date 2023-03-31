import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { theme } from './components/Theme'
import './index.css'
import { About } from './routes/about'
import { Cleaning } from './routes/cleaning'
import { Contact } from './routes/contact'
import { Regulations } from './routes/regulations'
import { Reviews } from './routes/reviews'
import { Root } from './routes/root'
import { Tips } from './routes/tips'

console.log('theme', theme)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/tips',
        element: <Tips />,
      },
      {
        path: '/regulations',
        element: <Regulations />,
      },
      {
        path: '/cleaning',
        element: <Cleaning />,
      },
      {
        path: '/reviews',
        element: <Reviews />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/',
        element: (
          <Navigate
            to="/about"
            replace
          />
        ),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
