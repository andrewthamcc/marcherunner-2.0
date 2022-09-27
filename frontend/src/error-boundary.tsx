import React, { Component } from 'react'
import { Text } from './components'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error: null | string
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error: Error): State {
    console.error(error)

    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.toString() }
  }

  render(): React.ReactNode {
    const { hasError, error } = this.state
    const { children } = this.props

    if (hasError)
      return (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text align="center">An unexpected error has occured.</Text>
          <Text align="center" variant="body-copy-xsmall">
            {error}
          </Text>
        </div>
      )

    return children
  }
}

export default ErrorBoundary
