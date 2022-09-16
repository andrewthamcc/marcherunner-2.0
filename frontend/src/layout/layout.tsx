import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import './style.scss'

export const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  )
}
