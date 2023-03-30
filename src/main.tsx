import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const theme = extendTheme({
  fonts: {
    heading: 'Roboto, serif',
    body: 'Roboto, sans-serif',
    mono: 'Roboto, sans-serif',
  },
})
console.log('theme', theme)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
