import { useContext } from 'react'
import { MessageOptions, ToastContext } from './toast.provider'

type Toast = (message: string, options?: MessageOptions) => void

export function useToast(): Toast {
  const toastContext = useContext(ToastContext)
  if (!toastContext)
    throw new Error('Cannot use toast messages outside of toast provider.')

  return toastContext.showToast
}
