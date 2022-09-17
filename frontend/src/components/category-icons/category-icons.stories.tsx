import React from 'react'
import { Meta } from '@storybook/react'
import { CategoryIcons, CATEGORY_ICONS } from './category-icons'

export default {
  title: 'Atoms/CategoryIcons',
  component: CategoryIcons,
} as Meta

export const symbols: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {CATEGORY_ICONS.map((c, index) => (
        <CategoryIcons icon={c} key={index} />
      ))}
    </div>
  )
}
