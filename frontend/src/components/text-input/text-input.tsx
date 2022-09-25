import React, { useState } from 'react'
import { Text } from '../text'
import './style.scss'

export interface TextInputProps {
  autofocus?: boolean
  className?: string
  disabled?: boolean
  id?: string
  name: string
  label?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void // passthrough of callback for onBlur event
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  tabIndex?: number // passthrough for tab index
  value: string
}

export const TextInput: React.FC<TextInputProps> = ({
  autofocus = false,
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

    if (required && !value) {
      setErrors('This is required')
    }
  }

  return (
    <div className={`text-input ${className ? className : ''}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        autoFocus={autofocus}
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
