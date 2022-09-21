import React, { useState, RefObject } from 'react'
import { Text } from '..'
import './style.scss'

export interface TextInputProps {
  className?: string // passthrough for className
  disabled?: boolean // prop to disable input
  id?: string // id for input required if labels are being used
  name: string // name for label
  label?: string // label name
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void // passthrough of callback for onBlur event
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  placeholder?: string // placeholder text
  ref?: RefObject<HTMLInputElement> | null // forwardRef
  required?: boolean
  tabIndex?: number // passthrough for tab index
  value: string
}

// todo: investigate proper typing of forwardRef
export const TextInput: React.FC<TextInputProps> = ({
  className,
  disabled,
  id,
  name,
  label,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  required,
  tabIndex,
  value,
}) => {
  const [errors, setErrors] = useState<null | string>(null)

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(e)
    setErrors(null)
  }

  const validateInput = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e)

    if (required && value === '') {
      setErrors('This is required')
    }
  }

  return (
    <div className={`text-input ${className ? className : ''}`}>
      {!!label && <label htmlFor={id}>{label}</label>}
      <input
        className={`${errors ? 'error' : ''}`}
        disabled={disabled}
        id={id}
        name={name}
        onBlur={validateInput}
        onChange={onChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        tabIndex={tabIndex}
        type="text"
        value={value}
      />
      <Text
        className="text-input-errors"
        color="red"
        variant="body-copy-xsmall"
      >
        {errors}
      </Text>
    </div>
  )
}
