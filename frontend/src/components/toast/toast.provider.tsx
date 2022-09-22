import React, { useState, createContext } from 'react'
import { Toast, ToastProps } from './toast'
import './style.scss'

export type MessageOptions = Pick<ToastProps, 'variant' | 'timeout'>
interface ToastMessage extends MessageOptions {
  id: number
  message: string
}

interface IToastContext {
  showToast: (message: string, options?: MessageOptions) => void
}

export const ToastContext = createContext<IToastContext | null>(null)

export const ToastProvider: React.FC = ({ children }) => {
  const [toastMessages, setToastMessages] = useState<ToastMessage[]>([])

  const closeToast = (id: number) => {
    setToastMessages((prev) => prev.filter((t) => t.id !== id))
  }

  const showToast = (
    message: string,
    options: MessageOptions = { variant: undefined, timeout: undefined }
  ) => {
    const newToast = { message, ...options, id: toastMessages.length }
    setToastMessages((prev) => [...prev, newToast])
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toastMessages.length === 0 ? null : (
        <ul className="toast-list">
          {toastMessages.map(({ id, ...messageProps }) => (
            <li className="toast-list-item" key={id}>
              <Toast
                {...messageProps}
                closeToast={() => closeToast(id)}
                showToast
                timeout={3500}
              />
            </li>
          ))}
        </ul>
      )}
    </ToastContext.Provider>
  )
}
