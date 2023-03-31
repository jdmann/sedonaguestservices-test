import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { theme } from './components/Theme'
import './index.css'
import { Contact } from './routes/contact'
import { Reviews } from './routes/reviews'
import { Root } from './routes/root'

console.log('theme', theme)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      // {
      //   path: '/about',
      //   element: <About />,
      // },
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
            to="/reviews"
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
