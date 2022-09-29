import React, { createContext } from 'react'
import { colors } from './colors'
import { spacing } from './spacing'
import { typography } from './typography'

export interface Theme {
  colors: typeof colors
  spacing: typeof spacing
  typography: typeof typography
}

export const ThemeContext = createContext<Theme>({
  colors,
  spacing,
  typography,
})

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ colors, spacing, typography }}>
      {children}
    </ThemeContext.Provider>
  )
}
