import React from 'react'
import { Symbol } from '../symbol'
import './style.scss'

export interface RadioButtonProps {
  checked: boolean
  className?: string // passthrough for className
  disabled?: boolean
  id?: string // id for input required if labels are being used
  name: string // name for label
  label?: string // label name
  onChange: () => void // change handler
  value: string | number
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  className,
  disabled = false,
  id,
  name,
  label,
  onChange,
  value,
}) => {
  return (
    <div className={`radio-button ${className ? className : ''}`}>
      <input
        checked={checked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <span className="radio-button-icon" onClick={onChange}>
        <Symbol symbol={checked ? 'selected' : 'unselected'} />
      </span>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
