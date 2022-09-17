import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
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

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  })

  const handleOutsideClick = (e: MouseEvent) => {
    if (node && node.current && node.current.contains(e.target as Node)) {
      return
    }

    close()
  }

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
