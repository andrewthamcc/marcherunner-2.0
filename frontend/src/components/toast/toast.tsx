import React, { useEffect } from 'react'
import { Symbol, SymbolVariants } from '../symbol'
import { IconButton } from '../icon-button'

export const TOAST_TYPES = ['success', 'error', 'warning', 'info'] as const
export type ToastVariants = typeof TOAST_TYPES[number]

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
  timeout = 3000,
  variant,
}) => {
  useEffect(() => {
    if (!timeout) return

    const toastTimeout = setTimeout(onClose, timeout)
    return () => clearTimeout(toastTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showToast, timeout])

  const toast = (
    <div className={`toast ${showToast ? 'fadeIn' : ''}`}>
      <div className="toast-wrapper">
        {variant && (
          <Symbol symbol={variant as SymbolVariants} className="toast-symbol" />
        )}
        <p className="toast-message">{message}</p>
        <IconButton
          onClick={() => onClose()}
          className="toast-close"
          icon="close"
        />
      </div>
    </div>
  )

  if (showToast) return toast
  return null
}
