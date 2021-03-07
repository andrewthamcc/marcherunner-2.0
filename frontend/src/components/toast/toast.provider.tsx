import React, { useState, createContext } from 'react'
import { Toast, ToastProps } from './toast'

export type MessageOptions = Pick<ToastProps, 'variant' | 'timeout'>
interface ToastMessage extends MessageOptions {
  message: string
}

interface IToastContext {
  showToast: (message: string, options?: MessageOptions) => void
}

export const ToastContext = createContext<IToastContext | null>(null)

export const ToastProvider: React.FC = ({ children }) => {
  const [toastMessages, setToastMessages] = useState<ToastMessage[]>([])

  function closeToast(index: number) {
    const remainingToasts = toastMessages.filter((t, i) => i !== index)
    setToastMessages(remainingToasts)
  }

  function showToast(
    message: string,
    options: MessageOptions = { variant: 'plain', timeout: undefined }
  ) {
    const newToasts = [...toastMessages, { message, ...options }]
    setToastMessages(newToasts)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div id="toast-portal" />
      <ul className="toast-list">
        {toastMessages.map(({ ...messageProps }, index) => (
          <li className="toast-list-item" key={index}>
            <Toast
              {...messageProps}
              onClose={() => closeToast(index)}
              showToast
            />
          </li>
        ))}
      </ul>
    </ToastContext.Provider>
  )
}
