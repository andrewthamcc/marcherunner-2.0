import { useContext } from 'react'
import { Theme, ThemeContext } from './theme.provider'


export function useTheme(): Theme {
  const theme = useContext(ThemeContext)
  if (!theme)
    throw new Error('Cannot use theme outside of theme provider.')

  return theme
}
