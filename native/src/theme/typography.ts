export const TEXT_VARIANTS = [
  'body-copy',
  'body-copy-small',
  'body-copy-xsmall',
  'body-copy-large',
  'body-copy-xlarge',
] as const
export type TextVariant = typeof TEXT_VARIANTS[number]

export interface Typography {
  fontSize: string
  lineHeight: string
  fontWeight: number
}

export const typography: Record<TextVariant, Typography> = {
  'body-copy': {
    fontSize: '16px',
    lineHeight: '',
    fontWeight: 400,
  },
  'body-copy-small': {
    fontSize: '14px',
    lineHeight: '',
    fontWeight: 400,
  },
  'body-copy-xsmall': {
    fontSize: '12px',
    lineHeight: '',
    fontWeight: 400,
  },
  'body-copy-large': {
    fontSize: '18px',
    lineHeight: '',
    fontWeight: 400,
  },
  'body-copy-xlarge': {
    fontSize: '20px',
    lineHeight: '',
    fontWeight: 400,
  },
}
