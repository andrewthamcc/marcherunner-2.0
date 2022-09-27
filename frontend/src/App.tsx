import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloWrapper } from './apollo'
import { ToastProvider } from './components/toast'
import { Auth0WrapperWithHistory } from './auth'
import Pages from './pages'
import './theme/app.scss'
import ErrorBoundary from './error-boundary'

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Auth0WrapperWithHistory>
          <ApolloWrapper>
            <ToastProvider>
              <Pages />
            </ToastProvider>
          </ApolloWrapper>
        </Auth0WrapperWithHistory>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
