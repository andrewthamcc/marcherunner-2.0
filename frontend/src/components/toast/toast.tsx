import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

const toastTypes = ['plain', 'success', 'error', 'warning', 'info'] as const
export type ToastVariants = typeof toastTypes[number]

export interface ToastProps {
  message: string
  onClose: () => void
  showToast: boolean
  timeout?: number
  variant?: ToastVariants
}

export const Toast: React.FC<ToastProps> = ({
  message,
  onClose,
  showToast,
  timeout = 2500,
  variant = 'plain',
}) => {
  useEffect(() => {
    if (!timeout) return

    if (showToast) {
      setTimeout(() => {
        onClose()
      }, timeout)
    }
  }, [showToast, onClose, timeout])

  const toast = (
    <div className={`toast ${showToast ? 'fadeIn' : ''}`}>
      <div className="toast-wrapper">
        <p className="toast-message">{message}</p>
      </div>
    </div>
  )

  const toastPortal = document.querySelector('#toast-portal')

  if (toastPortal) return ReactDOM.createPortal(toast, toastPortal!)

  return null
}
