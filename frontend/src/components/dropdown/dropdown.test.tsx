import React from 'react'
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react'
import { Dropdown, DropItem } from '.'

const list: DropItem[] = [
  {
    disabled: false,
    label: 'Item 1',
    value: '1',
  },
  {
    disabled: false,
    label: 'Item 2',
    value: '1',
  },
  {
    disabled: false,
    label: 'Item 3',
    value: '1',
  },
]

describe('Dropdown', () => {
  afterEach(cleanup)
  const onChangefn = jest.fn()

  const customRender = (value: DropItem | null = null, disabled = false) => {
    return (
      <Dropdown
        disabled={disabled}
        label="Dropdown Menu"
        list={list}
        onChange={onChangefn}
        value={value}
      />
    )
  }

  it('renders', () => {
    render(customRender())
  })

  it('renders a disabled dropdown', () => {
    render(customRender(undefined, true))
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it.skip('displays a list of items when opened', async () => {
    const { getByRole, getAllByRole } = render(customRender())

    fireEvent.click(getByRole('button'))
    await waitFor(() => {
      expect(getAllByRole('button')).toHaveLength(list.length + 1)
    })
  })
})
