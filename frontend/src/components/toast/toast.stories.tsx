import React from 'react'
import { Meta } from '@storybook/react'
import { Button } from '../.'
import { Toast, ToastProps, TOAST_TYPES, ToastVariants } from './toast'
import { ToastProvider } from './toast.provider'
import { useToast } from './use-toast'

export default {
  title: 'Molecules/Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} as Meta

export const Plain: React.FC<ToastProps> = () => {
  const toast = useToast()

  function handleClick(type: ToastVariants) {
    toast('a toast message', { variant: type })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {TOAST_TYPES.map((type, index) => (
        <Button
          key={index}
          label={`${type}`}
          onClick={() => handleClick(type)}
        />
      ))}
    </div>
  )
}
