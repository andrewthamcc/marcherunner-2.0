import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { StoryBookWrapper } from '../../utils'
import { Button, ButtonProps } from './button'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    label: 'Button',
    onClick: action('clicked'),
  },
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <StoryBookWrapper>
    <Button {...args} />
  </StoryBookWrapper>
)

export const Green = Template.bind({})
Green.args = {
  color: 'green',
}

export const Orange = Template.bind({})
Orange.args = {
  color: 'orange',
}

export const Disabled = Template.bind({})
Disabled.args = {
  color: 'green',
  disabled: true,
}

export const Borderless = Template.bind({})
Borderless.args = {
  color: 'green',
  border: false,
}

export const Plain = Template.bind({})
Plain.args = {
  plain: true,
}

export const WithChildren = () => {
  return (
    <Button label="With Children">
      <p>Child Element</p>
    </Button>
  )
}

export const Widths = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button label="100" width={100} />
      <Button label="200" width={200} />
      <Button label="400" width={400} />
    </div>
  )
}
