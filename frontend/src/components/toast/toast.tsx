import React, { useEffect } from 'react'
import { Symbol, SymbolVariants } from '../symbol'
import { IconButton } from '../icon-button'
import { Text } from '../text'

export const TOAST_TYPES = ['success', 'error', 'warning', 'info'] as const
export type ToastVariants = typeof TOAST_TYPES[number]

export interface ToastProps {
  closeToast: () => void
  message: string
  showToast: boolean
  timeout?: number
  variant?: ToastVariants
}

export const Toast: React.FC<ToastProps> = ({
  closeToast,
  message,
  showToast,
  timeout = 3000,
  variant,
}) => {
  useEffect(() => {
    if (!timeout) return

    const toastTimeout = setTimeout(closeToast, timeout)
    return () => clearTimeout(toastTimeout)
  }, [showToast, timeout])

  const toast = (
    <div className={`toast ${showToast ? 'fadeIn' : ''}`}>
      <div className="toast-wrapper">
        {variant && (
          <Symbol className="toast-symbol" symbol={variant as SymbolVariants} />
        )}
        <Text className="toast-message" variant="body-copy-xsmall">
          {message}
        </Text>
        <IconButton
          a11ylabel="close-toast"
          className="toast-close"
          icon="close"
          onClick={closeToast}
        />
      </div>
    </div>
  )

  if (showToast) return toast
  return null
}
