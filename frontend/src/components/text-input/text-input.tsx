import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
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

interface TextInputHandle {
  focusInput: () => void
}

const TextInputWithRef: React.ForwardRefRenderFunction<
  TextInputHandle,
  TextInputProps
> = (
  {
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
  },
  ref
) => {
  const [errors, setErrors] = useState<null | string>(null)
  useImperativeHandle(ref, () => ({ focusInput }))
  const inputRef = useRef<HTMLInputElement | null>(null)

  const focusInput = () => {
    if (inputRef && inputRef.current) inputRef.current.focus()
  }

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
        ref={inputRef}
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

export const TextInput = forwardRef(TextInputWithRef)
