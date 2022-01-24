const COLOR_VALUES = ['green', 'orange', 'black', 'grey', 'red'] as const

export type ColorValues = typeof COLOR_VALUES[number]

export const colors: Record<ColorValues, string> = {
  green: '#18bc33',
  orange: '#eb8e14',
  black: '#1e1e1e',
  grey: '#747474',
  red: 'ff0000',
}
