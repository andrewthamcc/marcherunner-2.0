import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Toast, ToastProps } from './toast'
import { ToastProvider } from './toast.provider'
import { useToast } from './use-toast'
import { Button } from '../.'

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
  return (
    <Button
      onClick={() => toast('a toast message')}
      label="Show Toast"
    />
  )
}
