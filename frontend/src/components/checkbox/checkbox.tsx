import React from 'react'
import { Symbol } from '../symbol'

require('./style.scss')

export interface CheckboxProps {
  checked: boolean // boolean for marking checked
  className?: string
  disabled?: boolean
  id?: string // id for input required if labels are being used
  name: string // name for label
  label?: string
  onChange: () => void // change handler
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  className,
  disabled = false,
  id,
  name,
  label,
  onChange,
}) => {
  return (
    <div className={`checkbox ${className ? className : ''}`}>
      <input
        checked={checked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        type="checkbox"
      />
      <span className="checkbox-icon" onClick={onChange}>
        <Symbol symbol={checked ? 'checkmark' : 'unselected'} />
      </span>
      <label htmlFor={id} className={`${checked ? 'checked' : ''}`}>
        {label}
      </label>
    </div>
  )
}
