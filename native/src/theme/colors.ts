const COLOR_VALUES = [
  'green',
  'orange',
  'black',
  'light-grey',
  'grey',
  'red',
  'white',
] as const

export type ColorValues = typeof COLOR_VALUES[number]

export const colors: Record<ColorValues, string> = {
  green: '#18bc33',
  orange: '#eb8e14',
  black: '#1e1e1e',
  'light-grey': '#c0c0c0',
  grey: '#747474',
  red: '#ff0000',
  white: '#ffffff',
}
