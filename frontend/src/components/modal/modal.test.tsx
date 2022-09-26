import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { Modal } from '.'

const MODAL_TEXT = 'I am Bob, the modal'

describe('Modal', () => {
  afterEach(cleanup)
  const closefn = jest.fn()
  const customRender = (isOpen = false) => {
    return (
      <Modal close={closefn} isOpen={isOpen}>
        <p>{MODAL_TEXT}</p>
      </Modal>
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

  it.skip('closes a modal on clickoutside', () => {
    const { getByText } = render(customRender(true))
    expect(getByText(MODAL_TEXT)).toBeInTheDocument()
  })
})
