import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { ConfirmationModal } from './confirmation-modal'

const MODAL_TEXT = 'CONFIRM!'

describe('Confirmation Modal', () => {
  afterEach(cleanup)
  const closefn = jest.fn()
  const confirmfn = jest.fn()

  const customRender = (isOpen = false) => {
    return (
      <ConfirmationModal
        close={closefn}
        isOpen={isOpen}
        message={MODAL_TEXT}
        onConfirm={confirmfn}
      />
    )
  }

  it('does not render a modal if not open', () => {
    render(customRender())
    expect(screen.queryByText(MODAL_TEXT)).not.toBeInTheDocument()
  })

  it('renders a modal if open', () => {
    const { getByText } = render(customRender(true))
    expect(getByText(MODAL_TEXT)).toBeInTheDocument()
  })

  it('calls the confirmation function', () => {
    const { getByRole } = render(customRender(true))
    const confirm = getByRole('button', { name: /confirm/i })
    fireEvent.click(confirm)
    expect(confirmfn).toHaveBeenCalled()
  })
})
