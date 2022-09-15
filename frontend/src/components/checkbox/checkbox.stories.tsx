import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import { Checkbox } from './checkbox'

export default {
  title: 'Atoms/Checkbox',
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
