import React from 'react'
import { Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { useModal } from '../../hooks'
import { Button } from '../button'
import { ConfirmationModal } from './confirmation-modal'

export default {
  title: 'Molecules/ConfirmationModal',
  component: ConfirmationModal,
} as Meta

export const Simple = () => {
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <div>
      <Button label="Open Modal" onClick={openModal} />
      <ConfirmationModal
        close={closeModal}
        isOpen={isOpen}
        message="Confirmation Modal"
        onConfirm={action('confirm')}
      />
      <div id="portal-root" />
    </div>
  )
}
