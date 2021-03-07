import React from 'react'
import { render, screen } from '@testing-library/react'
import { Toast, ToastVariants } from './toast'

describe.skip('Toast message', () => {
  const closefn = jest.fn()

  const customRender = (
    showToast: boolean = true,
    message: string = 'toast message',
    timeout?: number,
    variant?: ToastVariants
  ) => (
    <>
      <div id="toast-portal" />
      <Toast
        showToast={showToast}
        message={message}
        onClose={closefn}
        variant={variant}
        timeout={timeout}
      />
    </>
  )

  test('renders', async () => {
    render(customRender())

    const toast = screen.getByText(/toast/i)
    expect(toast).toBeInTheDocument()
  })
})
