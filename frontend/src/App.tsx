import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import client from './apollo/client'
import { ToastProvider } from './components/toast'
import Pages from './pages'
import './theme/app.scss'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ToastProvider>
          <Pages />
        </ToastProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
