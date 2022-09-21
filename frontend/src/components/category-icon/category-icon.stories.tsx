import React from 'react'
import { Meta } from '@storybook/react'
import { CategoryIcon, CATEGORY_ICONS } from './category-icon'

export default {
  title: 'Atoms/CategoryIcon',
  component: CategoryIcon,
} as Meta

export const categoryIcons: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '20px',
      }}
    >
      {CATEGORY_ICONS.map((c, index) => (
        <CategoryIcon icon={c} key={index} />
      ))}
    </div>
  )
}
