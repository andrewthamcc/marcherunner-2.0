import React, { useState } from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Checkbox } from './checkbox'

export default {
  title: 'Atoms/Button',
  component: Checkbox,
} as Meta

export const Simple = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      checked={checked}
      id="checkbox"
      label="Checkbox"
      name="checkbox-story"
      onChange={() => setChecked(!checked)}
    />
  )
}
