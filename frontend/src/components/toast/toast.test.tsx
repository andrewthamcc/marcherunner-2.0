import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Toast, ToastVariants } from './toast'

describe('Toast message', () => {
  const closefn = jest.fn()

  const customRender = (
    showToast = true,
    message = 'toast message',
    timeout?: number,
    variant?: ToastVariants
  ) => (
    <div>
      <Toast
        closeToast={closefn}
        message={message}
        showToast={showToast}
        timeout={timeout}
        variant={variant}
      />
    </div>
  )

  test('renders', () => {
    render(customRender())

    const toast = screen.getByText(/toast/i)
    expect(toast).toBeInTheDocument()
  })

  test('calls close fn', async () => {
    render(customRender())

    const close = screen.getByRole('button')
    fireEvent.click(close)
    expect(closefn).toBeCalledTimes(1)
  })
})
