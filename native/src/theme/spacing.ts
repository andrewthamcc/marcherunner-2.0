const SPACING_VALUES = [
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
] as const

export type SpacingValues = typeof SPACING_VALUES[number]

export const spacing: Record<SpacingValues, string> = {
  xxsmall: '4px',
  xsmall: '8px',
  small: '10px',
  medium: '12px',
  large: '16px',
  xlarge: '18px',
  xxlarge: '20px',
}
