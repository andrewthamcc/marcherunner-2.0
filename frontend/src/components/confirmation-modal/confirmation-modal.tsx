import React from 'react'
import { Button, Modal, Text } from '..'
import './style.scss'

interface ConfirmationModalProps {
  close: () => void
  isOpen: boolean
  message?: string
  onConfirm: () => void
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  children,
  close,
  isOpen,
  message = '',
  onConfirm,
}) => {
  return (
    <Modal close={close} isOpen={isOpen}>
      <div className="confirmation-modal">
        <div className="confirmation-modal-body">
          {children ? children : <Text align="center">{message}</Text>}
        </div>

        <div className="confirmation-modal-controls">
          <Button
            className="confirmation-modal-buttons"
            color="orange"
            label="Cancel"
            onClick={close}
          />
          <Button
            className="confirmation-modal-buttons"
            color="green"
            label="Confirm"
            onClick={onConfirm}
          />
        </div>
      </div>
    </Modal>
  )
}
