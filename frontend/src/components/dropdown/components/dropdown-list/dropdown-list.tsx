import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { DropItem } from '../../'
import { DropdownItem } from '..'
import './style.scss'

interface Coords {
  width?: number
  x: number
  y: number
}

interface Props {
  coords: Coords // passthrough of coordinates to render list
  isOpen: boolean
  list: DropItem[] // passthrough of list items
  listWidth?: number // passthrough of optional prop for width of rendered list
  onChange: (value: DropItem) => void // passthrough of function for selecting value
}

export const DropdownList: React.FC<Props> = ({
  coords,
  isOpen,
  list,
  listWidth,
  onChange,
}) => {
  useEffect(() => {
    let portalRoot = document.querySelector('#portal-root')
    if (!portalRoot) {
      portalRoot = document.createElement('div')
      portalRoot.setAttribute('id', 'portal-root')
      document.body.appendChild(portalRoot)
    }
  }, [])

  const style = {
    width: listWidth ? listWidth : coords.width,
    top: coords.y,
    left: coords.x,
  }

  const dropdownList = (
    <ul className="dropdown-list" style={style}>
      {list.map((item, index) => (
        <DropdownItem item={item} key={index} onChange={onChange} />
      ))}
    </ul>
  )

  const portalRoot = document.querySelector('#portal-root')

  if (!isOpen || !portalRoot) return null

  return ReactDOM.createPortal(dropdownList, portalRoot)
}
