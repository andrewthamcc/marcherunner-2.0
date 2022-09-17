import React from 'react'
import { Meta } from '@storybook/react'
import { useModal } from '../../hooks'
import { Button } from '../button'
import { Modal } from './modal'

export default {
  title: 'Molecules/Modal',
  component: Modal,
} as Meta

export const Simple = () => {
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <div>
      <Button label="Open Modal" onClick={openModal} />
      <Modal close={closeModal} isOpen={isOpen}>
        <p>I am the modal!</p>
      </Modal>
      <div id="portal-root" />
    </div>
  )
}
