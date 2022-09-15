import React from 'react'
import { Meta } from '@storybook/react'
import { Icon, ICON_TYPES } from './icon'

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta

export const icons: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {ICON_TYPES.map((icon, index) => (
        <Icon key={index} icon={icon} color="grey" />
      ))}
    </div>
  )
}
