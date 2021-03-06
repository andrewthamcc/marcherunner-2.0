import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from './apollo/client'
import { BrowserRouter } from 'react-router-dom'
import Pages from './pages'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
