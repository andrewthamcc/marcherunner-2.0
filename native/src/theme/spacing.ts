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
  xxsmall: '10px',
  xsmall: '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
  xlarge: '20px',
  xxlarge: '22px',
}
