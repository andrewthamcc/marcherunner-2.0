import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { useOutsideClick } from '../../hooks'
import './style.scss'

interface ModalProps {
  className?: string
  close: () => void // prop to close modal from parent
  isOpen: boolean // boolean to determine to display modal or not
}

export const Modal: React.FC<ModalProps> = ({
  children,
  className,
  close,
  isOpen,
}) => {
  const node = useRef<null | HTMLDivElement>(null)
  useOutsideClick(node, isOpen, close)

  const modal = (
    <div className="modal">
      <div
        className={`modal-container ${className ? className : ''}`}
        ref={node}
      >
        {children}
      </div>
    </div>
  )

  const portalRoot = document.querySelector('#portal-root')

  if (!isOpen || !portalRoot) return null

  return ReactDOM.createPortal(modal, portalRoot)
}
