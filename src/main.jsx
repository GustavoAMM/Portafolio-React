import React from 'react'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import * as ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>

)
