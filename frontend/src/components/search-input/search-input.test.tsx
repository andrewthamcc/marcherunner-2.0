import React from 'react'
import { render, screen, fireEvent, cleanup, act } from '@testing-library/react'
import { SearchInput } from '.'

describe('serch input', () => {
  afterEach(cleanup)
  const searchfn = jest.fn()
  const SEARCH_TEXT = 'searching'

  const customRender = (delay: number | undefined = undefined) => {
    return (
      <SearchInput
        label="search-input"
        name="search-input-test"
        onSearch={searchfn}
        searchDelay={delay}
      />
    )
  }

  it('renders', () => {
    render(customRender())
  })

  it('searches after a specified amount of time', async () => {
    render(customRender(5))

    expect(searchfn).not.toHaveBeenCalled()

    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: SEARCH_TEXT },
      })
    })

    expect(searchfn).not.toHaveBeenCalled()
    await new Promise((r) => setTimeout(r, 500))
    expect(searchfn).toHaveBeenCalledWith(SEARCH_TEXT)
  })

  it('does not have a clear button without search text', () => {
    render(customRender())
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('can clear the search input', () => {
    render(customRender())

    act(() => {
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: SEARCH_TEXT },
      })
    })

    act(() => {
      fireEvent.click(screen.getByRole('button'))
    })
    expect(screen.getByRole('textbox')).toHaveValue('')
  })
})
