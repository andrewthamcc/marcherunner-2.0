import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Modal } from '.'

const MODAL_TEXT = 'I am Bob, the modal'

describe('Modal', () => {
  const closefn = jest.fn()
  const customRender = (isOpen = false) => {
    return (
      <div>
        <Modal close={closefn} isOpen={isOpen}>
          <p>{MODAL_TEXT}</p>
        </Modal>
        <div id="portal-root" />
      </div>
    )
  }

  it('does not render a modal if not open', () => {
    render(customRender())
    expect(screen.queryByText(MODAL_TEXT)).not.toBeInTheDocument()
  })

  it.skip('renders a modal if open', () => {
    render(customRender(true))
    expect(screen.getByText(MODAL_TEXT)).toBeInTheDocument()
  })

  it.skip('closes a modal on clickoutside', () => {
    render(customRender(true))
    expect(screen.getByText(MODAL_TEXT)).toBeInTheDocument()

    fireEvent.click(document)
    expect(closefn).toHaveBeenCalled()
  })
})
